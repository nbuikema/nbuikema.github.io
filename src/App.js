import React, { useState } from 'react';

import Nav from './components/Nav/Nav';
import Body from './components/Body/Body';

import ProjectModal from './components/ProjectModal/ProjectModal';

import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

import { Layout } from 'antd';

const App = () => {
  const [section, setSection] = useState('about');
  const [project, setProject] = useState('');

  const showSection = (section) => {
    switch (section) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects handleProjectClick={handleProjectClick} />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  const handleNavClick = ({ key }) => {
    setSection(key);
  };

  const handleProjectClick = (projectId) => {
    setProject(projectId);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Nav handleClick={handleNavClick} section={section} />
      <Body section={showSection(section)} />
      <ProjectModal project={project} setProject={setProject} />
    </Layout>
  );
};

export default App;
