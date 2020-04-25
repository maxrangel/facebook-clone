import React from 'react';
import {
  // FaThumbsUp,
  FaRegThumbsUp,
  FaRegCommentAlt,
  FaShare
} from 'react-icons/fa';
import UserProfilePicture from '../../UI/user-profile-picture/user-profile-picture.component';
import './post-card.styles.scss';

const PostCard = props => {
  const { post } = props;

  return (
    <div className='post-card'>
      <div className='post-user'>
        <UserProfilePicture />
        <div className='user-info'>
          <h2 className='user-name'>Username</h2>
          <p className='post-published'>Posted on: {post.createdAt}</p>
        </div>
      </div>
      <div className='post'>
        <p>{post.content}</p>
      </div>
      <div className='post-buttons'>
        <button className='btn'>
          <FaRegThumbsUp /> Like
        </button>
        <button className='btn'>
          <FaRegCommentAlt />
          Comment
        </button>
        <button className='btn'>
          <FaShare /> Share
        </button>
      </div>
    </div>
  );
};

export default PostCard;
