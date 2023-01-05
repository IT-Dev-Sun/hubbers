import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AllProducts = React.lazy(() => import('./all-products'));
const AssessmentQuestions = React.lazy(() => import('./assessment-questions'));
const AssessmentTutorials = React.lazy(() => import('./assessment-tutorials'));

const Product = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}/all-products`}
        render={(props) => <AllProducts {...props} />}
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
