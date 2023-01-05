import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const PartnerList = React.lazy(() => import('./partner-list'));
const PartnerType = React.lazy(() => import('./partner-type'));

const Partner = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}/partner-list`}
        render={(props) => <PartnerList {...props} />}
      />
      <Route
        path={`${match.url}/partner-type`}
        render={(props) => <PartnerType {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Partner;
