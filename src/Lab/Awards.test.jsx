import React from 'react';
import { render } from '@testing-library/react';
import Awards from './Awards';

test('shows student and faculty awards in newest-first order', () => {
  const { container } = render(<Awards />);
  const awardEntries = Array.from(container.querySelectorAll('.news-item'));

  expect(awardEntries.slice(0, 6).map(({ textContent }) => textContent)).toEqual([
    '(Aug. 2026) Samin Y Chowdhury won the Travel Grant to attend USENIX Symposium on Vehicle Security and Privacy (VehicleSec 26).',
    '(July. 2026) Mohammed Al Duniawi won the Provost Degree Completion Tuition Fellowship.',
    '(Nov. 2025) Ruimin Sun was awarded with CCS Young Scholar by the ACM CCS 2025.',
    '(April 2025) Lousindy Mitton won the DoD CSA Fellowship.',
    '(Dec. 2024) Tushar Nayan won first place and Best Poster Award at the 2024 Warren B. Nelms IoT Conference.',
    '(Aug. 2024) Tushar Nayan won the Travel Grant to present his work at USENIX Security.',
  ]);
});
