import { news } from './news';
import { people } from './people';
import { publications } from './publications';
import { researchDirections } from './researchDirections';
import { validateContent } from './validateContent';

const validContent = {
  news: [
    {
      id: '2024-02-example',
      date: '2024-02-29',
      expiresOn: '2024-03-01',
      peopleIds: ['person'],
      publicationIds: ['publication'],
      subdirectionIds: ['subdirection'],
    },
  ],
  people: [
    {
      id: 'person',
      roles: [{ startDate: '2024-01', endDate: null }],
      contributions: [
        {
          id: 'contribution',
          date: '2024-02',
          publicationIds: ['publication'],
        },
      ],
      subdirectionIds: ['subdirection'],
    },
  ],
  publications: [
    {
      id: 'publication',
      authors: [{ name: 'Person', personId: 'person' }],
      subdirectionIds: ['subdirection'],
    },
  ],
  researchDirections: [
    {
      id: 'direction',
      subdirections: [{ id: 'subdirection' }],
    },
  ],
};

test('the site content catalogs are valid', () => {
  expect(validateContent({ news, people, publications, researchDirections })).toEqual([]);
});

test('reports duplicate IDs', () => {
  const content = {
    ...validContent,
    news: [...validContent.news, { ...validContent.news[0] }],
  };

  expect(validateContent(content)).toEqual(
    expect.arrayContaining([expect.stringContaining('Duplicate news id "2024-02-example"')]),
  );
});

test('reports invalid dates and reversed role ranges', () => {
  const content = {
    ...validContent,
    news: [{ ...validContent.news[0], date: '2023-02-29' }],
    people: [
      {
        ...validContent.people[0],
        roles: [
          { startDate: '2024-13', endDate: null },
          { startDate: '2024-02', endDate: '2024-01' },
        ],
      },
    ],
  };

  expect(validateContent(content)).toEqual(
    expect.arrayContaining([
      expect.stringContaining('news[0].date must be a valid YYYY-MM-DD date'),
      expect.stringContaining('people[0].roles[0].startDate must be a valid YYYY-MM date'),
      expect.stringContaining('people[0].roles[1].endDate (2024-01) must not precede startDate (2024-02)'),
    ]),
  );
});

test('reports news that is not in descending date order', () => {
  const content = {
    ...validContent,
    news: [
      validContent.news[0],
      { ...validContent.news[0], id: '2024-03-example', date: '2024-03-01' },
    ],
  };

  expect(validateContent(content)).toEqual(
    expect.arrayContaining([expect.stringContaining('[news-order]')]),
  );
});

test('reports broken cross-references', () => {
  const content = {
    ...validContent,
    publications: [
      {
        ...validContent.publications[0],
        authors: [{ name: 'Missing', personId: 'missing-person' }],
      },
    ],
  };

  expect(validateContent(content)).toEqual(
    expect.arrayContaining([
      expect.stringContaining('authors[0].personId references unknown person id "missing-person"'),
    ]),
  );
});

test('reports broken research-card publication references', () => {
  const content = {
    ...validContent,
    researchDirections: [
      {
        ...validContent.researchDirections[0],
        subdirections: [{ id: 'subdirection', publicationIds: ['missing-publication'] }],
      },
    ],
  };

  expect(validateContent(content)).toEqual(
    expect.arrayContaining([
      expect.stringContaining('publicationIds[0] references unknown publication id "missing-publication"'),
    ]),
  );
});
