import React from 'react';

const ProfilePhoto = () => {
  return (
    <section className="profile-photo">
      <div className="profile-photo__big-image">
        <img src="img/profile-picture__big.jpg" alt="big-photo" className="profile-photo__big-img"/>
      </div>
      <div className="profile-photo__small-image">
        <img src="img/profile-photo.png" alt="small-photo" className="profile-photo__small-img"/>
      </div>
      <div className="profile-photo__info">
        <p className="profile-photo__name">Джон Джонс</p>
        <p className="profile-photo__text">
        Any one can join with but Social network us if you want Any one can join with us if you want
        </p>
      </div>
    </section>
  );
}

export default ProfilePhoto;