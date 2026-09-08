import React from 'react';
import { render, screen } from '@testing-library/react';
import Sponsor from './Sponsor';

test('lists sponsored projects newest first with expanded investigator roles', () => {
  const { container } = render(<Sponsor />);
  const projects = container.querySelectorAll('.sponsored-project-list li');

  expect(container.querySelector('main')).toHaveClass('sponsor-page');
  const sponsorLogos = container.querySelectorAll('.sponsor-logo');
  const illinoisLogo = screen.getByAltText('University of Illinois Urbana-Champaign logo');

  expect(sponsorLogos[2]).toBe(illinoisLogo);
  expect(illinoisLogo).toHaveClass('sponsor-logo--illinois');
  expect(illinoisLogo).toHaveAttribute(
    'src',
    'https://cdn.brand.illinois.edu/logos/block-i.svg',
  );
  expect(projects).toHaveLength(5);
  expect(projects[0]).toHaveTextContent('October 2026 - September 2029');
  expect(projects[1]).toHaveTextContent('August 2024 - July 2027');
  expect(projects[2]).toHaveTextContent('July 2023 - 2024');
  expect(projects[3]).toHaveTextContent('July 2023 - July 2028');
  expect(projects[4]).toHaveTextContent('March 2023 - February 2027');
  expect(screen.getAllByText(/Senior Personnel/)).toHaveLength(2);
  expect(screen.getAllByText(/Principal Investigator/).length).toBeGreaterThan(0);
  expect(projects[0].children).toHaveLength(2);
  expect(projects[0].children[0]).toHaveTextContent(
    'Senior Personnel. NSF REU SITE: ASSET. “ASSET: Advanced Secured Sensor Enabling Technologies”.',
  );
  expect(projects[0].children[1]).toHaveTextContent(
    '($465K) (October 2026 - September 2029). Principal Investigator: Niki Pissinou.',
  );
  expect(projects[0].querySelector('.sponsored-project__role')).toHaveTextContent('Senior Personnel.');
  expect(projects[0].querySelector('.sponsored-project__source')).toHaveTextContent('NSF REU SITE: ASSET.');
  expect(projects[0].querySelector('.sponsored-project__title')).toHaveTextContent(
    '“ASSET: Advanced Secured Sensor Enabling Technologies”.',
  );
});
