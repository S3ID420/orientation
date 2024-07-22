'use client';
import React, { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting form data:', formData);
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Response:', result);

      if (result.success) {
        toast.success('Email sent successfully!', {
          className: 'toast-success',
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send email.', {
          className: 'toast-error',
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send email.', {
        className: 'toast-error',
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="contact-form lh-lg">
      <h1 className="titoo">Contact Us</h1>
      <div className="contact-info font-monospace">
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="px-3" /> Eljem, Tunisia
        </p>
        <p>
          <FontAwesomeIcon icon={faPhoneAlt} className="px-3" /> Phone: +00 151515
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="px-3" /> Email: ooor@gmail.com
        </p>
      </div>

      <Form onSubmit={handleSubmit}>
        <FormGroup className="form-group1">
          <Input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name</label>
        </FormGroup>
        <FormGroup className="form-group1">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </FormGroup>
        <FormGroup className="form-group1">
          <Input
            type="textarea"
            name="message"
            id="message"
            placeholder=" "
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
        </FormGroup>
        <Button className='sub' type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
