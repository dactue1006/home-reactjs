import React, { Component } from 'react';
import './menu.css';

class Menu extends Component{
  render(){
    var linkMarkUp = this.props.links.map( (link, index)=>{
      return (
        <li key={index} className="menu-list-item">
          <a className="menu-link" href={link.link}>{link.label}
          </a>
        </li>
      )
    }   
    )
    return (
      <nav className="menu">
          <h3 className='logo'>Logo</h3>
          <ul className="menu-list">
            {linkMarkUp}
          </ul>
          <div className='menu-button'>
            <button> Log in </button>
            <button> Sign up </button> 
          </div>       
      </nav>
    )
  }
}
export default Menu;