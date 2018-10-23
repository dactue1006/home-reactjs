import React, { Component } from 'react';
import './footer.css';
 
export default class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <div className='footer-name'>&copy; All rights reversed</div>
        <ul className='footer-contact'>
          <li className='footer-contact-item'><a href='https://www.facebook.com/' ><img src={require('./images/facebook.png')} alt='facebook'/></a></li>
          <li className='footer-contact-item'><a href='https://twitter.com' ><img src={require('./images/twitter.png')} alt='linkedin'/></a></li>
          <li className='footer-contact-item'><a href='https://telegram.org/' ><img src={require('./images/telegram.png')} alt='telegram'/></a></li>
        </ul>
      </footer>
    )
  }
}
 
