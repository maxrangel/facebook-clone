import React from 'react';
import './user-profile-picture.styles.scss';

const UserProfilePicture = props => {
  return (
    <div className='user-profile'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
        alt='User profile'></img>
    </div>
  );
};

export default UserProfilePicture;
