import React from 'react';
import { NavLink } from 'react-router-dom';

//Images 
import NewsIcon from '../img/icons/gif/news.gif';
import MusicIcon from '../img/icons/gif/music.gif';
import ProfileIcon from '../img/icons/gif/profile.gif';
import LetterIcon from '../img/icons/gif/message.gif';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/news">
            <img src={NewsIcon} alt="male-user" className="navigation__icon"/>
            <p className="navigation__name">Новости</p>
          </NavLink>
        </li>
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/profile">
            <img src={ProfileIcon} alt="male-user" className="navigation__icon"/>
            <p className="navigation__name">Профиль</p>
          </NavLink>
        </li>
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/messages">
            <img src={LetterIcon} alt="male-user" className="navigation__icon"/>
            <p className="navigation__name">Сообщения</p>
          </NavLink>
        </li>
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/music">
            <img src={MusicIcon} alt="male-user" className="navigation__icon"/>
            <p className="navigation__name">Музыка</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
