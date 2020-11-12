import React, { useState } from 'react';

import './Body.css';

import { Layout } from 'antd';

const { Content } = Layout;

const Skills = ({ section, theme }) => {
  const [position, setPosition] = useState(0);

  const handleScroll = (e) => {
    if (theme === 'fun') {
      const rocket = document.getElementById('rocket');

      if (e.target.scrollTop > position) {
        rocket.classList.remove('rotated');
      } else {
        rocket.classList.add('rotated');
      }

      setPosition(e.target.scrollTop);
    }
  };

  return (
    <Layout onScroll={handleScroll}>
      <Content id="body">
        {section}

        {theme === 'fun' ? (
          <>
            <div className="tempRocket">
              <div className="fuselage">
                <div className="nose"></div>
                <div className="head"></div>
                <div className="neck"></div>
                <div className="body"></div>
                <div className="reactor"></div>
                <div className="fire">
                  <div className="spark1"></div>
                  <div className="spark2"></div>
                  <div className="spark3"></div>
                  <div className="spark4"></div>
                  <div className="spark5"></div>
                  <div className="spark6"></div>
                </div>
              </div>
              <div className="left-fin"></div>
              <div className="left-fin-end"></div>
              <div className="right-fin"></div>
              <div className="right-fin-end"></div>
            </div>

            <div id="rocket" className="rocket">
              <div className="fuselage">
                <div className="nose"></div>
                <div className="head"></div>
                <div className="neck"></div>
                <div className="body"></div>
                <div className="reactor"></div>
                <div className="fire">
                  <div className="spark1"></div>
                  <div className="spark2"></div>
                  <div className="spark3"></div>
                  <div className="spark4"></div>
                  <div className="spark5"></div>
                  <div className="spark6"></div>
                </div>
              </div>
              <div className="left-fin"></div>
              <div className="left-fin-end"></div>
              <div className="right-fin"></div>
              <div className="right-fin-end"></div>
            </div>

            <div id="background"></div>
            <div id="midground"></div>
            <div id="foreground"></div>
          </>
        ) : null}
      </Content>
    </Layout>
  );
};

export default Skills;
