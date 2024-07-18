'use client'
import React, { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ContactForm.css'; // Import CSS for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-form lh-lg ">
      <h className='titoo'>Contact Us</h>
      <div className="contact-info font-monospace">
        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="px-3" />  Eljem, Tunisia</p>
        <p><FontAwesomeIcon icon={faPhoneAlt} className="px-3" /> Phone: +00 151515</p>
        <p><FontAwesomeIcon icon={faEnvelope} className="px-3" /> Email: ooor@gmail.com</p>
      </div>
   
      <Form onSubmit={(e) => e.preventDefault()}>
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
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
