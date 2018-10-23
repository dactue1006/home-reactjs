import React, { Component } from 'react';

export default class MenuItem extends Component{
	render() {
		return (
			<li className="menu2-list-item">
				<a href={this.props.link} className='menu2-link'>
						<img src={this.props.source} alt={this.props.index}/>
						<div className='menu2-describe'> {this.props.description}</div>
				</a>
			</li>
		)
	}
}