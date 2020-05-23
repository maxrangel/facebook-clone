import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';
import * as moment from 'moment';

import './post-card.styles.scss';

const PostCard = props => {
  const { post } = props;

  const formatDate = moment(post.updatedAt).format('D MMM YYYY h:mm a');

  const onVisitUserProfile = () => {
    console.log(post.userId._id);
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
          <h3 className='user-name' onClick={onVisitUserProfile}>
            {post.userId.username}
          </h3>
          <p className='post-published'>{formatDate}</p>
        </div>

        <div className='options'>
          <DropdownButton id='options-menu' title={<BsThreeDots />}>
            <Dropdown.Item href='#/action-1'>Save post</Dropdown.Item>
            <Dropdown.Item href='#/action-1'>Edit post</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Delete post</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className='post-content'>
        <p>{post.content}</p>
      </div>
      <div className='post-footer'>
        <button className='btn'>{post.likes.length} Like</button>
        <button className='btn'>{post.comments.length} Comment</button>
        <button className='btn'>Share</button>
      </div>
      <div className='comments'></div>
    </div>
  );
};

export default PostCard;
