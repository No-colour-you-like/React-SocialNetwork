import React from 'react'; 

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__top">
        <div className="profile__top"></div>
        <div className="profile__bottom">
          <div className="profile__links">
            <div className="profile__link">1</div>
            <div className="profile__link">2</div>
            <div className="profile__link">3</div>
          </div>
          <div className="profile__name">
            <img src="img/profile-photo.png" alt="profile-img" className="profile__image"/>
            <p className="profile__name-text">John Jones</p>
          </div>
          <div className="profile__follow">
            <p className="profile__follow-link">Posts</p>
            <p className="profile__follow-link">Followers</p>
            <p className="profile__follow-link">Follow</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile;