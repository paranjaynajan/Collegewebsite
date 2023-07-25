import React, { Component } from 'react';

import logo1 from '../../assests/logo1.png';
export class Header extends Component{
  constructor(){
    super();
  }
  render(){
    return(
        <header>
        <img src={logo1}  alt="logo" />
      </header> 
      
    )
  }
}