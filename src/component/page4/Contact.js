import React, { Component } from 'react';
import './contact.css';
import ContactDescribe from './ContactDescribe';
import ContactForm from './ContactForm';

export default class Contact extends Component{
  render(){
    return (
      <div>
        <ContactDescribe />
        <ContactForm />
      </div>
    )
  }
}