import React from 'react';
import './AddedPost.scss';

export const AddedPost = ({ addedPostData }) => {
  const { title, body, id } = addedPostData;
  return (
    <div className="added-post">
      <div className="added-post__id">id: {id}</div>
      <div className="added-post__title">title: {title}</div>
      <div className="added-post__body">body: {body}</div>
    </div>
  );
};
