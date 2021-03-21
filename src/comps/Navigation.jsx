import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/news">
            <img src="img/icons/static/activity.png" alt="male-user" className="navigation__icon"/>
            <p className="navigation__name">Новости</p>
          </NavLink>
        </li>
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/profile">
            <img src="img/icons/static/user-male.png" alt="male-user" className="navigation__icon"/>
            <p className="navigation__name">Профиль</p>
          </NavLink>
        </li>
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/messages">
            <img src="img/icons/static/letter.png" alt="male-user" className="navigation__icon"/>
            <p className="navigation__name">Сообщения</p>
          </NavLink>
        </li>
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/music">
            <img src="img/icons/static/casette.png" alt="male-user" className="navigation__icon"/>
            <p className="navigation__name">Музыка</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
