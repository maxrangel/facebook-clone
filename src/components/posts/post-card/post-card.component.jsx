import React from 'react';
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaRegCommentAlt,
  FaShare
} from 'react-icons/fa';
import './post-card.styles.scss';

const PostCard = props => {
  const { post } = props;

  return (
    <div className='post-card'>
      <div className='post-user'>
        <div className='user-profile'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
            alt='User profile'></img>
        </div>
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
