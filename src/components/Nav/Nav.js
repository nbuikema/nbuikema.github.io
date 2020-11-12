import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

import StackOverflow from '../../images/stack-overflow.svg';

import './Nav.css';

import { Menu, Layout, Button, Tooltip, Switch } from 'antd';
import {
  CameraFilled,
  AppstoreFilled,
  DatabaseFilled,
  MailFilled,
  GithubFilled,
  LinkedinFilled,
  CaretRightFilled,
  CaretLeftFilled,
  EnterOutlined
} from '@ant-design/icons';
const { Item } = Menu;
const { Sider, Footer } = Layout;

const Nav = ({ section, setSection, setTheme }) => {
  const [showNav, setShowNav] = useState(true);

  const handleNavClick = ({ key }) => {
    setSection(key);

    const nav = document.getElementById('nav');
    const body = document.getElementById('body');
    const navBtn = document.getElementById('btn-nav');
    const funMode = document.getElementById('fun-mode');

    if (window.innerWidth < 1025) {
      body.classList.add('push-body');
      nav.classList.add('hide-nav');
      navBtn.classList.add('btn-nav-push');
      funMode.classList.add('hide-nav');

      setShowNav(false);
    }
  };

  const handleNavToggle = () => {
    const nav = document.getElementById('nav');
    const body = document.getElementById('body');
    const navBtn = document.getElementById('btn-nav');
    const funMode = document.getElementById('fun-mode');

    if (nav.classList.contains('hide-nav')) {
      body.classList.remove('push-body');
      nav.classList.remove('hide-nav');
      navBtn.classList.remove('btn-nav-push');
      funMode.classList.remove('hide-nav');

      setShowNav(true);
    } else {
      body.classList.add('push-body');
      nav.classList.add('hide-nav');
      navBtn.classList.add('btn-nav-push');
      funMode.classList.add('hide-nav');

      setShowNav(false);
    }
  };

  const handleThemeChange = (value) => {
    value === true ? setTheme('fun') : setTheme('default');
  };

  return (
    <>
      <div id="nav">
        <Sider>
          <h1 className="menu-title">Nick Buikema</h1>
          <Typewriter
            options={{
              strings: [
                'Web Developer',
                'Mobile App Developer',
                'Creator',
                'Innovator'
              ],
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
        <Tooltip
          className="d-none d-md-block"
          title={`Toggle Nav ${showNav ? 'OFF' : 'ON'}`}
        >
          <Button
            shape="circle"
            icon={showNav ? <CaretLeftFilled /> : <CaretRightFilled />}
            size="large"
            onClick={handleNavToggle}
          />
        </Tooltip>
        <Button
          className="d-block d-md-none"
          shape="circle"
          icon={showNav ? <CaretLeftFilled /> : <CaretRightFilled />}
          size="large"
          onClick={handleNavToggle}
        />
      </div>
      <div id="fun-mode" className="fun-mode text-center">
        <div className="text-white">
          PSSSST!
          <br />
          TURN ON
          <br />
          FUN MODE!
          <br />
          <span className="float-right">
            <EnterOutlined />
          </span>
        </div>
        <Switch
          checkedChildren="ON"
          unCheckedChildren="OFF"
          defaultChecked={false}
          onChange={handleThemeChange}
        />
      </div>
    </>
  );
};

export default Nav;
