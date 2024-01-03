/* eslint-disable no-console */
import React, { useState } from 'react';

export const Form = ({ setIsLoading, setShowAddedData, setAddedPostData }) => {
  const [postData, setPostData] = useState({
    title: '',
    body: '',
  });

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: postData.title,
            body: postData.body,
            userId: 1,
          }),
        }
      );

      const postInfo = await response.json();
      setAddedPostData(postInfo);
      console.log('POST Response:', postInfo);
    } catch (error) {
      console.error('POST Error:', error);
    } finally {
      setShowAddedData(true);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handlePost}>
      <input
        type="text"
        name="title"
        value={postData.title}
        onChange={handleInputChange}
        placeholder="Title"
        className="add-post-form__textfield"
      />
      <textarea
        type="text"
        name="body"
        className="add-post-form__textfield"
        value={postData.body}
        onChange={handleInputChange}
        placeholder="Text"
      />
      <button className="add-post-form__submit" type="submit">
        add post
      </button>
    </form>
  );
};
