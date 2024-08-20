// components/Contact.js
"use client";

import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle successful form submission logic here
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className='container flex flex-col justify-center gap-4 p-10 w-screen'>
      <div className='text-2xl font-bold text-start text-balance'>
        <h3>Ready to Elevate Your Digital Experience?</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:flex-col flex-row'>
        <div className='flex text-start text-balance'>
          <p>We’re excited to hear from you! Whether you have a new project in mind, need a design consultation, or just want to discuss how we can enhance your digital presence, this form is the best way to reach us. Please fill out the details below, and we’ll get back to you promptly to explore how we can bring your vision to life. Let’s create something amazing together!</p>
        </div>
        <div className='flex flex-col gap-4'>
          <InputField 
            label="Name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            name="name" 
            error={errors.name}
          />
          <InputField 
            label="Email" 
            placeholder="Your Email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            name="email" 
            error={errors.email}
          />
          <Button title="Submit" type="submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Contact;