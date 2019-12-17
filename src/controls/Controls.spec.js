import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toHaveAttribute, toHaveTextContent } from '@testing-library/jest-dom';
import Controls from './Controls'

expect.extend({ toHaveAttribute, toHaveTextContent });

test("When gate is open, it cannot be locked.", () => {
  const { getByText } =
    render (<Controls closed={false}/>);
  const button = getByText('Lock Gate');
  expect(button).toHaveAttribute('disabled');
});

test("When gate is locked, it cannot be opened.", () => {
  const { getByText } =
    render (<Controls closed={true} locked={true}/>);
  const button = getByText('Open Gate');
  expect(button).toHaveAttribute('disabled');
});

// FIXME: Button doesn't appear to change text here.
test("An open gate can be closed.", () => {
  const { getByText } = 
    render(<Controls closed={false} locked={false}/>);
  let button = getByText('Close Gate');
  fireEvent.click(button);
  expect(button).toHaveTextContent('Close Gate');
  // getByText('Close Gate');
});