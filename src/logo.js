import logo from './logo.svg';
import React from 'react';
import './App.css';


const Logo = () => {
    console.log("loaded Logo");
    // console.log(src);
  return (
        <a href='index.html'>
          <img src={logo} className='App-logo' alt="ProtRedox logo" />
        </a>
  );
}

export default Logo;
