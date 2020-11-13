import React from 'react';

import { Modal } from 'antd';

import CindysCreations from '../project-components/CindysCreations';
import NJAHProperties from '../project-components/NJAHProperties';

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
      mask={false}
    >
      {project === "Cindy's Creations" && <CindysCreations />}
      {project === 'NJAH Properties' && <NJAHProperties />}
    </Modal>
  );
};

export default ProjectModal;
