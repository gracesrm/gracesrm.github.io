import React from 'react';
import { render, screen } from '@testing-library/react';
import { publications } from '../content/publications';
import { researchDirections } from '../content/researchDirections';
import ResearchDirectionCard from './ResearchDirectionCard';

test('renders the curated research groups without priority labels and preserves paper order', () => {
  const { container } = render(
    <>
      {[...researchDirections]
        .filter((direction) => !direction.hidden)
        .sort((first, second) => first.displayOrder - second.displayOrder)
        .map((direction) => (
          <ResearchDirectionCard direction={direction} publications={publications} key={direction.id} />
        ))}
    </>,
  );

  expect(Array.from(container.querySelectorAll('.research-direction-card__header h3')).map(({ textContent }) => textContent)).toEqual([
    'On-Device AI Security',
    'Cyber-Physical & Domain-Specific Security',
    'System and Embedded Security',
  ]);
  expect(screen.queryByText('Earlier Work: Adaptive Defense & System Resilience')).not.toBeInTheDocument();
  expect(screen.queryByText('Featured')).not.toBeInTheDocument();

  const industrialControl = screen.getByText('Industrial Control & PLC Security').closest('li');
  expect(Array.from(industrialControl.querySelectorAll('.research-publication__title')).map(({ textContent }) => textContent)).toEqual([
    'SoK: Attacks on Industrial Control Logic',
    'Virtual PLC Honeypot',
    'Adaptive Contrastive Learning',
    'Model Poisoning in ICS',
    'MQTT Fuzzing Survey',
  ]);
  expect(industrialControl).toHaveTextContent('(EuroS&P ’21)');
  expect(industrialControl).toHaveTextContent('(RICSS ’25)');

  const informationFlow = screen.getByText('Information Flow').closest('li');
  expect(informationFlow).toHaveTextContent('Information Flow: MITOS, DDIFT (DISS ’19)');
  expect(Array.from(container.querySelectorAll('.research-publication__title')).every(({ tagName }) => tagName === 'SPAN')).toBe(true);
  expect(screen.queryByText('Manufacturing Security')).not.toBeInTheDocument();
});
