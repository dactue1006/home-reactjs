import React, { Component } from 'react';
import './EmailForm.css';

class EmailForm extends Component{
  render(){
      return (
          <div className='email-form'>
              <p className='title'>Beautiful and User-Friendly Decentralized Exchange</p>
              <p className='describe'>Whether you are expert or a Beginner.Bit is going to become the first platform which will faster all your need a simple, easy and intuotive way.</p>
              <br></br>
              <p>Enter your email to join our whiyelist now</p>
              <form className='submit-form'>
                  <input type='email' className='email'/>
                  <input type='submit' className='submit' value='Join now' />
              </form>
          </div>
      )
  }
}

export default EmailForm;