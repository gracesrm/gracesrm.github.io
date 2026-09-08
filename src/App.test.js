import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the personal homepage and lab navigation', () => {
  const { container } = render(<App />);

  expect(container.querySelector('h1')).toHaveTextContent('Ruimin Sun');
  expect(screen.getByText('RiS3 Lab').closest('a')).toHaveAttribute('href', '/lab');
  expect(screen.getByLabelText('LinkedIn profile')).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/ruimin-sun-99b42674/',
  );
  expect(screen.getByLabelText('X profile')).toHaveAttribute('href', 'https://x.com/gracesrm');
  expect(screen.getByLabelText('GitHub profile')).toHaveAttribute('href', 'https://github.com/sys-ris3');
});
