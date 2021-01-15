import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1>
        Welcome to Catbook{' '}
        <span role="img" aria-label="cat paw emoji">
          🐾
        </span>
      </h1>
      <p>The ultimate feline social network</p>
    </div>
  );
};

export default Header;
