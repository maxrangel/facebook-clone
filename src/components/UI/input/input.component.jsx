import React from 'react';
import './input.styles.scss';

const Input = props => {
  const { id, label, inputRef, ...otherProps } = props;
  return (
    <div className='form-group'>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...otherProps} ref={inputRef} />
    </div>
  );
};

export default Input;
