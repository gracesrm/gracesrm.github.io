const DAY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const MONTH_PATTERN = /^(\d{4})-(\d{2})$/;

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function isValidMonth(year, month) {
  return year > 0 && month >= 1 && month <= 12;
}

function isValidDay(value) {
  const match = DAY_PATTERN.exec(value);

  if (!match) {
    return false;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const daysByMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return isValidMonth(year, month) && day >= 1 && day <= daysByMonth[month - 1];
}

function isValidYearMonth(value) {
  const match = MONTH_PATTERN.exec(value);

  return Boolean(match) && isValidMonth(Number(match[1]), Number(match[2]));
}

function addDuplicateErrors(entries, namespace, errors) {
  const firstPathById = new Map();

  entries.forEach(({ id, path }) => {
    if (firstPathById.has(id)) {
      errors.push(
        `[unique-id] Duplicate ${namespace} id "${id}" at ${path} (first declared at ${firstPathById.get(id)}).`,
      );
    } else {
      firstPathById.set(id, path);
    }
  });
}

function validateDate(value, format, path, errors) {
  const valid = format === 'YYYY-MM-DD' ? isValidDay(value) : isValidYearMonth(value);

  if (!valid) {
    errors.push(`[date] ${path} must be a valid ${format} date; received ${JSON.stringify(value)}.`);
  }

  return valid;
}

function validateReferences(ids, validIds, path, targetName, errors) {
  (ids || []).forEach((id, index) => {
    if (!validIds.has(id)) {
      errors.push(
        `[cross-reference] ${path}[${index}] references unknown ${targetName} id "${id}".`,
      );
    }
  });
}

/**
 * Validate relationships and ordering across the site's content catalogs.
 *
 * @param {Object} content
 * @param {Array} content.news
 * @param {Array} content.people
 * @param {Array} content.publications
 * @param {Array} content.researchDirections
 * @returns {string[]} Human-readable validation errors. An empty array means the content is valid.
 */
export function validateContent({ news, people, publications, researchDirections }) {
  const errors = [];
  const subdirections = researchDirections.flatMap((direction, directionIndex) =>
    direction.subdirections.map((subdirection, subdirectionIndex) => ({
      ...subdirection,
      path: `researchDirections[${directionIndex}].subdirections[${subdirectionIndex}]`,
    })),
  );
  const contributions = people.flatMap((person, personIndex) =>
    person.contributions.map((contribution, contributionIndex) => ({
      ...contribution,
      path: `people[${personIndex}].contributions[${contributionIndex}]`,
    })),
  );

  addDuplicateErrors(
    news.map((item, index) => ({ id: item.id, path: `news[${index}]` })),
    'news',
    errors,
  );
  addDuplicateErrors(
    people.map((person, index) => ({ id: person.id, path: `people[${index}]` })),
    'person',
    errors,
  );
  addDuplicateErrors(
    publications.map((publication, index) => ({ id: publication.id, path: `publications[${index}]` })),
    'publication',
    errors,
  );
  addDuplicateErrors(
    researchDirections.map((direction, index) => ({ id: direction.id, path: `researchDirections[${index}]` })),
    'research direction',
    errors,
  );
  addDuplicateErrors(subdirections, 'research subdirection', errors);
  addDuplicateErrors(contributions, 'person contribution', errors);

  const personIds = new Set(people.map((person) => person.id));
  const publicationIds = new Set(publications.map((publication) => publication.id));
  const subdirectionIds = new Set(subdirections.map((subdirection) => subdirection.id));

  subdirections.forEach((subdirection) => {
    validateReferences(
      subdirection.publicationIds,
      publicationIds,
      `${subdirection.path}.publicationIds`,
      'publication',
      errors,
    );
  });

  news.forEach((item, index) => {
    const path = `news[${index}]`;
    validateDate(item.date, 'YYYY-MM-DD', `${path}.date`, errors);

    if (item.expiresOn !== undefined) {
      validateDate(item.expiresOn, 'YYYY-MM-DD', `${path}.expiresOn`, errors);
    }

    validateReferences(item.peopleIds, personIds, `${path}.peopleIds`, 'person', errors);
    validateReferences(item.publicationIds, publicationIds, `${path}.publicationIds`, 'publication', errors);
    validateReferences(
      item.subdirectionIds,
      subdirectionIds,
      `${path}.subdirectionIds`,
      'research subdirection',
      errors,
    );

    if (index > 0 && news[index - 1].date < item.date) {
      errors.push(
        `[news-order] News must be sorted newest first: ${path}.date (${item.date}) follows news[${index - 1}].date (${news[index - 1].date}).`,
      );
    }
  });

  people.forEach((person, personIndex) => {
    const path = `people[${personIndex}]`;
    validateReferences(person.subdirectionIds, subdirectionIds, `${path}.subdirectionIds`, 'research subdirection', errors);

    person.roles.forEach((role, roleIndex) => {
      const rolePath = `${path}.roles[${roleIndex}]`;
      const validStart = validateDate(role.startDate, 'YYYY-MM', `${rolePath}.startDate`, errors);
      const validEnd = role.endDate === null
        ? true
        : validateDate(role.endDate, 'YYYY-MM', `${rolePath}.endDate`, errors);

      if (validStart && validEnd && role.endDate !== null && role.startDate > role.endDate) {
        errors.push(
          `[date] ${rolePath}.endDate (${role.endDate}) must not precede startDate (${role.startDate}).`,
        );
      }
    });

    person.contributions.forEach((contribution, contributionIndex) => {
      const contributionPath = `${path}.contributions[${contributionIndex}]`;
      const format = typeof contribution.date === 'string' && DAY_PATTERN.test(contribution.date)
        ? 'YYYY-MM-DD'
        : 'YYYY-MM';

      validateDate(contribution.date, format, `${contributionPath}.date`, errors);
      validateReferences(
        contribution.publicationIds,
        publicationIds,
        `${contributionPath}.publicationIds`,
        'publication',
        errors,
      );
    });
  });

  publications.forEach((publication, publicationIndex) => {
    const path = `publications[${publicationIndex}]`;
    validateReferences(
      publication.subdirectionIds,
      subdirectionIds,
      `${path}.subdirectionIds`,
      'research subdirection',
      errors,
    );

    publication.authors.forEach((author, authorIndex) => {
      if (author.personId !== undefined && !personIds.has(author.personId)) {
        errors.push(
          `[cross-reference] ${path}.authors[${authorIndex}].personId references unknown person id "${author.personId}".`,
        );
      }
    });
  });

  return errors;
}
