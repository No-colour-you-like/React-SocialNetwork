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
            <div className="friend__img"></div>
            <div className="friend__text">
              <p className="friend__name">Амелия джексон</p>
              <p className="friend__mutual">10 Общих</p>
            </div>
          </a>
          <div className="friends-zone__like">
            <img src="#" alt="like-img" className="friends-zone__like-img"/>
          </div>
        </li>
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__img"></div>
            <div className="friend__text">
              <p className="friend__name">Амелия джексон</p>
              <p className="friend__mutual">10 Общих</p>
            </div>
          </a>
          <div className="friends-zone__like">
            <img src="#" alt="like-img" className="friends-zone__like-img"/>
          </div>
        </li>
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__img"></div>
            <div className="friend__text">
              <p className="friend__name">Амелия джексон</p>
              <p className="friend__mutual">10 Общих</p>
            </div>
          </a>
          <div className="friends-zone__like">
            <img src="#" alt="like-img" className="friends-zone__like-img"/>
          </div>
        </li>
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__img"></div>
            <div className="friend__text">
              <p className="friend__name">Амелия джексон</p>
              <p className="friend__mutual">10 Общих</p>
            </div>
          </a>
          <div className="friends-zone__like">
            <img src="#" alt="like-img" className="friends-zone__like-img"/>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default FriendsZone;