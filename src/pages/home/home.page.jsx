import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAllPosts } from '../../store/actions/posts.actions';
import PostForm from '../../components/posts/post-form/post-form.component';
import PostCard from '../../components/posts/post-card/post-card.component';
import Spinner from '../../components/UI/spinner/spinner.component';

import './home.styles.scss';
import { useCallback } from 'react';

const HomePage = props => {
  const { posts, isLoading, getAllPosts } = props;

  const renderedPosts = posts.map(post => (
    <PostCard post={post} key={post.id} />
  ));

  // Fetch posts
  const fetchPosts = useCallback(async () => {
    // Dispatch fetch posts
    getAllPosts();
  }, [getAllPosts]);

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
  isLoading: state.postsReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
