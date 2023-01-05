import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const BasicType = React.lazy(() => import('./basic-type'));

const BasicTypeCategory = React.lazy(() => import('./basic-type-category'));

const ExpertiseCategory = React.lazy(() => import('./expertise-category'));

const ProjectTags = React.lazy(() => import('./project-tags'))

const Language = React.lazy(() => import('./language'));

const LanguageLevel = React.lazy(() => import('./language-level'));

const Country = React.lazy(() => import('./country'));

const Currency = React.lazy(() => import('./currency'));

const Timezone = React.lazy(() => import('./timezone'));

const Social = React.lazy(() => import('./social'));

const Setting = React.lazy(() => import('./setting'));

const Options = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/basic-type`} />

      <Route
        path={`${match.url}/basic-type-category`}
        render={(props) => <BasicTypeCategory {...props} />}
      />

      <Route
        path={`${match.url}/basic-type`}
        render={(props) => <BasicType {...props} />}
      />

      <Route
        path={`${match.url}/expertise-category`}
        render={(props) => <ExpertiseCategory {...props} />}
      />

      <Route
        path={`${match.url}/project-tags`}
        render={(props) => <ProjectTags {...props} />}
      />

      <Route
        path={`${match.url}/language`}
        render={(props) => <Language {...props} />}
      />

      <Route
        path={`${match.url}/language-level`}
        render={(props) => <LanguageLevel {...props} />}
      />

      <Route
        path={`${match.url}/country`}
        render={(props) => <Country {...props} />}
      />

      <Route
        path={`${match.url}/currency`}
        render={(props) => <Currency {...props} />}
      />

      <Route
        path={`${match.url}/timezone`}
        render={(props) => <Timezone {...props} />}
      />

      <Route
        path={`${match.url}/social`}
        render={(props) => <Social {...props} />}
      />

      <Route
        path={`${match.url}/setting`}
        render={(props) => <Setting {...props} />}
      />

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Options;
