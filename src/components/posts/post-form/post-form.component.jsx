import React, { useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './post-form.styles.scss';

const PostForm = props => {
  const postDescRef = useRef('');

  return (
    <div className='post-form'>
      <TextareaAutosize
        className='post-input'
        placeholder="What's on your mind?"
        minRows={2}
        maxRows={20}
        inputRef={postDescRef}
      />

      <button className='post-btn'>Post!</button>
    </div>
  );
};

export default PostForm;
