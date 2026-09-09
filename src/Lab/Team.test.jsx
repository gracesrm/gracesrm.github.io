import React from 'react';
import { render, screen } from '@testing-library/react';
import Team from './Team';

test('starts with a consistent Team page header', () => {
  const { container } = render(<Team />);

  expect(container.querySelector('.lab-subpage__header h1')).toHaveTextContent('Team');
  expect(screen.getByText('Researchers working on the security across systems, artificial intelligence, and application domains.')).toBeInTheDocument();
  expect(container.querySelector('.lab-subpage__header')).toBeInTheDocument();
  expect(screen.getByText('Faculty Director')).toBeInTheDocument();
});

test('shows current-member and alumni highlights', () => {
  render(<Team />);

  const mohammedCard = screen.getByText('Mohammed Al Duniawi').closest('.person-card');
  const saminCard = screen.getByText('Samin Yasar Chowdhury').closest('.person-card');
  const tusharCard = screen.getByText('Tushar Nayan').closest('.person-card');
  const lousindyEntry = screen.getByText('Lousindy Mitton').closest('li');

  expect(tusharCard.querySelector('img')).toHaveAttribute('alt', 'Portrait of Tushar Nayan');
  expect(mohammedCard.querySelector('img')).toHaveAttribute('alt', 'Portrait of Mohammed Al Duniawi');
  expect(screen.getByLabelText("Visit Mohammed Al Duniawi's profile")).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/mohammed-alduniawi/',
  );
  expect(screen.getByLabelText("Visit Tushar Nayan's homepage")).toHaveAttribute(
    'href',
    'https://tusharnayan.netlify.app/',
  );
  expect(mohammedCard).toHaveTextContent('Provost Degree Completion Tuition Fellowship');
  expect(saminCard).toHaveTextContent("Fall'22 - present");
  expect(lousindyEntry).toHaveTextContent("Fall'24 - Fall'25");
  expect(lousindyEntry).toHaveTextContent(
    'ADMIRE MSc. Fellowship, DoD CSA Doctoral Fellowship (7.5% selection rate).',
  );
  expect(lousindyEntry).not.toHaveTextContent('HS-POWER Intern');
});
