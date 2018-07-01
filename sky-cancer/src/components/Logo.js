import React, {Component} from 'react';
import { Link } from 'react-router-dom'


const Logo = () => (
  <div className="Logo">

    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className="logo">
        <img src={require("../img/logo2.jpg")} alt="logo" style={{float:'left'}}/>
        <span style={{color:'#CF1259'}}> Fly</span>High
        <div style={{clear:'both'}}></div>
      </div>
    </Link>
  </div>
)


export default Logo;
