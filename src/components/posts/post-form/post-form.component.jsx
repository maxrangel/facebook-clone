import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../store/actions/posts.actions';
import TextareaAutosize from 'react-textarea-autosize';

import './post-form.styles.scss';

const PostForm = props => {
  const { addPost } = props;
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
    addPost(descInput);
    postDescRef.current.value = '';
    setDisableBtn(true);
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

const mapDispatchToProps = dispatch => ({
  addPost: postDesc => dispatch(addPost(postDesc))
});

export default connect(null, mapDispatchToProps)(PostForm);
