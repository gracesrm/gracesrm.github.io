import React from 'react';
import { render, screen } from '@testing-library/react';
import Resources from './Resources';

test('renders the research workflow as one compact resource list', () => {
  const { container } = render(<Resources />);

  expect(screen.getByText('Resources').closest('h1')).toBeInTheDocument();
  expect(container.querySelector('.lab-subpage__header p')).not.toBeInTheDocument();
  expect(screen.getByText('Ideas → Literature → Contribution → Story → Review → Validation → Evaluation → Revision')).toBeInTheDocument();
  expect(container.querySelectorAll('.resource-group > h2')).toHaveLength(0);
  expect(container.querySelectorAll('.resource-list')).toHaveLength(1);

  const items = Array.from(container.querySelectorAll('.resource-item'));
  expect(items).toHaveLength(10);
  items.forEach((item) => {
    expect(item.tagName).toBe('LI');
    expect(Array.from(item.children).map(({ tagName }) => tagName)).toEqual(['SPAN', 'A']);
  });
  expect(container.querySelectorAll('.resource-card')).toHaveLength(0);
  expect(container.querySelectorAll('.resource-item p')).toHaveLength(0);
  expect(Array.from(container.querySelectorAll('.resource-item__heading strong')).map(({ textContent }) => textContent)).toEqual([
    'Find research ideas',
    'Read papers efficiently',
    'Choose an important contribution',
    "Build the paper's story",
    'Think like a reviewer',
    'Validate security claims',
    'Validate experiments',
    'Write technical arguments clearly',
    'Improve the draft',
    'Catch common writing mistakes',
  ]);
  expect(container.querySelectorAll('.resource-item__icon')).toHaveLength(10);

  expect(screen.getByText('How to Look for Ideas in Computer Science Research').closest('a')).toHaveAttribute(
    'href',
    'https://zhiyunq.medium.com/how-to-look-for-ideas-in-computer-science-research-7a3fa6f4696f',
  );
  expect(screen.getByText('Tips about Writing Systems Papers').closest('a')).toBeInTheDocument();
  expect(screen.getByText('Benchmarking Crimes in Systems Security').closest('a')).toBeInTheDocument();
  expect(screen.getByText('Common Bugs in Writing').closest('a')).toBeInTheDocument();
  expect(screen.queryByText('Read')).not.toBeInTheDocument();
});
