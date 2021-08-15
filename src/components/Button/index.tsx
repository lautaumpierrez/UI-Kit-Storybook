import React from 'react';

import { useClasses } from '../../hooks';

import { ButtonProps } from './Button.types';

import './Button.style.scss';

function Button({ children, variant, className, ...props }: ButtonProps): JSX.Element {
  const classes = useClasses('Button', variant, className);

  return <button data-testid="button" className={classes} {...props}>{children}</button>
}

Button.defaultProps = {
  variant: 'primary',
};

export default Button;