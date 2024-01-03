import React from 'react';
import './AddPostButton.scss';

export const AddPostButton = ({ setAddPost }) => {
  return (
    <>
      <div className="add-post-button__text"> add post ↓</div>
      <div className="add-post-button" onClick={() => setAddPost(true)}>
        +
      </div>
    </>
  );
};
