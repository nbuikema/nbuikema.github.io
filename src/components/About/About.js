import React from 'react';

import './About.css';

const About = ({ setSection }) => {
  return (
    <div className="content about">
      <h2>
        Hi! I'm <strong>Nick</strong>, <br />
        let's <strong>explore</strong> your ideas together!
      </h2>
      <p>
        I'm a web and mobile application developer. I'm constantly working to
        expand my skill set and deliver the best services and products possible.
      </p>
      <p>Want to get in touch for a project?</p>
      <p className="contact-me-button" onClick={() => setSection('contact')}>
        <strong>Contact Me</strong>
      </p>
    </div>
  );
};

export default About;
