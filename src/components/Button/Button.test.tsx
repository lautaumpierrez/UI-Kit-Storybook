import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Button from '.';
import { ButtonProps } from './Button.types';


describe('Button atom testing', () => {
  // ? re-rendering component helper.
  const reRender = (buttonText: string, props: Partial<ButtonProps> = {}) => {

    const renderedResult = render(<Button {...props}>{buttonText}</Button>);
    const button = renderedResult.getByText(new RegExp(buttonText, 'i'));

    return { renderedResult, button }
  }


  test('Testing text/children rendering', async () => {
    const { button } = reRender('Hello world!');
    expect(button).toBeInTheDocument();
  });

  test('Testing different text content', () => {

    const { button } = reRender('other text', {});
    expect(button).toHaveTextContent(/other text/i);
    expect(button).toHaveClass('Button');
  });

  // ? Testing variants  Primary, Secondary & Terciary variants 
  test('Primary button', () => {
    const { button } = reRender('Primary button', { variant: 'primary' });
    expect(button).toHaveClass('primary')
  });
  test('Secondary button', () => {
    const { button } = reRender('Secondary button', { variant: 'secondary' });
    expect(button).toHaveClass('secondary');
  });
  test('Terciary button', () => {
    const { button } = reRender('Secondary button', { variant: 'secondary' });
    expect(button).toHaveClass('secondary');
  });

  // ? Testing button click event
  test('Testing onClick event', () => {
    const spyFunction = jest.fn();
    const { button } = reRender('Hello world!', { onClick: spyFunction });

    expect(spyFunction).toHaveBeenCalledTimes(0);
    fireEvent(button, new MouseEvent('click', {
      bubbles: true,
    }));
    expect(spyFunction).toHaveBeenCalledTimes(1);
    // ? firing the click evet again 
    fireEvent.click(button);

    expect(spyFunction).toHaveBeenCalledTimes(2);
  })
})