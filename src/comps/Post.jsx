import React from 'react';

const Post = (props) => {
  return (
    <section className="post">
      <div className="post__person">
        <img src="img/my-photo.jpg" alt="my-photo" className="post__person-image"/>
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
      <div className="post__image"></div>
      <div className="post__social">
        <div className="post__social-like">
          <img src="img/icons/static/heart.png" alt="post-icon" className="post__icon"/>
          <p className="post__social-like-text">
            10 лайков
          </p>
          <img src="img/icons/static/speech.png" alt="post-icon" className="post__icon"/>
          <p className="post__social-comment-text">
            30 комментариев
          </p>
        </div>
        <div className="post__social-share">
        <img src="img/icons/static/share.png" alt="post-icon" className="post__icon"/>
          <p className="post__social-share-text">
            10
          </p>
        </div>
      </div>

    </section>

  );
}

export default Post;