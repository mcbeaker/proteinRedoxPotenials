import React from 'react';

const Logo = ({ src, alt }) => {
  return (
    <header className='App-header'>
        <a href='index.html'>
          <img src={src} alt={alt} />
        </a>
    </header>
  );
}

export default Logo;
