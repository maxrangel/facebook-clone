import React, { useState } from 'react';
import PostForm from '../../components/posts/post-form/post-form.component';
import PostCard from '../../components/posts/post-card/post-card.component';

import './home.styles.scss';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const addPost = post => {
    setPosts([...posts, post]);
  };

  const renderedPosts = posts.map(post => (
    <PostCard post={post} key={post.id} />
  ));

  return (
    <div className='home-container'>
      <div className='post-form-container'>
        <PostForm onAddPostHandler={addPost} />
      </div>

      <div className='posts-container'>
        {!renderedPosts.length ? <p>No posts found...</p> : renderedPosts}
      </div>
    </div>
  );
};

export default HomePage;
