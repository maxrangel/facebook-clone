import React from 'react';
import UserProfilePicture from '../../UI/user-profile-picture/user-profile-picture.component';

import './profile-header.styles.scss';

const ProfileHeader = props => {
  return (
    <div className='profile-header-container'>
      <UserProfilePicture />
      <div className="profile-actions">
        <h2>Username</h2>
        <button className="btn-logout">Logout</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
