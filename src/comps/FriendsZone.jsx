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
              <img src="img/friends/woman.jpg" alt="woman-jpg" className="friend__img"/>
            </div>
            <div className="friend__text">
              <p className="friend__name">Амелия Джексон</p>
              <p className="friend__mutual">10 Общих</p>
            </div>
          </a>
          <div className="friends-zone__like">
            <img src="img/icons/heart.png" alt="like-img" className="friends-zone__like-img"/>
          </div>
        </li>
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__image">
              <img src="img/friends/woman-2.jpg" alt="woman-jpg" className="friend__img"/>
            </div>
            <div className="friend__text">
              <p className="friend__name">Карина Кросс</p>
              <p className="friend__mutual">5 Общих</p>
            </div>
          </a>
          <div className="friends-zone__like">
            <img src="img/icons/heart.png" alt="like-img" className="friends-zone__like-img"/>
          </div>
        </li>
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__image">
              <img src="img/friends/man.jpg" alt="woman-jpg" className="friend__img"/>
            </div>
            <div className="friend__text">
              <p className="friend__name">Джон Нейтс</p>
              <p className="friend__mutual">5 Общих</p>
            </div>
          </a>
          <div className="friends-zone__like">
            <img src="img/icons/heart.png" alt="like-img" className="friends-zone__like-img"/>
          </div>
        </li>
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__image">
              <img src="img/friends/woman-3.jpg" alt="woman-jpg" className="friend__img"/>
            </div>
            <div className="friend__text">
              <p className="friend__name">Надин Мэйсон</p>
              <p className="friend__mutual">3 Общих</p>
            </div>
          </a>
          <div className="friends-zone__like">
            <img src="img/icons/heart.png" alt="like-img" className="friends-zone__like-img"/>
          </div>
        </li>
        <li className="friend">
          <a href="#" className="friend__link">
            <div className="friend__image">
              <img src="img/friends/man-1.jpg" alt="woman-jpg" className="friend__img"/>
            </div>
            <div className="friend__text">
              <p className="friend__name">Чендлер Чейз</p>
              <p className="friend__mutual">2 Общих</p>
            </div>
          </a>
          <div className="friends-zone__like">
            <img src="img/icons/heart.png" alt="like-img" className="friends-zone__like-img"/>
          </div>
        </li>

      </ul>
    </section>
  );
}

export default FriendsZone;