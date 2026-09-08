import React from 'react';
import { render, screen } from '@testing-library/react';
import Publication from './Publication';

test('shows the 2026 and 2025 publications before earlier years', () => {
  const { container } = render(<Publication />);

  const yearHeadings = container.querySelectorAll('.lab-subpage__section > h2');

  expect(Array.from(yearHeadings).slice(0, 3).map((heading) => heading.textContent)).toEqual([
    '2026',
    '2025',
    '2024',
  ]);
  expect(screen.getByText('WIP: SNFuzz: Gateway-Centric State-Oriented Fuzzing for MQTT-SN.')).toBeInTheDocument();
  expect(screen.getByText('Black-Box Behavioral Distillation Breaks Safety Alignment in Medical LLMs.')).toBeInTheDocument();
  expect(screen.getByText('SecureInfer: Heterogeneous TEE-GPU Architecture for Privacy-Critical Tensors for Large Language Model Deployment.')).toBeInTheDocument();
  expect(screen.getByText('PRO: Enabling Precise and Robust Text Watermark for Open-Source LLMs.')).toBeInTheDocument();
  expect(screen.getByText('A Survey for MQTT Fuzzing.')).toBeInTheDocument();
  expect(screen.queryByText("RICSS'25: 3rd International Workshop on Re-design Industrial Control Systems with Security.")).not.toBeInTheDocument();
  expect(screen.getByText('Christian de la Pena').tagName).toBe('STRONG');
  expect(screen.getByText('Van T. Phan').tagName).toBe('STRONG');
  expect(screen.getByText('Best Paper Award').closest('h3')).toHaveTextContent(
    'The Case for Virtual PLC-enabled Honeypot Design. Best Paper Award',
  );
});
