import React from 'react';
import { render } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom';
import Display from './Display';

expect.extend({ toHaveClass });

test ("Displays 'Closed' if closed prop is true. Else 'Open'", () => {
  const { getByText, rerender } = 
    render (<Display closed={true} />);
  getByText('Closed');
  
  rerender(<Display closed={false} />)
  getByText('Open');
});

test ("Displays 'Locked' if locked prop is true. Else 'Open'", () => {
  const { getByText, rerender } = render (<Display locked={true} />);
  getByText('Locked');

  rerender(<Display locked={false} />)
  getByText('Open');
})

// Color of lock status indicator
test ("Uses 'red-led' class when locked, else 'green-led'", () => {
  const { getByText , rerender } = render (<Display locked={true} />);
  let lockStatus = getByText('Locked');
  expect(lockStatus).toHaveClass('red-led');
  expect(lockStatus).not.toHaveClass('green-led');

  rerender (<Display locked={false} />);
  lockStatus = getByText('Unlocked');
  expect(lockStatus).toHaveClass('green-led');
  expect(lockStatus).not.toHaveClass('red-led');
});

// Color of gate open/closed status indicator
test ("Uses 'red-led' class when closed, else 'green-led'", () => {
  const { getByText , rerender } = render (<Display closed={true} />);
  let closedStatus = getByText('Closed');
  expect(closedStatus).toHaveClass('red-led');
  expect(closedStatus).not.toHaveClass('green-led');

  rerender (<Display closed={false} />);
  closedStatus = getByText('Open');
  expect(closedStatus).toHaveClass('green-led');
  expect(closedStatus).not.toHaveClass('red-led');
});

