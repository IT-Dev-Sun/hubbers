import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import './helpers/Firebase';
import AppLocale from './lang';
import { NotificationContainer } from './components/common/react-notifications';
import {adminRoot} from './constants/defaultValues';
import { ProtectedRoute, UserRole } from './helpers/authHelper';

const ViewApp = React.lazy(() => import('./views/app'));
const ViewUser = React.lazy(() => import('./views/user'));
const ViewError = React.lazy(() => import('./views/error'));
const ViewUnauthorized = React.lazy(() => import('./views/unauthorized'));

class App extends React.Component {
  constructor(props) {
    super(props);
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
  }

  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    return (
      <div className="h-100">
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <>
            <NotificationContainer />
            <Suspense fallback={<div className="loading" />}>
              <Router>
                <Switch>
                  <ProtectedRoute
                    path={adminRoot}
                    component={ViewApp}
                    roles={[UserRole.Admin, UserRole.Editor]}
                  />
                  <Route
                    path="/user"
                    render={(props) => <ViewUser {...props} />}
                  />
                  <Route
                    path="/error"
                    exact
                    render={(props) => <ViewError {...props} />}
                  />
                  <Route
                    path="/unauthorized"
                    exact
                    render={(props) => <ViewUnauthorized {...props} />}
                  />
                  <Redirect exact from="/" to={adminRoot} />
                  <Redirect to="/error" />
                </Switch>
              </Router>
            </Suspense>
          </>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, settings }) => {
  const { currentUser } = authUser;
  const { locale } = settings;
  return { currentUser, locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
