import React from 'react';

//Images 
import Person1 from '../img/people/1.jpg';
import Person2 from '../img/people/2.jpg';
import Person3 from '../img/people/3.jpg';
import Person4 from '../img/people/4.jpg';
import Person5 from '../img/people/5.jpg';

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
              <img src={Person1} alt="woman-jpg" className="friend__img"/>
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
              <img src={Person2} alt="woman-jpg" className="friend__img"/>
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
              <img src={Person3} alt="woman-jpg" className="friend__img"/>
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
              <img src={Person4} alt="woman-jpg" className="friend__img"/>
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
              <img src={Person5} alt="woman-jpg" className="friend__img"/>
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