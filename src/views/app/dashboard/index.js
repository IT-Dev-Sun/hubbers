import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const DefaultDashboard = React.lazy(() => import('./default'));

const DashboardContent = React.lazy(() => import('./content'));

const Dashboard = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
      <Route
        path={`${match.url}/default`}
        render={(props) => <DefaultDashboard {...props} />}
      />
      <Route
        path={`${match.url}/content`}
        render={(props) => <DashboardContent {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Dashboard;
