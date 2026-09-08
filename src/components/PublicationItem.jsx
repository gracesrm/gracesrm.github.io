import React from 'react';
import './contentComponents.css';

const renderAuthors = (publication) => {
  const text = publication.authorsText || publication.authors.map(({ name }) => name).join(', ');
  const highlightedAuthors = publication.authors
    .filter(({ personId, name }) => personId && text.includes(name))
    .map(({ name }) => ({ name, start: text.indexOf(name) }))
    .sort((first, second) => first.start - second.start);

  if (highlightedAuthors.length === 0) return text;

  const content = [];
  let cursor = 0;
  highlightedAuthors.forEach(({ name, start }) => {
    if (start < cursor) return;
    if (start > cursor) content.push(text.slice(cursor, start));
    content.push(<strong key={`${publication.id}-${name}-${start}`}>{name}</strong>);
    cursor = start + name.length;
  });
  if (cursor < text.length) content.push(text.slice(cursor));
  return content;
};

const PublicationItem = ({ publication, compact = false }) => {
  if (!publication) return null;

  const className = compact
    ? 'publication-item publication-item--compact'
    : 'publication-item';

  return (
    <article className={className} id={publication.id}>
      <h3 className="publication-item__title">
        {publication.title}
        {publication.awards && publication.awards.map((award) => (
          <React.Fragment key={award.title}>
            {' '}
            {award.url ? (
              <a className="publication-item__award" href={award.url}>{award.title}</a>
            ) : (
              <span className="publication-item__award">{award.title}</span>
            )}
          </React.Fragment>
        ))}
      </h3>
      <div className="publication-item__authors">{renderAuthors(publication)}</div>
      <div className="publication-item__venue">
        <em>{publication.venue}</em>
        {publication.links && publication.links.map((link) => (
          <React.Fragment key={`${publication.id}-${link.type}-${link.label}`}>
            {' '}<a href={link.url}>[{link.label}]</a>
          </React.Fragment>
        ))}
      </div>
    </article>
  );
};

export default PublicationItem;
