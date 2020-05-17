import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../store/actions/auth.actions';

import PostForm from '../../components/posts/post-form/post-form.component';
import UserProfilePicture from '../../components/UI/user-profile-picture/user-profile-picture.component';
// import PostCard from '../../components/posts/post-card/post-card.component';

import './profile.styles.scss';

const ProfilePage = props => {
  const { logoutUser, currentUser } = props;

  // const renderedPosts = userPosts.map(post => (
  //   <PostCard post={post} key={post.id} />
  // ));
  const renderedPosts = [];

  return (
    <div className='profile-container'>
      <div className='user-container'>
        <UserProfilePicture />
        <div className='profile-actions'>
          <h2>{currentUser.username}</h2>
          <button className='btn-logout' onClick={logoutUser}>
            Log Out
          </button>
        </div>
      </div>
      <div className='post-form-container'>
        <PostForm />
      </div>

      <div className='user-posts'>
        {!renderedPosts.length ? (
          <div className='error-text'>
            <p>You have no posts yet...</p>
          </div>
        ) : (
          renderedPosts
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
