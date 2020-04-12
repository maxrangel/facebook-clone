import React from 'react';
import './post-card.styles.scss';

const PostCard = props => {
  return (
    <div className='post-card'>
      <div className='post-user'>
        <div className='user-profile'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
            alt='User profile'></img>
        </div>
        <div className='user-info'>
          <h2 className='user-name'>Username</h2>
          <p className='post-published'>Posted on: -------</p>
        </div>
      </div>
      <div className='post'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos at iusto
          dolorem quidem nemo eum aperiam corrupti modi dolores, asperiores,
          provident optio sint doloremque molestias aliquam eaque cumque.
          Explicabo, commodi!
        </p>
      </div>
      <div className='post-buttons'>
        <button className="btn">Like</button>
        <button className="btn">Comment</button>
        <button className="btn">Share</button>
      </div>
    </div>
  );
};

export default PostCard;
