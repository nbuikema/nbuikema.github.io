import React from 'react';

import './Skills.css';

const Skills = () => {
  return (
    <div className="content">
      <h2>Skills</h2>
      <div className="row mx-4">
        <div className="col-12 col-lg-6 pr-lg-0 border-bottom border-light">
          <div className="d-none d-lg-block border-right border-light pb-4 h-100">
            <h4>Front End</h4>
            <ul className="list-group list-group-horizontal row pr-lg-5">
              <li className="list-group-item text-dark">HTML5</li>
              <li className="list-group-item text-dark">CSS3</li>
              <li className="list-group-item text-dark">Javascript</li>
              <li className="list-group-item text-dark">React</li>
              <li className="list-group-item text-dark">Bootstrap</li>
            </ul>
          </div>
          <div className="d-block d-lg-none pb-4">
            <h4>Front End</h4>
            <ul className="list-group list-group-horizontal row pr-lg-5">
              <li className="list-group-item text-dark">HTML5</li>
              <li className="list-group-item text-dark">CSS3</li>
              <li className="list-group-item text-dark">Javascript</li>
              <li className="list-group-item text-dark">React</li>
              <li className="list-group-item text-dark">Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6 pl-lg-0 border-bottom border-light">
          <div className="d-none d-lg-block border-left border-light pb-4 h-100">
            <h4>Back End</h4>
            <ul className="list-group list-group-horizontal row pl-lg-5">
              <li className="list-group-item text-dark">Node.js</li>
              <li className="list-group-item text-dark">Express</li>
              <li className="list-group-item text-dark">MongoDB</li>
              <li className="list-group-item text-dark">SQL</li>
            </ul>
          </div>
          <div className="d-block d-lg-none py-4">
            <h4>Back End</h4>
            <ul className="list-group list-group-horizontal row pl-lg-5">
              <li className="list-group-item text-dark">Node.js</li>
              <li className="list-group-item text-dark">Express</li>
              <li className="list-group-item text-dark">MongoDB</li>
              <li className="list-group-item text-dark">SQL</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6 pr-lg-0 border-top border-light">
          <div className="d-none d-lg-block border-right border-light pt-4 h-100">
            <h4>Front End</h4>
            <ul className="list-group list-group-horizontal row pr-lg-5">
              <li className="list-group-item text-dark">HTML5</li>
              <li className="list-group-item text-dark">CSS3</li>
              <li className="list-group-item text-dark">Javascript</li>
              <li className="list-group-item text-dark">React</li>
              <li className="list-group-item text-dark">Bootstrap</li>
            </ul>
          </div>
          <div className="d-block d-lg-none py-4">
            <h4>Front End</h4>
            <ul className="list-group list-group-horizontal row pr-lg-5">
              <li className="list-group-item text-dark">HTML5</li>
              <li className="list-group-item text-dark">CSS3</li>
              <li className="list-group-item text-dark">Javascript</li>
              <li className="list-group-item text-dark">React</li>
              <li className="list-group-item text-dark">Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6 pl-lg-0 border-top border-light">
          <div className="d-none d-lg-block border-left border-light pt-4 h-100">
            <h4>Back End</h4>
            <ul className="list-group list-group-horizontal row pl-lg-5">
              <li className="list-group-item text-dark">Node.js</li>
              <li className="list-group-item text-dark">Express</li>
              <li className="list-group-item text-dark">MongoDB</li>
              <li className="list-group-item text-dark">SQL</li>
            </ul>
          </div>
          <div className="d-block d-lg-none pt-4">
            <h4>Back End</h4>
            <ul className="list-group list-group-horizontal row pl-lg-5">
              <li className="list-group-item text-dark">Node.js</li>
              <li className="list-group-item text-dark">Express</li>
              <li className="list-group-item text-dark">MongoDB</li>
              <li className="list-group-item text-dark">SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
