import React from 'react';

// Images
import MyPhoto from '../img/my-photo.jpg';
import LogoIcon from '../img/logo.jpg';
import SearchIcon from '../img/icons/static/search.png';
import HomeIcon from '../img/icons/static/home.png';
import PeopleIcon from '../img/icons/static/people.png';
import LetterIcon from '../img/icons/static/letter.png';
import BellIcon from '../img/icons/static/bell.png';
import SettingsIcon from '../img/icons/static/settings.png';


const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
          <div className="header__logo">
            <img src={LogoIcon} alt="logo" className="logo"/>
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
              <img className="header__search-logo" src={SearchIcon} alt="search-gif"/>
            </button>
          </form>
          <div className="header__menu">
            <a href="#" className="header__profile">
              <img src={MyPhoto} alt="my-photo" className="header__profile-photo"/>
              <p className="header__profile-name">Nikita S.</p>
            </a>
            <a href="#" className="header__icon">
              <img src={HomeIcon} alt="home-icon" className="header__icon-pic"/>
            </a>
            <a href="#" className="header__icon">
              <img src={PeopleIcon} alt="people-icon" className="header__icon-pic"/>
            </a>
            <a href="#" className="header__icon">
              <img src={LetterIcon} alt="people-icon" className="header__icon-pic"/>
            </a>
            <a href="#" className="header__icon">
              <img src={BellIcon} alt="people-icon" className="header__icon-pic"/>
            </a>
            <a href="#" className="header__icon">
              <img src={SettingsIcon} alt="people-icon" className="header__icon-pic"/>
            </a>
          </div>
        </div>
    </header>
  );
}


export default Header;