import React, { Component } from 'react';
import './menu2.css';
import MenuItem from './MenuItem';

export default class Menu2 extends Component{
  render(){
    let links = [ 
      { 
        link: '#1',
        source: './images/1.png',
        description: 'Keep secure process'
      },
      {
        link: '#2',
        source: './images/2.png',
        description: 'Manage your portfolio'
      },
      {
        link: '#3',
        source: './images/3.png',
        description: 'Easiest sending coins and tokens'
      },
      {
        link: '#4',
        source: './images/4.png',
        description: 'You can buy coins from us directly'
      }
    ];
    var linkMarkUp = links.map( (item, index)=>{
      let src = require(`${item.source}`);
      return (
        <MenuItem key={index}
                  link={item.link} 
                  source={src} 
                  description={item.description}
        />
      )
    }   
    )
    return (
    <ul className="menu2-list">
      {linkMarkUp}
    </ul>
    )
  }
}
