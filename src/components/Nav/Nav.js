import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

import StackOverflow from '../../images/stack-overflow.svg';

import './Nav.css';

import { Menu, Layout, Button } from 'antd';
import {
  CameraFilled,
  AppstoreFilled,
  DatabaseFilled,
  MailFilled,
  GithubFilled,
  LinkedinFilled,
  CaretRightFilled,
  CaretLeftFilled
} from '@ant-design/icons';
const { Item } = Menu;
const { Sider, Footer } = Layout;

const Nav = ({ section, setSection }) => {
  const [showNav, setShowNav] = useState(true);

  const handleNavClick = ({ key }) => {
    setSection(key);
  };

  const handleNavToggle = () => {
    const nav = document.getElementById('nav');
    const body = document.getElementById('body');
    const navBtn = document.getElementById('btn-nav');

    if (nav.classList.contains('hide-nav')) {
      body.classList.remove('push-body');
      nav.classList.remove('hide-nav');
      navBtn.classList.remove('btn-nav-push');

      setShowNav(true);
    } else {
      body.classList.add('push-body');
      nav.classList.add('hide-nav');
      navBtn.classList.add('btn-nav-push');

      setShowNav(false);
    }
  };

  return (
    <>
      <div id="nav">
        <Sider>
          <h1 className="menu-title">Nick Buikema</h1>
          <Typewriter
            options={{
              strings: ['Web Developer', 'Innovator', 'Software Engineer'],
              autoStart: true,
              loop: true
            }}
          />
          <Menu
            selectedKeys={section}
            mode="inline"
            theme="dark"
            onClick={handleNavClick}
          >
            <Item key="about" icon={<CameraFilled />}>
              <span className="menu-text">About</span>
            </Item>
            <Item key="projects" icon={<AppstoreFilled />}>
              <span className="menu-text">Projects</span>
            </Item>
            <Item key="skills" icon={<DatabaseFilled />}>
              <span className="menu-text">Skills</span>
            </Item>
            <Item key="contact" icon={<MailFilled />}>
              <span className="menu-text">Contact</span>
            </Item>
          </Menu>
          <Footer className="menu-footer">
            <div className="footer-icons">
              <a
                href="https://github.com/nbuikema"
                className="footer-icon mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubFilled />
              </a>
              <a
                href="https://www.linkedin.com/in/nicholas-buikema-6a4816131/"
                className="footer-icon mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinFilled />
              </a>
              <a
                href="https://stackoverflow.com/users/7944637/nick?tab=profile"
                className="footer-icon mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="stack-overflow-icon" src={StackOverflow} />
              </a>
            </div>
            <div className="menu-footer-copyright">Nick Buikema ©2020</div>
          </Footer>
        </Sider>
      </div>
      <div id="btn-nav" className="btn-nav mt-2 ml-2 p-0">
        <Button
          shape="circle"
          icon={showNav ? <CaretLeftFilled /> : <CaretRightFilled />}
          size="large"
          onClick={handleNavToggle}
        />
      </div>
    </>
  );
};

export default Nav;
