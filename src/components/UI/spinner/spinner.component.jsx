import React from 'react';
import './spinner.styles.scss';

const Spinner = props => {
  const { message } = props;
  return (
    <div className='spinner-overlay'>
      <div className='spinner-container'></div>
      <span className='message'>{message}</span>
    </div>
  );
};

export default Spinner;
