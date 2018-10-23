import React, { Component } from 'react';
import FounderItem from './FounderItem';
import './founder.css';

export default class Founder extends Component{
  constructor(props){
    super(props);
    this.state = {
      founders: [
        { sourceImage: './images/1.png',
          name: 'Nguyễn Văn Lượm', 
          position: 'Founder & CEO senior developer'
        },
        { sourceImage: './images/2.png', 
          name: 'Lê Văn Minh', 
          position: 'Co-Founder & CTO senior developer'
        },
        { sourceImage: './images/3.png', 
          name: 'Trần Văn Thức', 
          position: 'Co-Founder & senior developer'
        },
        { sourceImage: './images/4.png', 
          name: 'Nguyễn Đắc Tuệ', 
          position: 'Co-Founder & junior developer'
        }
      ]
    }
  }
  render(){
    let founderList = this.state.founders.map((founder, index)=>{
      let src = require(`${founder.sourceImage}`);
      return (
        <FounderItem key={index}
                     sourceImage={src}
                     name={founder.name}
                     position={founder.position}
        />
      );
    });
    return (
      <div className='list-founder'>
        {founderList}
      </div>
    )
  }
}