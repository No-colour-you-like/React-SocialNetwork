import React from 'react'; 

//Images 
import MyPhoto from '../img/my-photo.jpg';
import ProfileBg from '../img/profile-bg.jpg';
import FacebookIcon from '../img/icons/social/facebook.svg';
import InstargamIcon from '../img/icons/social/instagram.svg';
import TwitterIcon from '../img/icons/social/twitter.svg';
import YoutubeIcon from '../img/icons/social/youtube.svg';
import TelegramIcon from '../img/icons/social/telegram.svg';
import LinkedinIcon from '../img/icons/social/linkedin.svg';


const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__main-info">
        <div className="profile__top">
          <img src={ProfileBg} alt="profile-bg" className="profile__top-img" />
        </div>
        <div className="profile__bottom">
          <div className="profile__links">
            <a href="#" className="profile__link">
              <img src={FacebookIcon} alt="social-icon" className="profile__link-icon" />
            </a>
            <a href="#" className="profile__link">
              <img src={InstargamIcon} alt="social-icon" className="profile__link-icon" />
            </a>
            <a href="#" className="profile__link">
              <img src={TwitterIcon} alt="social-icon" className="profile__link-icon" />
            </a>
            <a href="#" className="profile__link">
              <img src={YoutubeIcon} alt="social-icon" className="profile__link-icon" />
            </a>
            <a href="#" className="profile__link">
              <img src={TelegramIcon} alt="social-icon" className="profile__link-icon" />
            </a>
            <a href="#" className="profile__link">
              <img src={LinkedinIcon} alt="social-icon" className="profile__link-icon" />
            </a>
          </div>
          <div className="profile__name">
            <img src={MyPhoto} alt="profile-img" className="profile__image" />
            <p className="profile__name-text">Никита Савкин</p>
          </div>
          <div className="profile__follow">
            <div className="profile__follow-info">
              <p className="profile__follow-title">Записи</p>
              <p className="profile__follow-val">30</p>
            </div>
            <div className="profile__follow-info">
              <p className="profile__follow-title">Подписчики</p>
              <p className="profile__follow-val">102</p>
            </div>
            <div className="profile__follow-info">
              <p className="profile__follow-title">Подписки</p>
              <p className="profile__follow-val">56</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="profile__menu">
        <div className="profile__menu-section">
          Лента
        </div>
        <div className="profile__menu-section">
          Обо мне
        </div>
        <div className="profile__menu-section">
          Друзья
        </div>
        <div className="profile__menu-section">
          Фотографии
        </div>
      </nav>
    </section>
  )
}

export default Profile;