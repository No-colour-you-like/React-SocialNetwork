import React from 'react'; 

const ProfileAbout = () => {
  return (
    <div className="profile-about">
      <ul className="profile-about__nav">
        <li className="profile-about__name">
          Контакты и Информация
        </li>
        <li className="profile-about__name">
          Учеба и Работа
        </li>
      </ul>
      <div className="profile-about__section">
        <h2 className="profile-about__section-title">
          Контактная информация 
        </h2>
        <div className="profile-about__subtitle">
          <div className="profile-about__subtitle-names">
            <p className="profile-about__subtitle-name">Email</p>
            <p className="profile-about__subtitle-name">Mobile</p>
            <p className="profile-about__subtitle-name">Address</p>
          </div>
          <div className="profile-about__subtitle-info">
            <p className="profile-about__subtitle-info">no.colour.you.like@gmail.com</p>
            <p className="profile-about__subtitle-info">12345678</p>
            <p className="profile-about__subtitle-info">Moscow</p>
          </div>
        </div>

        <h2 className="profile-about__section-title">
          Основная информация 
        </h2>
        <div className="profile-about__subtitle">
          <p className="profile-about__subtitle-name">Дата рождения</p>
          <p className="profile-about__subtitle-info">28 сентября 1994</p>
        </div>
      </div>
    </div>
  )
};

export default ProfileAbout;