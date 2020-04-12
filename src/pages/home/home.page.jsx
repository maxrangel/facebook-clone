import React from 'react';
import PostForm from '../../components/posts/post-form/post-form.component';
import PostCard from '../../components/posts/post-card/post-card.component';

import './home.styles.scss';

const HomePage = () => {
  return (
    <div className='home-container'>
      <div className='post-form-container'>
        <PostForm />
      </div>

      <div className='posts-container'>
        <PostCard />
      </div>
    </div>
  );
};

export default HomePage;
