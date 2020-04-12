import React, { useRef, useEffect, useState } from 'react';
import * as moment from 'moment';
import TextareaAutosize from 'react-textarea-autosize';

import Post from '../../../models/post.model';
import './post-form.styles.scss';

const PostForm = props => {
  const { onAddPostHandler } = props;
  const postDescRef = useRef('');
  const [disableBtn, setDisableBtn] = useState(true); // Btn is disabled at start

  const validDesc = event => {
    const descValue = event.target.value;

    // Check if the input value is empty, if so, disable btn
    if (!descValue) setDisableBtn(true);
    else setDisableBtn(false);
  };

  const onAddPost = () => {
    const descInput = postDescRef.current.value;

    const newPost = new Post(
      Math.ceil(Math.random() * 100),
      descInput,
      1,
      moment().utc().format('Do MMMM YYYY, h:mm:ss a')
    );
    postDescRef.current.value = '';
    setDisableBtn(true);
    onAddPostHandler(newPost);
  };

  return (
    <div className='post-form'>
      <TextareaAutosize
        className='post-input'
        placeholder="What's on your mind?"
        minRows={2}
        maxRows={20}
        inputRef={postDescRef}
        onChange={validDesc}
        onFocus={validDesc}
      />

      <button className='post-btn' disabled={disableBtn} onClick={onAddPost}>
        Post!
      </button>
    </div>
  );
};

export default PostForm;
