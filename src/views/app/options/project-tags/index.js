import React from 'react';
import { Row } from 'reactstrap';
import {Colxx,Separator} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import ProjectTagsList from './list';

const ProjectTags = ({ match }) => (
  <>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="project-tags.title" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs="12" className="mb-4">
        <div>
          <div className="country-list" style={{ marginTop: 10 }}>
            <ProjectTagsList />
          </div>
        </div>
      </Colxx>
    </Row>
  </>
);
export default ProjectTags;
