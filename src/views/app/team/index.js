import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AllTeams = React.lazy(() => import('./all-teams'));
const TeamMember = React.lazy(() => import('./team-member'));
// const TeamMemberRole = React.lazy(() => import('./team-member-role'));

const Team = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}/all-teams`}
        render={(props) => <AllTeams {...props} />}
      />
      <Route
        path={`${match.url}/team-member`}
        render={(props) => <TeamMember {...props} />}
      />
      {/* <Route
        path={`${match.url}/team-member-role`}
        render={(props) => <TeamMemberRole {...props} />}
      /> */}
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Team;
