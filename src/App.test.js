import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the personal homepage and lab navigation', () => {
  const { container } = render(<App />);

  expect(container.querySelector('h1')).toHaveTextContent('Ruimin Sun');
  expect(screen.getByText('RiS3 Lab').closest('a')).toHaveAttribute('href', '/lab');
});
