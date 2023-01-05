import React from 'react';
import { Row } from 'reactstrap';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import CommunityAllList from './list';

const CommunityAll = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="community.title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx xxs="12" className="mb-4">
        <div>
          <div className="communityall-list" style={{ marginTop: 10 }}>
            <CommunityAllList />
          </div>
        </div>
      </Colxx>
    </>
  );
};

export default CommunityAll;
