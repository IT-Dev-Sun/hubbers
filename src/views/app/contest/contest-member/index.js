import React from 'react';
import { Row } from 'reactstrap';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import ContestMemberList from './list';

const ContestMember = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="contest-member.title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx xxs="12" className="mb-4">
        <div>
          <div style={{ marginTop: 10 }}>
            <ContestMemberList />
          </div>
        </div>
      </Colxx>
    </>
  );
};

export default ContestMember;
