import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
          <div className="header__logo">
            <p className="logo">MyNetwork</p>
            <div className="hamburger">
              <div className="hamburger__line"></div>
              <div className="hamburger__line"></div>
              <div className="hamburger__line"></div>
            </div>
          </div>
          <form className="header__search">
            <input type="text" className="header__input" placeholder="Нажмите, чтобы найти..."/>
            <button className="header__search-btn">
              1
            </button>
          </form>
          <div className="header__menu">
            <div className="home__icon">1</div>
            <div className="notification__icon">2</div>
            <div className="message__icon">3</div>
            <div className="menu__icon">4</div>
          </div>
        </div>
    </header>
  );
}


export default Header;