import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';

import { addPost } from '../../../store/actions/posts.actions';

import './post-form.styles.scss';

const PostForm = props => {
  const { isLoading, currentUser, addPost, authToken } = props;
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
    if (!descInput) return;

    postDescRef.current.value = '';
    setDisableBtn(true);

    addPost(descInput, currentUser._id, authToken);
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

      <button
        className='post-btn'
        disabled={disableBtn || isLoading}
        onClick={onAddPost}>
        Post!
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.postsReducer.isLoading,
  currentUser: state.authReducer.currentUser,
  authToken: state.authReducer.token
});

const mapDispatchToProps = dispatch => ({
  addPost: (postDesc, userId, token) =>
    dispatch(addPost(postDesc, userId, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
