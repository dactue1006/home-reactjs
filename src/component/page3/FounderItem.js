import React, { Component } from 'react';

export default class FounderItem extends Component{
  render(){
    return (
      <div className='founder-item'>
        <img src={this.props.sourceImage} alt={this.props.name}/>
        <div className='describe3'>
          <p className='describe3-name'> {this.props.name}</p>
          <p className='describe3-position'> {this.props.position}</p>
          <p className='describe3-in'> in</p>
        </div>
    </div>
    )
  }
}