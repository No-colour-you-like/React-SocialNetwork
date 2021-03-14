import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__nav">
            <NavLink exact to="/main" className="header__nav-name">
              Главная
            </NavLink>
            <NavLink exact to="/messages" className="header__nav-name">
              Сообщения
            </NavLink>
            <NavLink to="#" className="header__nav-name">
              Новости
            </NavLink>
            <NavLink to="#" className="header__nav-name">
              Музыка
            </NavLink>
          </div>
          <div className="logo">
            <img src="img/logo.png" alt="logo" className="logo-img" />
          </div>
          <div className="header__search-block">
            <form action="#" className="header__search-form">
              <input type="text" className="header__input" placeholder="Поиск" />
              <button className="header__search-btn">
                <img src="img/icons/search-2.png" alt="search-img" className="header__search-btn-icon"/>
              </button>
            </form>
            <div className="header__person">
              <img src="img/profile-photo.png" alt="profile-photo" className="header__person-img"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;