/* eslint-disable no-console */
import React, { useState } from 'react';
import './AddPostForm.scss';
import { Loader } from 'components/Loader';
import { AddedPost, Form } from './components';

export const AddPostForm = ({ setAddPost }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAddedData, setShowAddedData] = useState(false);
  const [addedPostData, setAddedPostData] = useState(null);

  return (
    <div className="add-post-form">
      <div className="add-post-form__close" onClick={() => setAddPost(false)}>
        ×
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <Form
          setShowAddedData={setShowAddedData}
          setIsLoading={setIsLoading}
          setAddedPostData={setAddedPostData}
        />
      )}
      {showAddedData && <AddedPost addedPostData={addedPostData} />}
    </div>
  );
};
