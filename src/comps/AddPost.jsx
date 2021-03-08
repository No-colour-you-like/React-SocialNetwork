import React from 'react';

const AddPost = () => {
  return (
    <section className="add-post">
      <div className="add-post__files"></div>
      <form action="#" className="add-post__form">
        <input type="text" className="add-post__input" placeholder="Что нового?" />
        <button className="add-post__add-btn">
          Поделиться
        </button>
      </form>
    </section>
  );
}

export default AddPost;