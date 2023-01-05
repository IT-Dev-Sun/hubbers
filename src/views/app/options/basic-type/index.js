import React from 'react';
import { Row } from 'reactstrap';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import BasicTypeList from './list';

const BasicType = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="basic-type.title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx xxs="12" className="mb-4">
        <div>
          <div className="basicType-list" style={{ marginTop: 10 }}>
            <BasicTypeList />
          </div>
        </div>
      </Colxx>
    </>
  );
};

export default BasicType;
