import React from 'react';
import Typewriter from 'typewriter-effect';

import './Nav.css';

import { Menu, Layout } from 'antd';
import {
  CameraFilled,
  AppstoreFilled,
  DatabaseFilled,
  MailFilled,
  GithubFilled,
  LinkedinFilled
} from '@ant-design/icons';
const { Item } = Menu;
const { Sider, Footer } = Layout;

const Nav = ({ handleClick, section }) => {
  return (
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
        onClick={handleClick}
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
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFilled />
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-buikema-6a4816131/"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinFilled />
          </a>
          <a
            href="https://stackoverflow.com/users/7944637/nick?tab=profile"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            SO
          </a>
        </div>
        <div className="menu-footer-copyright">Nick Buikema ©2020</div>
      </Footer>
    </Sider>
  );
};

export default Nav;
