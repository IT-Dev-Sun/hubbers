import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ModuleType = React.lazy(() => import('./moduleType'));

const Module = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}/module-type`}
        render={(props) => <ModuleType {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Module;
