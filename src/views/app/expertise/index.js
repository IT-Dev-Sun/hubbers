import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AllExpertises = React.lazy(() => import('./all-expertises'));
const AssessmentQuestions = React.lazy(() => import('./assessment-questions'));
const AssessmentTutorials = React.lazy(() => import('./assessment-tutorials'));

const Product = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}/all-expertises`}
        render={(props) => <AllExpertises {...props} />}
      />

      <Route
        path={`${match.url}/assessment-questions`}
        render={(props) => <AssessmentQuestions {...props} />}
      />
      <Route
        path={`${match.url}/assessment-tutorials`}
        render={(props) => <AssessmentTutorials {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Product;
