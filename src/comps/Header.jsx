import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
          <div className="header__logo">
            <img src="img/logo.jpg" alt="logo" className="logo"/>
            <p className="header__name">MyNetwork</p>
            <div className="hamburger">
              <div className="hamburger__line"></div>
              <div className="hamburger__line"></div>
              <div className="hamburger__line"></div>
            </div>
          </div>
          <form className="header__search">
            <input type="text" className="header__input" placeholder="Нажмите, чтобы найти..."/>
            <button className="header__search-btn">
              <img className="header__search-logo" src="img/icons/static/search.png" alt="search-gif"/>
            </button>
          </form>
          <div className="header__menu">
            <a href="#" className="header__profile">
              <img src="img/my-photo.jpg" alt="my-photo" className="header__profile-photo"/>
              <p className="header__profile-name">Nikita S.</p>
            </a>
            <a href="#" className="header__icon">
              <img src="img/icons/static/home.png" alt="home-icon" className="header__icon-pic"/>
            </a>
            <a href="#" className="header__icon">
              <img src="img/icons/static/people.png" alt="people-icon" className="header__icon-pic"/>
            </a>
            <a href="#" className="header__icon">
              <img src="img/icons/static/letter.png" alt="people-icon" className="header__icon-pic"/>
            </a>
            <a href="#" className="header__icon">
              <img src="img/icons/static/bell.png" alt="people-icon" className="header__icon-pic"/>
            </a>
            <a href="#" className="header__icon">
              <img src="img/icons/static/settings.png" alt="people-icon" className="header__icon-pic"/>
            </a>
          </div>
        </div>
    </header>
  );
}


export default Header;