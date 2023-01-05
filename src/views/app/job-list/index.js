import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AllJobs = React.lazy(() => import('./all-jobs'));

const JobList = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}/all-jobs`}
        render={(props) => <AllJobs {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default JobList;
