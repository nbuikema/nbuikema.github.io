import React from 'react';

import './Contact.css';

import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, SendOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Contact = () => {
  return (
    <div className="content">
      <h2>Contact</h2>
      <Form className="mx-5">
        <Input className="mb-2" placeholder="Name" prefix={<UserOutlined />} />
        <Input className="mb-2" placeholder="Email" prefix={<MailOutlined />} />
        <TextArea className="mb-3" placeholder="Leave a message" rows={4} />
        <Button
          type="primary"
          shape="round"
          icon={<SendOutlined />}
          size="large"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
