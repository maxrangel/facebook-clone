import React from 'react';
import { NavLink } from 'react-router-dom';
import * as moment from 'moment';

import './post-card.styles.scss';

const PostCard = props => {
  const { post } = props;
  const formatDate = moment(post.updatedAt).format('D MMM YYYY h:mm a');

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
          <button className="btn-custom">...</button>
        </div>
      </div>
      <div className='post-content'>
        <p>{post.content}</p>
      </div>
      <div className='post-footer'>
        <button className='btn-custom'>{post.likes.length} Like</button>
        <button className='btn-custom'>{post.comments.length} Comment</button>
        <button className='btn-custom'>Share</button>
      </div>
      <div className='comments'></div>
    </div>
  );
};

export default PostCard;
