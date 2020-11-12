import React from 'react';

import { Modal, Carousel } from 'antd';

import CindysCreations from './CindysCreations';

import './ProjectModal.css';

const ProjectModal = ({ project, setProject }) => {
  return (
    <Modal
      title={project}
      visible={project}
      onCancel={() => setProject('')}
      footer={null}
      centered
      width={1200}
    >
      <CindysCreations />
    </Modal>
  );
};

export default ProjectModal;
