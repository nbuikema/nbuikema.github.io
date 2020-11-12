import React from 'react';

import './Body.css';

import { Layout } from 'antd';

const { Content } = Layout;

const Skills = ({ section }) => {
  return (
    <Layout>
      <Content>
        {section}

        <div id="background"></div>
        <div id="midground"></div>
        <div id="foreground"></div>
      </Content>
    </Layout>
  );
};

export default Skills;
