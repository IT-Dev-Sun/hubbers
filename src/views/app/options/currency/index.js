import React from 'react';
import { Row } from 'reactstrap';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import CurrencyList from './list';

const Currency = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="currency.title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx xxs="12" className="mb-4">
        <div>
          <div className="currency-list" style={{ marginTop: 10 }}>
            <CurrencyList />
          </div>
        </div>
      </Colxx>
    </>
  );
};

export default Currency;
