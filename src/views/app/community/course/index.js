import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CourseStructure = React.lazy(() => import('./structure'));
const CourseMain = React.lazy(() => import('./main'));

const CourseRoute = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}/structure`}
        render={(props) => <CourseStructure {...props} />}
      />
      <Route
        path={`${match.url}`}
        render={(props) => <CourseMain {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default CourseRoute;
