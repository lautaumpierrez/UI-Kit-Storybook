import React from 'react';

import { useClasses } from '../../hooks';

import { InputProps } from './Input.types';

import './Input.style.scss'

function Input({ variant, className, trigger, ...rest }: InputProps) {

  const classes = useClasses('Input', variant, className);

  return (
    <div className="InputContainer">
      <input className={classes} {...rest} />
      {trigger}
    </div>
  )
}

Input.defaultProps = {
  variant: 'primary'
}

export default Input;