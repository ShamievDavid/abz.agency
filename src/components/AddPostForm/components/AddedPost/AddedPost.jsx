import React from 'react';
import './AddedPost.scss';

export const AddedPost = ({ addedPostData }) => {
  const { title, body, id } = addedPostData;
  return (
    <div className="added-post">
      <div>id: {id}</div>
      <div>title: {title}</div>
      <div>body: {body}</div>
    </div>
  );
};
