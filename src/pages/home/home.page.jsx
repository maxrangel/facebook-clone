import React from 'react';
import PostForm from '../../components/posts/post-form/post-form.component';

import './home.styles.scss';

const HomePage = () => {
  return (
    <div className='home-container'>
      <div className='post-form-container'>
        <PostForm />
      </div>

      <div className='posts-container'>
        <div className='post'>Post</div>
      </div>
    </div>
  );
};

export default HomePage;
