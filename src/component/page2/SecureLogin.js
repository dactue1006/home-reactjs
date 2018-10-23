import React, { Component } from 'react';

export default class SecureLogin extends Component{
    render(){
        return (
            <div className='part'>
                <div className='part1'>
                    <img src={require('./images/Making it decentrali Copy.png')} alt='Making it'/>
                    <p></p>
                    <img src={require('./images/The trading platform.png')} alt='The trading platform'/>
                </div>
                <div className='part2'>
                    <img src={require('./images/Secure login.png')} alt='Secure login'/>
                </div>
                <br style={{clear:'both'}}/>
            </div>
        )
    }
}