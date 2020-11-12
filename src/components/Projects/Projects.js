import React from 'react';

import cindysCreations from '../../images/projects/cindys-creations/home.png';

import './Projects.css';

import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const Projects = ({ handleProjectClick }) => {
  return (
    <div className="content">
      <h2>Projects</h2>
      <Row justify="space-around">
        <Col span={10}>
          <Card
            hoverable
            cover={<img src={cindysCreations} />}
            onClick={() => handleProjectClick("Cindy's Creations")}
          >
            <Meta title="Cindy's Creations" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={10}>
          <Card
            hoverable
            cover={<img src={cindysCreations} />}
            onClick={() => handleProjectClick('NJAH Properties')}
          >
            <Meta title="NJAH Properties" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={10}>
          <Card hoverable cover={<img src={cindysCreations} />}>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={10}>
          <Card hoverable cover={<img src={cindysCreations} />}>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
