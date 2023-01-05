import React from 'react';
import { Row } from 'reactstrap';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import BasiceTypeCategoryList from './list';

const BasicTypeCategory = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="basic-type-category.title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx xxs="12" className="mb-4">
        <div>
          <div className="country-list" style={{ marginTop: 10 }}>
            <BasiceTypeCategoryList />
          </div>
        </div>
      </Colxx>
    </>
  );
};

export default BasicTypeCategory;
