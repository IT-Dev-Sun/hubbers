import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { useDispatch, connect } from 'react-redux';
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import { Form, Input, Button, Drawer } from 'antd';

import { NavLink } from 'react-router-dom';

import {
  setContainerClassnames,
  clickOnMobileMenu,
  changeLocale,
  logoutUser,
} from '../../redux/actions';

import {
  // menuHiddenBreakpoint,
  // searchPath,
  // localeOptions,
  // isDarkSwitchActive,
  adminRoot,
} from '../../constants/defaultValues';

import { MobileMenuIcon, MenuIcon } from '../../components/svg';
// import TopnavEasyAccess from './Topnav.EasyAccess';
// import TopnavNotifications from './Topnav.Notifications';
// import TopnavDarkSwitch from './Topnav.DarkSwitch';

// import { getDirection, setDirection } from '../../helpers/Utils';
import * as Actions from '../../redux/actions';

const TopNav = ({
  // intl,
  // history,
  containerClassnames,
  menuClickCount,
  selectedMenuHasSubItems,
  // locale,
  setContainerClassnamesAction,
  clickOnMobileMenuAction,
  // changeLocaleAction,
  // logoutUser,
  currentUser,
  ...props
}) => {
  // const [isInFullScreen, setIsInFullScreen] = useState(false);
  // const [searchKeyword, setSearchKeyword] = useState('');

  // const search = () => {
  //   history.push(`${searchPath}?key=${searchKeyword}`);
  //   setSearchKeyword('');
  // };

  // const handleChangeLocale = (_locale, direction) => {
  //   changeLocaleAction(_locale);

  //   const currentDirection = getDirection().direction;
  //   if (direction !== currentDirection) {
  //     setDirection(direction);
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 500);
  //   }
  // };

  // const isInFullScreenFn = () => {
  //   return (
  //     (document.fullscreenElement && document.fullscreenElement !== null) ||
  //     (document.webkitFullscreenElement &&
  //       document.webkitFullscreenElement !== null) ||
  //     (document.mozFullScreenElement &&
  //       document.mozFullScreenElement !== null) ||
  //     (document.msFullscreenElement && document.msFullscreenElement !== null)
  //   );
  // };

  // const handleSearchIconClick = (e) => {
  //   if (window.innerWidth < menuHiddenBreakpoint) {
  //     let elem = e.target;
  //     if (!e.target.classList.contains('search')) {
  //       if (e.target.parentElement.classList.contains('search')) {
  //         elem = e.target.parentElement;
  //       } else if (
  //         e.target.parentElement.parentElement.classList.contains('search')
  //       ) {
  //         elem = e.target.parentElement.parentElement;
  //       }
  //     }

  //     if (elem.classList.contains('mobile-view')) {
  //       search();
  //       elem.classList.remove('mobile-view');
  //       removeEventsSearch();
  //     } else {
  //       elem.classList.add('mobile-view');
  //       addEventsSearch();
  //     }
  //   } else {
  //     search();
  //   }
  //   e.stopPropagation();
  // };

  // const handleDocumentClickSearch = (e) => {
  //   let isSearchClick = false;
  //   if (
  //     e.target &&
  //     e.target.classList &&
  //     (e.target.classList.contains('navbar') ||
  //       e.target.classList.contains('simple-icon-magnifier'))
  //   ) {
  //     isSearchClick = true;
  //     if (e.target.classList.contains('simple-icon-magnifier')) {
  //       search();
  //     }
  //   } else if (
  //     e.target.parentElement &&
  //     e.target.parentElement.classList &&
  //     e.target.parentElement.classList.contains('search')
  //   ) {
  //     isSearchClick = true;
  //   }

  //   if (!isSearchClick) {
  //     const input = document.querySelector('.mobile-view');
  //     if (input && input.classList) input.classList.remove('mobile-view');
  //     removeEventsSearch();
  //     setSearchKeyword('');
  //   }
  // };

  // const removeEventsSearch = () => {
  //   document.removeEventListener('click', handleDocumentClickSearch, true);
  // };

  // const addEventsSearch = () => {
  //   document.addEventListener('click', handleDocumentClickSearch, true);
  // };

  // const handleSearchInputKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     search();
  //   }
  // };

  // const toggleFullScreen = () => {
  //   const isFS = isInFullScreenFn();

  //   const docElm = document.documentElement;
  //   if (!isFS) {
  //     if (docElm.requestFullscreen) {
  //       docElm.requestFullscreen();
  //     } else if (docElm.mozRequestFullScreen) {
  //       docElm.mozRequestFullScreen();
  //     } else if (docElm.webkitRequestFullScreen) {
  //       docElm.webkitRequestFullScreen();
  //     } else if (docElm.msRequestFullscreen) {
  //       docElm.msRequestFullscreen();
  //     }
  //   } else if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.webkitExitFullscreen) {
  //     document.webkitExitFullscreen();
  //   } else if (document.mozCancelFullScreen) {
  //     document.mozCancelFullScreen();
  //   } else if (document.msExitFullscreen) {
  //     document.msExitFullscreen();
  //   }
  //   setIsInFullScreen(!isFS);
  // };

  const handleLogout = () => {
    props.logoutUser();
  };

  /// /////////////////////////////////////
  const dispatch = useDispatch();
  const [resetPasswordVisible, setResetPasswordVisible] = useState(false);
  const resetPassword = () => {
    setResetPasswordVisible(true);
  };
  const onCloseResetPassword = () => {
    // form.resetFields();
    setResetPasswordVisible(false);
  };
  const passwordData = {};
  const onSubmitResetPassword = (values) => {
    passwordData.id = currentUser.id;
    passwordData.password = values.newpass;
    dispatch(Actions.updateAdmin(passwordData));
    onCloseResetPassword();
  };

  /// /////////////////////////////////////
  const menuButtonClick = (e, _clickCount, _conClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);
    setContainerClassnamesAction(
      _clickCount + 1,
      _conClassnames,
      selectedMenuHasSubItems
    );
  };

  const mobileMenuButtonClick = (e, _containerClassnames) => {
    e.preventDefault();
    clickOnMobileMenuAction(_containerClassnames);
  };

  // const { messages } = intl;
  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        <NavLink
          to="#"
          location={{}}
          className="menu-button d-none d-md-block"
          onClick={(e) =>
            menuButtonClick(e, menuClickCount, containerClassnames)
          }
        >
          <MenuIcon />
        </NavLink>
        <NavLink
          to="#"
          location={{}}
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          onClick={(e) => mobileMenuButtonClick(e, containerClassnames)}
        >
          <MobileMenuIcon />
        </NavLink>

        {/* <div className="search">
          <Input
            name="searchKeyword"
            id="searchKeyword"
            placeholder={messages['menu.search']}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyPress={(e) => handleSearchInputKeyPress(e)}
          />
          <span
            className="search-icon"
            onClick={(e) => handleSearchIconClick(e)}
          >
            <i className="simple-icon-magnifier" />
          </span>
        </div> */}

        {/* <div className="d-inline-block">
          <UncontrolledDropdown className="ml-2">
            <DropdownToggle
              caret
              color="light"
              size="sm"
              className="language-button"
            >
              <span className="name">{locale.toUpperCase()}</span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              {localeOptions.map((l) => {
                return (
                  <DropdownItem
                    onClick={() => handleChangeLocale(l.id, l.direction)}
                    key={l.id}
                  >
                    {l.name}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div> */}
      </div>
      <NavLink className="navbar-logo" to={adminRoot}>
        <span className="logo d-none d-xs-block" />
        <span className="logo-mobile d-block d-xs-none" />
      </NavLink>

      <div className="navbar-right">
        {/* {isDarkSwitchActive && <TopnavDarkSwitch />} */}
        {/* <div className="header-icons d-inline-block align-middle">
          <TopnavEasyAccess />
          <TopnavNotifications />
          <button
            className="header-icon btn btn-empty d-none d-sm-inline-block"
            type="button"
            id="fullScreenButton"
            onClick={toggleFullScreen}
          >
            {isInFullScreen ? (
              <i className="simple-icon-size-actual d-block" />
            ) : (
              <i className="simple-icon-size-fullscreen d-block" />
            )}
          </button>
        </div> */}
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              {currentUser && (
                <>
                  <span className="name mr-1">
                    {' '}
                    {currentUser.firstname} {currentUser.lastname}
                  </span>
                  <span>
                    <img alt="Profile" src={currentUser.avatar} />
                  </span>
                </>
              )}
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              <DropdownItem onClick={resetPassword}>
                Reset Password
              </DropdownItem>
              <Drawer
                title="Reset Password"
                width={500}
                onClose={onCloseResetPassword}
                visible={resetPasswordVisible}
              >
                <Form
                  layout="vertical"
                  hideRequiredMark
                  onFinish={onSubmitResetPassword}
                  className="px-4 py-5"
                >
                  <Form.Item
                    name="newpass"
                    label="New Password"
                    rules={[
                      { required: true, message: 'Please enter New Password' },
                    ]}
                  >
                    <Input
                      type="password"
                      placeholder="Please enter New Password"
                    />
                  </Form.Item>
                  <Form.Item
                    name="conpass"
                    label="Confirm Password"
                    dependencies={['newpass']}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter confirm password',
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (getFieldValue('newpass') === value) {
                            return Promise.resolve();
                          }
                          /* eslint-disable */
                          return Promise.reject('Confirm Error');
                          /* eslint-enable */
                        },
                      }),
                    ]}
                  >
                    <Input
                      type="password"
                      placeholder="Please enter Confirm Password"
                    />
                  </Form.Item>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      onClick={onCloseResetPassword}
                      style={{ marginRight: 12 }}
                    >
                      Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Drawer>
              <DropdownItem divider />
              <DropdownItem onClick={() => handleLogout()}>
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ menu, settings, authUser }) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems } = menu;
  const { locale } = settings;
  const { currentUser } = authUser;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
    locale,
    currentUser,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    setContainerClassnamesAction: setContainerClassnames,
    clickOnMobileMenuAction: clickOnMobileMenu,
    changeLocaleAction: changeLocale,
    logoutUser,
  })(TopNav)
);
