import React from 'react';
import { render, screen } from '@testing-library/react';
import PublicationItem from './PublicationItem';

const publication = {
  id: 'example-paper-2026',
  title: 'Example Paper',
  authors: [{ name: 'Grace Hopper' }],
  authorsText: 'Grace Hopper',
  venue: 'Example Conference, 2026.',
  summary: 'This description should not be shown.',
  links: [
    { type: 'pdf', label: 'PDF', url: '/paper.pdf' },
    { type: 'code', label: 'Code', url: 'https://github.com/example/project' },
  ],
  awards: [
    { title: 'Best Paper Award', url: '/award' },
  ],
};

test('renders publication resources after the venue without the summary', () => {
  const { container } = render(<PublicationItem publication={publication} />);
  const venue = container.querySelector('.publication-item__venue');

  expect(venue).toHaveTextContent('Example Conference, 2026. [PDF] [Code]');
  expect(screen.getByText('[PDF]').closest('.publication-item__venue')).toBe(venue);
  expect(screen.getByText('[Code]').closest('.publication-item__venue')).toBe(venue);
  expect(screen.getByText('Best Paper Award').closest('h3')).toHaveTextContent('Example Paper Best Paper Award');
  expect(screen.getByText('Best Paper Award').closest('a')).toHaveClass('publication-item__award');
  expect(container.querySelector('.publication-item__awards')).not.toBeInTheDocument();
  expect(screen.queryByText(publication.summary)).not.toBeInTheDocument();
});
