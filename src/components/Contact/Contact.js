import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

import { Input, Button } from 'antd';
import { UserOutlined, MailOutlined, SendOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        document.getElementById('form-name').value = '';
        document.getElementById('form-email').value = '';
        document.getElementById('form-message').value = '';

        toast.success('Your form has been submitted!');
      } else {
        toast.error('Oops! Something went wrong. Please try again.');
      }
    };
    xhr.send(data);
  };

  return (
    <div className="content">
      <ToastContainer />
      <h2>Contact</h2>
      <form
        className="mx-1 mx-md-5 p-2 p-md-4 mt-5 ant-form"
        onSubmit={handleFormSubmit}
        action="https://formspree.io/f/mrgolpqe"
        method="POST"
      >
        <Input
          id="form-name"
          className="mb-2"
          placeholder="Name"
          prefix={<UserOutlined />}
          type="text"
          name="name"
        />
        <Input
          id="form-email"
          className="mb-2"
          placeholder="Email"
          prefix={<MailOutlined />}
          type="email"
          name="email"
        />
        <TextArea
          id="form-message"
          className="mb-3"
          placeholder="Leave a message"
          rows={4}
          name="message"
        />
        <Button
          className="submit-button"
          htmlType="submit"
          shape="round"
          icon={<SendOutlined />}
          size="large"
        >
          <span className="button-text">Submit</span>
        </Button>
      </form>
    </div>
  );
};

export default Contact;
