import React from 'react';
import './button.styles.scss';

const Button = props => {
  const { label, ...otherProps } = props;
  return (
    <button className='btn' {...otherProps}>
      {label}
    </button>
  );
};

export default Button;
