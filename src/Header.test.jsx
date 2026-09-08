import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Header';

test('uses Resources in the Lab navigation', () => {
  render(
    <MemoryRouter initialEntries={['/lab']}>
      <Navigation />
    </MemoryRouter>,
  );

  expect(screen.getByText('Resources').closest('a')).toHaveAttribute('href', '/resources');
  expect(screen.queryByText('Talks')).not.toBeInTheDocument();
});
