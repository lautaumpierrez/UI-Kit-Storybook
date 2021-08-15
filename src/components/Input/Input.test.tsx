import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { InputProps } from './Input.types';
import Input from '.';
import Button from '../Button';



describe('Input atom testing', () => {
  const reRender = (props: Partial<InputProps> = {}) => {

    const renderedResult = render(<Input {...props} />);
    const input = renderedResult.getByTestId('input') as HTMLInputElement;

    return { renderedResult, input };
  }
  test('Input rendering', () => {
    const { input } = reRender({ variant: 'primary' });

    expect(input).toBeInTheDocument();
  });

  test('Input with placeholder', () => {
    const placeholder = 'Hello world! placeholder.';
    const { input } = reRender({ variant: 'primary', placeholder });

    expect(input).toHaveProperty('placeholder', placeholder);
  })
  // * Change event
  test('Input change event', () => {
    const onChange = jest.fn();
    const inputValue = 'New input value';

    const { input } = reRender({ variant: 'primary', onChange });

    fireEvent.change(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });

  // * Focus event
  test('Testing focus', () => {
    const { input } = reRender({ variant: 'primary' });

    input.focus();

    expect(input).toHaveFocus();
  })

  // * Blur event
  test('Testing blur', () => {
    const { input } = reRender({ variant: 'primary' });

    fireEvent.blur(input);

    expect(input).not.toHaveFocus();
  })

  // * Input with trigger
  test('Testing correct Input and Button rendering.', () => {
    const { renderedResult, input } = reRender({ trigger: <Button>Click!</Button> });
    const button = renderedResult.getByTestId('button');
    // ? Testing correct rendering
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('Testing button rendering and click event..', () => {
    const onClick = jest.fn();
    const inputChange = 'New value';
    const { renderedResult, input } = reRender({ trigger: <Button onClick={onClick}>Click!</Button> });
    const button = renderedResult.getByTestId('button');

    expect(onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: inputChange } });
    expect(onClick).toHaveBeenCalledTimes(1);

    expect(input.value).toBe(inputChange);

  });
});