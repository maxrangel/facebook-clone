import React from 'react';
import { connect } from 'react-redux';

import PostForm from '../../components/posts/post-form/post-form.component';
import PostCard from '../../components/posts/post-card/post-card.component';

import './home.styles.scss';

const HomePage = props => {
  const { posts } = props;

  const renderedPosts = posts.map(post => (
    <PostCard post={post} key={post.id} />
  ));

  return (
    <div className='home-container'>
      <div className='post-form-container'>
        <PostForm />
      </div>

      <div className='posts-container'>
        {!renderedPosts.length ? <p>No posts found...</p> : renderedPosts}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  posts: state.postsReducer.posts
});

export default connect(mapStateToProps)(HomePage);
