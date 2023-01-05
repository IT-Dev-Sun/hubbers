import React from 'react';
import { Row } from 'reactstrap';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import TimezoneList from './list';

const Timezone = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="timezone.title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx xxs="12" className="mb-4">
        <div>
          <div className="timezone-list" style={{ marginTop: 10 }}>
            <TimezoneList />
          </div>
        </div>
      </Colxx>
    </>
  );
};

export default Timezone;
