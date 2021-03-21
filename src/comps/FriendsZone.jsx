import React from 'react';

const FriendsZone = () => {
  return (
    <section className="friends-zone">
      <h2 className="friends-zone__title">
        Друзья
      </h2>
      <ul className="friends-zone__list">
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__image">
              <img src="img/people/1.jpg" alt="woman-jpg" className="friend__img"/>
            </div>
            <div className="friend__text">
              <p className="friend__name">Амелия Джексон</p>
              <p className="friend__mutual">10 Общих</p>
            </div>
          </a>
        </li>
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__image">
              <img src="img/people/2.jpg" alt="woman-jpg" className="friend__img"/>
            </div>
            <div className="friend__text">
              <p className="friend__name">Дилан Хенкок</p>
              <p className="friend__mutual">5 Общих</p>
            </div>
          </a>
        </li>
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__image">
              <img src="img/people/3.jpg" alt="woman-jpg" className="friend__img"/>
            </div>
            <div className="friend__text">
              <p className="friend__name">Анжела Мур</p>
              <p className="friend__mutual">5 Общих</p>
            </div>
          </a>
        </li>
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__image">
              <img src="img/people/4.jpg" alt="woman-jpg" className="friend__img"/>
            </div>
            <div className="friend__text">
              <p className="friend__name">Надин Мэйсон</p>
              <p className="friend__mutual">3 Общих</p>
            </div>
          </a>
        </li>
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__image">
              <img src="img/people/5.jpg" alt="woman-jpg" className="friend__img"/>
            </div>
            <div className="friend__text">
              <p className="friend__name">Донна Крофтон</p>
              <p className="friend__mutual">2 Общих</p>
            </div>
          </a>
        </li>

      </ul>
    </section>
  );
}

export default FriendsZone;