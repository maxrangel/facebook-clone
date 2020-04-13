import React from 'react';
import { connect } from 'react-redux';
import PostForm from '../../components/posts/post-form/post-form.component';
import ProfileHeader from '../../components/user-profile/profile-header/profile-header.component';
import PostCard from '../../components/posts/post-card/post-card.component';

import './profile.styles.scss';

const ProfilePage = props => {
  const { posts } = props;
  const userPosts = posts.filter(post => post.userId === 1);

  const renderedPosts = userPosts.map(post => (
    <PostCard post={post} key={post.id} />
  ));

  return (
    <div className='profile-container'>
      <ProfileHeader />
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
  posts: state.postsReducer.posts
});

export default connect(mapStateToProps)(ProfilePage);
