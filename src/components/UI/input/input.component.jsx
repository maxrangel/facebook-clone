import React from 'react';
import './input.styles.scss';

const Input = props => {
  const { id, label, inputRef, ...otherProps } = props;

  return (
    <div className='form-group'>
      <input
        required
        className='form-group__input'
        id={id}
        {...otherProps}
        ref={inputRef}
      />

      <label className='form-group__label' htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;
