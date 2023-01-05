import React from 'react';
import { Row } from 'reactstrap';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import SettingList from './list';

const Setting = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="setting.title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx xxs="12" className="mb-4">
        <div>
          <div className="setting-list" style={{ marginTop: 10 }}>
            <SettingList />
          </div>
        </div>
      </Colxx>
    </>
  );
};

export default Setting;
