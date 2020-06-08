import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { likePost } from '../../../store/actions/posts.actions';
import * as moment from 'moment';

import './post-card.styles.scss';
import { useCallback } from 'react';

const PostCard = props => {
  const [postLiked, setPostLiked] = useState(false);
  const { post, currentUser, likePostHandler, authToken } = props;
  const formatDate = moment(post.createdAt).format('D MMM YYYY h:mm a');

  // If userId is found, then user liked post, otherwise, has not been liked yet
  const validateUserLike = useCallback(() => {
    const userLike = post.likes.find(userId => userId === currentUser._id);
    setPostLiked(!!userLike);
  }, [currentUser, post]);

  // Check if current user already liked post
  useEffect(() => {
    validateUserLike();
  }, [validateUserLike]);

  const onLikePostHandler = () => {
    likePostHandler(post.id, currentUser._id, authToken);
    validateUserLike();
  };

  return (
    <div className='post-card'>
      <div className='post-header'>
        <div className='user-profile'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
            alt='User profile'></img>
        </div>

        <div className='user'>
          <NavLink className='user-name' to={`/profile/${post.userId._id}`}>
            {post.userId.username}
          </NavLink>
          <p className='post-published'>{formatDate}</p>
        </div>

        <div className='options'>
          <button className='btn-custom'>...</button>
        </div>
      </div>
      <div className='post-content'>
        <p>{post.content}</p>
      </div>
      <div className='post-footer'>
        <button
          className={`btn-custom ${postLiked ? 'liked' : ''}`}
          onClick={onLikePostHandler}>
          {post.likes.length} Like
        </button>
        <button className='btn-custom'>{post.comments.length} Comment</button>
      </div>
      <div className='comments'>
        
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser,
  authToken: state.authReducer.token
});

const mapDispatchToProps = dispatch => ({
  likePostHandler: (postId, userId, token) => dispatch(likePost(postId, userId, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
