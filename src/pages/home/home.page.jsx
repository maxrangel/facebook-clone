import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAllPosts } from '../../store/actions/posts.actions';
import PostForm from '../../components/posts/post-form/post-form.component';
import PostCard from '../../components/posts/post-card/post-card.component';
import Spinner from '../../components/UI/spinner/spinner.component';

import './home.styles.scss';
import { useCallback } from 'react';

const HomePage = props => {
  const {
    posts,
    isLoading,
    getAllPosts,
    authToken,
    authError,
    postsError
  } = props;

  const renderedPosts = posts.map(post => (
    <PostCard post={post} key={post.id} />
  ));

  // Fetch posts
  const fetchPosts = useCallback(async () => {
    // Dispatch fetch posts
    getAllPosts(authToken);
  }, [getAllPosts, authToken]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return isLoading ? (
    <Spinner message='Loading posts...' />
  ) : (
    <div className='home-container'>
      <div className='post-form-container'>
        <PostForm />
      </div>

      <div className='posts-container'>
        {!renderedPosts.length ? (
          <p className='error-message'>No posts found...</p>
        ) : (
          renderedPosts
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  isLoading: state.postsReducer.isLoading,
  authToken: state.authReducer.token,
  authError: state.authReducer.error,
  postsError: state.postsReducer.error
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: token => dispatch(fetchAllPosts(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
