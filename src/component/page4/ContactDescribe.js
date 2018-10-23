import React, { Component } from 'react';
import './contact.css';

export default class ContactDesribe extends Component{
	render(){
		return (
			<div className='contact-describe'>
				<p className='title4'>Any question? Reach out to us and we'll get back to you shortly</p>
				<div className='contact-item'>
					<img src={require('./images/phone.png')} alt='phone'/>
					<p>+81 0123 4567 89</p>
				</div>
				<div className='contact-item'>
					<img src={require('./images/email.png')} alt='email'/>
					<p>info@bit.io</p>
				</div>
				<div className='contact-item'>
					<img src={require('./images/telegram.png')} alt='Telegram'/>
					<p>Join us on Telegram</p>
				</div>
			</div>
		)
	}
}
