import React from 'react';
import './Header.css';
import profileImage from './brad.png';

const Header = () => {
  return (
    <header className="header">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="header-text">
        <h1>Brad Ayers</h1>
        <p className="assets">
        &nbsp;Software Development, Software Testing, Cybersecurity
        </p>
      </div>
    </header>
  );
};

export default Header;