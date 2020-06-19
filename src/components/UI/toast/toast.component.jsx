import React, { useState, useEffect } from 'react';

import './toast.styles.scss';

const Toast = props => {
  const [showToast, setShowToast] = useState(false);
  const { message, color } = props;

  useEffect(() => {
    setShowToast(true);
  }, []);

  setTimeout(() => {
    setShowToast(false);
  }, 2000);

  return (
    <div
      className={`toast toast--${color} toast--${showToast ? 'active' : ''}`}>
      <p className='toast__text'>{message}</p>
    </div>
  );
};

export default Toast;
