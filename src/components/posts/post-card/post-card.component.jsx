import React from 'react';
import * as moment from 'moment';

import UserProfilePicture from '../../UI/user-profile-picture/user-profile-picture.component';
import './post-card.styles.scss';

const PostCard = props => {
  const { post } = props;

  const formatDate = moment(post.updatedAt).format('D MMM YYYY h:mm a');

  const onVisitUserProfile = () => {
    console.log(post.userId._id);
  };

  return (
    <div className='post-card'>
      <div className='post-user'>
        <UserProfilePicture user={post.userId} />
        <div className='user-info'>
          <h3 className='user-name' onClick={onVisitUserProfile}>
            {post.userId.username}
          </h3>
          <p className='post-published'>{formatDate}</p>
        </div>
      </div>
      <div className='post'>
        <p>{post.content}</p>
      </div>
      <div className='post-buttons'>
        <button className='btn'>{post.likes.length} Like</button>
        <button className='btn'>{post.comments.length} Comment</button>
        <button className='btn'>Share</button>
      </div>
    </div>
  );
};

export default PostCard;
