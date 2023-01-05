import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import AllUsers from './all-users';

const Users = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="users.title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx xxs="12" className="mb-4">
        <div>
          <div
            className="all-users"
            style={{ marginTop: 10, paddingBottom: '42px' }}
          >
            <AllUsers />
          </div>
        </div>
      </Colxx>
    </>
  );
};

export default Users;
