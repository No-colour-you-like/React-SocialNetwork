import React from 'react';

const Post = (props) => {
  return (
    <section className="post">
      <div className="post__person">
        <div className="post__person-image">
        </div>
        <p className="post__person-name">
          Мэрри Ватсон
        </p>
        <div className="post__person-time">
          20 минут назад
        </div>
      </div>
      <p className="post__text">
        Это мой первый пост
      </p>
      <div className="post__image"></div>
      <div className="post__social">
        <div className="post__social-like">
          <img src="img/icons/heart-rate.svg" alt="post-icon" className="post__icon"/>
          <p className="post__social-like-text">
            Понравилось 10 людям
          </p>
        </div>
        <div className="post__social-comment">
        <img src="img/icons/conversation.svg" alt="post-icon" className="post__icon"/>
          <p className="post__social-comment-text">
            30
          </p>
        </div>
        <div className="post__social-share">
        <img src="img/icons/share.svg" alt="post-icon" className="post__icon"/>
          <p className="post__social-share-text">
            10
          </p>
        </div>
      </div>

    </section>

  );
}

export default Post;