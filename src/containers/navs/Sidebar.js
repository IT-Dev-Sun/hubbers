import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Nav, NavItem, Collapse } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';

import IntlMessages from '../../helpers/IntlMessages';

import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames,
  changeSelectedMenuHasSubItems,
} from '../../redux/actions';

import menuItems from '../../constants/menu';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedParentMenu: '',
      viewingParentMenu: '',
      collapsedMenus: [],
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
    this.handleProps();
    this.setSelectedLiActive(this.setHasSubItemStatus);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      this.setSelectedLiActive(this.setHasSubItemStatus);

      window.scrollTo(0, 0);
    }
    this.handleProps();
  }

  componentWillUnmount() {
    this.removeEvents();
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = (event) => {
    const { setContainerClassnames: setCC, selectedMenuHasSubItems } =
      this.props;
    if (event && !event.isTrusted) {
      return;
    }
    const { containerClassnames } = this.props;
    const nextClasses = this.getMenuClassesForResize(containerClassnames);
    setCC(0, nextClasses.join(' '), selectedMenuHasSubItems);
  };

  handleDocumentClick = (e) => {
    const container = this.getContainer();
    let isMenuClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains('menu-button') ||
        e.target.classList.contains('menu-button-mobile'))
    ) {
      isMenuClick = true;
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      (e.target.parentElement.classList.contains('menu-button') ||
        e.target.parentElement.classList.contains('menu-button-mobile'))
    ) {
      isMenuClick = true;
    } else if (
      e.target.parentElement &&
      e.target.parentElement.parentElement &&
      e.target.parentElement.parentElement.classList &&
      (e.target.parentElement.parentElement.classList.contains('menu-button') ||
        e.target.parentElement.parentElement.classList.contains(
          'menu-button-mobile'
        ))
    ) {
      isMenuClick = true;
    }
    if (container.contains(e.target) || container === e.target || isMenuClick) {
      return;
    }
    this.setState({
      viewingParentMenu: '',
    });
    this.toggle();
  };

  getMenuClassesForResize = (classes) => {
    const { menuHiddenBreakpoint, subHiddenBreakpoint } = this.props;
    let nextClasses = classes.split(' ').filter((x) => x !== '');
    const windowWidth = window.innerWidth;
    if (windowWidth < menuHiddenBreakpoint) {
      nextClasses.push('menu-mobile');
    } else if (windowWidth < subHiddenBreakpoint) {
      nextClasses = nextClasses.filter((x) => x !== 'menu-mobile');
      if (
        nextClasses.includes('menu-default') &&
        !nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses.push('menu-sub-hidden');
      }
    } else {
      nextClasses = nextClasses.filter((x) => x !== 'menu-mobile');
      if (
        nextClasses.includes('menu-default') &&
        nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses = nextClasses.filter((x) => x !== 'menu-sub-hidden');
      }
    }
    return nextClasses;
  };

  getContainer = () => {
    /* eslint-disable */
    return ReactDOM.findDOMNode(this);
    /* eslint-enable */
  };

  toggle = () => {
    const {
      changeSelectedMenuHasSubItems: changeSMHS,
      setContainerClassnames: setCC,
    } = this.props;
    const hasSubItems = this.getIsHasSubItem();
    changeSMHS(hasSubItems);
    const { containerClassnames, menuClickCount } = this.props;
    const currentClasses = containerClassnames
      ? containerClassnames.split(' ').filter((x) => x !== '')
      : '';
    let clickIndex = -1;

    if (!hasSubItems) {
      if (
        currentClasses.includes('menu-default') &&
        (menuClickCount % 4 === 0 || menuClickCount % 4 === 3)
      ) {
        clickIndex = 1;
      } else if (
        currentClasses.includes('menu-sub-hidden') &&
        (menuClickCount === 2 || menuClickCount === 3)
      ) {
        clickIndex = 0;
      } else if (
        currentClasses.includes('menu-hidden') ||
        currentClasses.includes('menu-mobile')
      ) {
        clickIndex = 0;
      }
    } else if (
      currentClasses.includes('menu-sub-hidden') &&
      menuClickCount === 3
    ) {
      clickIndex = 2;
    } else if (
      currentClasses.includes('menu-hidden') ||
      currentClasses.includes('menu-mobile')
    ) {
      clickIndex = 0;
    }
    if (clickIndex >= 0) {
      setCC(clickIndex, containerClassnames, hasSubItems);
    }
  };

  handleProps = () => {
    this.addEvents();
  };

  addEvents = () => {
    ['click', 'touchstart', 'touchend'].forEach((event) =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  };

  removeEvents = () => {
    ['click', 'touchstart', 'touchend'].forEach((event) =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  };

  setSelectedLiActive = (callback) => {
    const { selectedParentMenu } = this.state;
    const oldli = document.querySelector('.sub-menu  li.active');
    if (oldli != null) {
      oldli.classList.remove('active');
    }

    const oldliSub = document.querySelector('.third-level-menu  li.active');
    if (oldliSub != null) {
      oldliSub.classList.remove('active');
    }

    /* set selected parent menu */
    const selectedSublink = document.querySelector(
      '.third-level-menu  a.active'
    );
    if (selectedSublink != null) {
      selectedSublink.parentElement.classList.add('active');
    }

    const selectedlink = document.querySelector('.sub-menu  a.active');
    if (selectedlink != null) {
      selectedlink.parentElement.classList.add('active');
      this.setState(
        {
          selectedParentMenu:
            selectedlink.parentElement.parentElement.getAttribute(
              'data-parent'
            ),
        },
        callback
      );
    } else {
      const selectedParentNoSubItem = document.querySelector(
        '.main-menu  li a.active'
      );
      if (selectedParentNoSubItem != null) {
        this.setState(
          {
            selectedParentMenu:
              selectedParentNoSubItem.getAttribute('data-flag'),
          },
          callback
        );
      } else if (selectedParentMenu === '') {
        this.setState(
          {
            selectedParentMenu: menuItems[0].id,
          },
          callback
        );
      }
    }
  };

  setHasSubItemStatus = () => {
    const { changeSelectedMenuHasSubItems: changeSMHS } = this.props;
    const hasSubmenu = this.getIsHasSubItem();
    changeSMHS(hasSubmenu);
    this.toggle();
  };

  getIsHasSubItem = () => {
    const { selectedParentMenu } = this.state;
    const menuItem = menuItems.find((x) => x.id === selectedParentMenu);
    if (menuItem)
      return !!(menuItem && menuItem.subs && menuItem.subs.length > 0);
    return false;
  };

  openSubMenu = (e, menuItem) => {
    const {
      changeSelectedMenuHasSubItems: changeSMHS,
      setContainerClassnames: setCC,
      addContainerClassname: addCC,
    } = this.props;
    const selectedParent = menuItem.id;
    const hasSubMenu = menuItem.subs && menuItem.subs.length > 0;
    changeSMHS(hasSubMenu);
    if (!hasSubMenu) {
      this.setState({
        viewingParentMenu: selectedParent,
        selectedParentMenu: selectedParent,
      });
      this.toggle();
    } else {
      e.preventDefault();

      const { containerClassnames, menuClickCount } = this.props;
      const currentClasses = containerClassnames
        ? containerClassnames.split(' ').filter((x) => x !== '')
        : '';

      if (!currentClasses.includes('menu-mobile')) {
        if (
          currentClasses.includes('menu-sub-hidden') &&
          (menuClickCount === 2 || menuClickCount === 0)
        ) {
          setCC(3, containerClassnames, hasSubMenu);
        } else if (
          currentClasses.includes('menu-hidden') &&
          (menuClickCount === 1 || menuClickCount === 3)
        ) {
          setCC(2, containerClassnames, hasSubMenu);
        } else if (
          currentClasses.includes('menu-default') &&
          !currentClasses.includes('menu-sub-hidden') &&
          (menuClickCount === 1 || menuClickCount === 3)
        ) {
          setCC(0, containerClassnames, hasSubMenu);
        }
      } else {
        addCC('sub-show-temporary', containerClassnames);
      }
      this.setState({
        viewingParentMenu: selectedParent,
      });
    }
  };

  toggleMenuCollapse = (e, menuKey) => {
    e.preventDefault();

    const { collapsedMenus } = this.state;
    if (collapsedMenus.indexOf(menuKey) > -1) {
      this.setState({
        collapsedMenus: collapsedMenus.filter((x) => x !== menuKey),
      });
    } else {
      collapsedMenus.push(menuKey);
      this.setState({
        collapsedMenus,
      });
    }
    return false;
  };

  filteredList = (mi) => {
    const {
      currentUser: { role },
    } = this.props;
    return mi.filter((x) => (x.roles && x.roles.includes(role)) || !x.roles);
  };

  render() {
    const { selectedParentMenu, viewingParentMenu, collapsedMenus } =
      this.state;
    return (
      <div className="sidebar">
        <div className="main-menu">
          <div className="scroll">
            <PerfectScrollbar
              options={{ suppressScrollX: true, wheelPropagation: false }}
            >
              <Nav vertical className="list-unstyled">
                {menuItems &&
                  this.filteredList(menuItems).map((item) => {
                    return (
                      <NavItem
                        key={item.id}
                        className={classnames({
                          active:
                            (selectedParentMenu === item.id &&
                              viewingParentMenu === '') ||
                            viewingParentMenu === item.id,
                        })}
                      >
                        {item.newWindow ? (
                          <a
                            href={item.to}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <i className={item.icon} />{' '}
                            <IntlMessages id={item.label} />
                          </a>
                        ) : (
                          <NavLink
                            to={item.to}
                            onClick={(e) => this.openSubMenu(e, item)}
                            data-flag={item.id}
                          >
                            <i className={item.icon} />{' '}
                            <IntlMessages id={item.label} />
                          </NavLink>
                        )}
                      </NavItem>
                    );
                  })}
              </Nav>
            </PerfectScrollbar>
          </div>
        </div>

        <div className="sub-menu">
          <div className="scroll">
            <PerfectScrollbar
              options={{ suppressScrollX: true, wheelPropagation: false }}
            >
              {menuItems &&
                this.filteredList(menuItems).map((item) => {
                  const {
                    selectedParentMenu: selectedPM,
                    viewingParentMenu: viewingPM,
                  } = this.state;
                  return (
                    <Nav
                      key={item.id}
                      className={classnames({
                        'd-block':
                          (selectedPM === item.id && viewingPM === '') ||
                          viewingPM === item.id,
                      })}
                      data-parent={item.id}
                    >
                      {item.subs &&
                        this.filteredList(item.subs).map((sub, index) => {
                          /* eslint-disable no-nested-ternary */
                          /* eslint-disable react/no-array-index-key */
                          return (
                            <NavItem
                              key={`${item.id}_${index}`}
                              className={`${
                                sub.subs && sub.subs.length > 0
                                  ? 'has-sub-item'
                                  : ''
                              }`}
                            >
                              {sub.newWindow ? (
                                <a
                                  href={sub.to}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <i className={sub.icon} />{' '}
                                  <IntlMessages id={sub.label} />
                                </a>
                              ) : sub.subs && sub.subs.length > 0 ? (
                                <>
                                  <NavLink
                                    className={`rotate-arrow-icon opacity-50 ${
                                      collapsedMenus.indexOf(
                                        `${item.id}_${index}`
                                      ) === -1
                                        ? ''
                                        : 'collapsed'
                                    }`}
                                    to={sub.to}
                                    id={`${item.id}_${index}`}
                                    onClick={(e) =>
                                      this.toggleMenuCollapse(
                                        e,
                                        `${item.id}_${index}`
                                      )
                                    }
                                  >
                                    <i className="simple-icon-arrow-down" />{' '}
                                    <IntlMessages id={sub.label} />
                                  </NavLink>

                                  <Collapse
                                    isOpen={
                                      collapsedMenus.indexOf(
                                        `${item.id}_${index}`
                                      ) === -1
                                    }
                                  >
                                    <Nav className="third-level-menu">
                                      {this.filteredList(sub.subs).map(
                                        (thirdSub, thirdIndex) => {
                                          return (
                                            <NavItem
                                              key={`${item.id}_${index}_${thirdIndex}`}
                                            >
                                              {thirdSub.newWindow ? (
                                                <a
                                                  href={thirdSub.to}
                                                  rel="noopener noreferrer"
                                                  target="_blank"
                                                >
                                                  <i
                                                    className={thirdSub.icon}
                                                  />{' '}
                                                  <IntlMessages
                                                    id={thirdSub.label}
                                                  />
                                                </a>
                                              ) : (
                                                <NavLink to={thirdSub.to}>
                                                  <i
                                                    className={thirdSub.icon}
                                                  />{' '}
                                                  <IntlMessages
                                                    id={thirdSub.label}
                                                  />
                                                </NavLink>
                                              )}
                                            </NavItem>
                                          );
                                        }
                                      )}
                                    </Nav>
                                  </Collapse>
                                </>
                              ) : (
                                <NavLink to={sub.to}>
                                  <i className={sub.icon} />{' '}
                                  <IntlMessages id={sub.label} />
                                </NavLink>
                              )}
                            </NavItem>
                          );
                        })}
                    </Nav>
                  );
                })}
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ menu, authUser }) => {
  const {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems,
  } = menu;

  const { currentUser } = authUser;
  return {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems,
    currentUser,
  };
};
export default withRouter(
  connect(mapStateToProps, {
    setContainerClassnames,
    addContainerClassname,
    changeDefaultClassnames,
    changeSelectedMenuHasSubItems,
  })(Sidebar)
);
