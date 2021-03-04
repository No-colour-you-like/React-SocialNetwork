import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__nav">
            <a href="#" className="header__nav-name">
              Home
            </a>
            <p className="header__nav-name">Message</p>
            <p className="header__nav-name">Notification</p>
          </div>
          <div className="logo">
            <img src="/img/logo.png" alt="logo" className="logo-img" />
          </div>
          <div className="header__search-block">
            <form action="#" className="header__search-form">
              <input type="text" className="header__input" />
              <button className="header__search-btn"></button>
            </form>
            <div className="header__person"></div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;