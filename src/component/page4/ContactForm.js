import React, { Component } from 'react';

export default class ContactForm extends Component{
  render(){
    return (
      <div className='contact-form'>
        <div className='contact-title'>Get in touch</div>
          <div>
            <form action=''>
            <input className='contact-input' type='text' placeholder='Your name'/>
            <input className='contact-input' type='email' placeholder='Your email'/>
            <textarea className='contact-textarea' rows='6' cols='50' placeholder='Your message'></textarea>
            <input className='contact-submit' type='submit' value='submit' />
          </form>
        </div>
      </div>
    )
      
  }
}