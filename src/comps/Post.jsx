import React from 'react';

import MyPhoto from '../img/my-photo.jpg';
import PostImg from '../img/post-img.jpg';
import HeartIcon from '../img/icons/static/heart.png';
import SpeechIcon from '../img/icons/static/speech.png';
import ShareIcon from '../img/icons/static/share.png';



const Post = (props) => {
  return (
    <section className="post">
      <div className="post__person">
        <img src={MyPhoto} alt="my-photo" className="post__person-image"/>
        <div className="post__person-text">
          <p className="post__person-name">
            Никита Савкин
          </p>
          <p className="post__person-time">
            20 минут назад
          </p>
        </div>
      </div>
      <p className="post__text">
        Это мой первый пост
      </p>
      <img src={PostImg} className="post__image"></img>
      <div className="post__social">
        <div className="post__social-like">
          <img src={HeartIcon} alt="post-icon" className="post__icon"/>
          <p className="post__social-like-text">
            10 лайков
          </p>
          <img src={SpeechIcon} alt="post-icon" className="post__icon"/>
          <p className="post__social-comment-text">
            30 комментариев
          </p>
        </div>
        <div className="post__social-share">
        <img src={ShareIcon} alt="post-icon" className="post__icon"/>
          <p className="post__social-share-text">
            10
          </p>
        </div>
      </div>

    </section>

  );
}

export default Post;