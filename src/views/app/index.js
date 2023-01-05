import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'ckeditor5-build-classic-dna';

import AppLayout from '../../layout/AppLayout';
import { ProtectedRoute, UserRole } from '../../helpers/authHelper';
import ContestList from './contest/contest-list/list';
import ContestMember from './contest/contest-member';

const Dashboard = React.lazy(() => import('./dashboard'));
const Admins = React.lazy(() => import('./admin'));
const Users = React.lazy(() => import('./user'));
const EditUser = React.lazy(() => import('./user/edit-user'));

const Community = React.lazy(() => import('./community'));

const Investor = React.lazy(() => import('./investor'));

const HubbersTeam = React.lazy(() => import('./hubbers-team'));

const Team = React.lazy(() => import('./team'));

const Partner = React.lazy(() => import('./partner'));

const Testimonials = React.lazy(() => import('./testimonials'));

const Product = React.lazy(() => import('./product'));

const Expertise = React.lazy(() => import('./expertise'));

const Options = React.lazy(() => import('./options'));
const JobList = React.lazy(() => import('./job-list'));
const BlankPage = React.lazy(() => import('./blank-page'));
const Module = React.lazy(() => import('./module'));
const ContestDescription = React.lazy(() =>
  import('./contest/contest-description')
);
const ContestEntry = React.lazy(() => import('./contest/contest-entry'));
const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboard`}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              exact
              path={`${match.url}/admins`}
              render={(props) => <Admins {...props} />}
              roles={[UserRole.Admin]}
            />
            <Route
              exact
              path={`${match.url}/users`}
              render={(props) => <Users {...props} />}
            />
            <Route
              path={`${match.url}/users/:id`}
              render={(props) => <EditUser {...props} />}
            />
            <Route
              path={`${match.url}/community`}
              render={(props) => <Community {...props} />}
            />
            <Route
              exact
              path={`${match.url}/investors`}
              render={(props) => <Investor {...props} />}
            />

            <Route
              exact
              path={`${match.url}/hubbers-team`}
              render={(props) => <HubbersTeam {...props} />}
            />

            <Route
              // exact
              path={`${match.url}/team`}
              render={(props) => <Team {...props} />}
            />

            <Route
              // exact
              path={`${match.url}/module`}
              render={(props) => <Module {...props} />}
            />

            <Route
              // exact
              path={`${match.url}/contest/contest-list`}
              render={(props) => <ContestList {...props} />}
            />

            <Route
              // exact
              path={`${match.url}/contest/contest-member`}
              render={(props) => <ContestMember {...props} />}
            />

            <Route
              // exact
              path={`${match.url}/contest/contest-description`}
              render={(props) => <ContestDescription {...props} />}
            />

            <Route
              // exact
              path={`${match.url}/contest/contest-entry`}
              render={(props) => <ContestEntry {...props} />}
            />

            <Route
              // exact
              path={`${match.url}/partner`}
              render={(props) => <Partner {...props} />}
            />

            <Route
              // exact
              path={`${match.url}/testimonials`}
              render={(props) => <Testimonials {...props} />}
            />

            <Route
              // exact
              path={`${match.url}/product`}
              render={(props) => <Product {...props} />}
            />

            <Route
              // exact
              path={`${match.url}/expertise`}
              render={(props) => <Expertise {...props} />}
            />

            <ProtectedRoute path={`${match.url}/options`} component={Options} />

            <Route
              path={`${match.url}/job-list`}
              render={(props) => <JobList {...props} />}
            />

            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
