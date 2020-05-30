import React, { useEffect, useCallback } from 'react';
import { fetchUserProfile } from '../../store/actions/user.actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { logout } from '../../store/actions/auth.actions';

import PostForm from '../../components/posts/post-form/post-form.component';
import UserProfilePicture from '../../components/UI/user-profile-picture/user-profile-picture.component';
import Spinner from '../../components/UI/spinner/spinner.component';
import PostCard from '../../components/posts/post-card/post-card.component';

import './profile.styles.scss';

const ProfilePage = props => {
  const { logoutUser, getProfile, isLoading, user, posts, currentUser } = props;
  const { id } = useParams();

  const getUserProfile = useCallback(async () => {
    getProfile(id);
  }, [getProfile, id]);

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);

  const renderedPosts = posts.map(post => (
    <PostCard post={post} key={post.id} />
  ));

  // Keep loading if the user is null
  return isLoading || !user ? (
    <Spinner message='Loading profile...' />
  ) : (
    <div className='profile-container'>
      <div className='user-container'>
        <UserProfilePicture />
        <div className='profile-actions'>
          <h2>{user.username}</h2>
          <h4>Friends: {user.friends.length}</h4>
          {currentUser._id === user._id ? (
            <button className='btn btn-logout' onClick={logoutUser}>
              Log Out
            </button>
          ) : (
            <button className=' btn btn-friend' onClick={logoutUser}>
              Send friend request
            </button>
          )}
        </div>
      </div>

      {currentUser._id === user._id && (
        <div className='post-form-container'>
          <PostForm />
        </div>
      )}

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
  currentUser: state.authReducer.currentUser,
  isLoading: state.userReducer.isLoading,
  user: state.userReducer.user,
  posts: state.userReducer.posts
});

const mapDispatchToProps = dispatch => ({
  getProfile: userId => dispatch(fetchUserProfile(userId)),
  logoutUser: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
