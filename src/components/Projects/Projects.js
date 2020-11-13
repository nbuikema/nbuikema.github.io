import React from 'react';

import cindysCreations from '../../images/projects/cindys-creations/home.png';

import njahProperties from '../../images/projects/njah-properties/properties.png';

import './Projects.css';

import { Card } from 'antd';
import { CodeOutlined, DesktopOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Projects = ({ handleProjectClick }) => {
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="content pb-6">
      <h2>Projects</h2>
      <div className="row mx-4 mt-5">
        <div className="col-12 col-sm-6 mb-4">
          <Card
            hoverable
            cover={<img src={njahProperties} alt="NJAH Properties Preview" />}
            className="h-100 d-flex flex-column"
            actions={[
              <a
                href="https://www.njahproperties.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                <DesktopOutlined />
                &nbsp;&nbsp;Live
              </a>,
              <a
                href="https://github.com/nbuikema/njah-properties"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                <CodeOutlined />
                &nbsp;&nbsp;Code
              </a>
            ]}
            onClick={() => handleProjectClick('NJAH Properties')}
          >
            <Meta
              title="NJAH Properties"
              description="Website for property management company located in Denton, TX. HTML, CSS, React, MapBox with custom geolocation, Node, Express, MongoDB, JWT Auth, Braintree."
            />
          </Card>
        </div>
        <div className="col-12 col-sm-6 mb-4">
          <Card
            hoverable
            cover={
              <img src={cindysCreations} alt="Cindy's Creations Preview" />
            }
            className="h-100 d-flex flex-column"
            actions={[
              <a
                href="https://cindyscreations.shop/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                <DesktopOutlined />
                &nbsp;&nbsp;Live
              </a>,
              <a
                href="https://github.com/nbuikema/cindys-creations"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                <CodeOutlined />
                &nbsp;&nbsp;Code
              </a>
            ]}
            onClick={() => handleProjectClick("Cindy's Creations")}
          >
            <Meta
              title="Cindy's Creations"
              description="Website for small business owner who sells her handmade crafts. HTML, CSS, React, Node, Express, MongoDB, JWT Auth, Braintree."
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
