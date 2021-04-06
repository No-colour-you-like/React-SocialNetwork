import React from 'react';

import MyPhoto from '../img/my-photo.jpg';
import PostImg from '../img/post-img.jpg';
import LikeIcon from '../img/icons/gif/like.gif';
import CommentIcon from '../img/icons/gif/comment.gif';
import ShareIcon from '../img/icons/gif/share.gif';



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
          <img src={LikeIcon} alt="post-icon" className="post__icon"/>
          <p className="post__social-like-text">
            10 лайков
          </p>
          <img src={CommentIcon} alt="post-icon" className="post__icon"/>
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