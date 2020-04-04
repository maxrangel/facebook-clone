import React from 'react';
import './profile.styles.scss';

const ProfilePage = (props) => {
  const { onLogout } = props;
  return (
    <div>
      <h2>Profile page working!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
