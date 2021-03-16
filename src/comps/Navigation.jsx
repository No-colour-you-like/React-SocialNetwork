import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/profile">
            Профиль
          </NavLink>
        </li>
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/news">
            Новости
          </NavLink>
        </li>
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/messages">
            Сообщения
          </NavLink>
        </li>
        <li className="navigation__name">
          <NavLink className="navigation__link" to="/music">
            Музыка
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
