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
  const [theme, setTheme] = useState('default');

  const showSection = (section) => {
    switch (section) {
      case 'about':
        return <About setSection={setSection} />;
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

  const handleProjectClick = (projectId) => {
    setProject(projectId);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Nav section={section} setSection={setSection} setTheme={setTheme} />
      <Body section={showSection(section)} theme={theme} />
      <ProjectModal project={project} setProject={setProject} />
    </Layout>
  );
};

export default App;
