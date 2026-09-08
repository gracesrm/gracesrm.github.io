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
      <h3 className="publication-item__title">{publication.title}</h3>
      <div className="publication-item__authors">{renderAuthors(publication)}</div>
      <div className="publication-item__venue"><em>{publication.venue}</em></div>

      {!compact && publication.summary && <p>{publication.summary}</p>}

      {publication.awards && publication.awards.length > 0 && (
        <div className="publication-item__awards">
          {publication.awards.map((award) => (
            award.url ? (
              <a className="content-label content-label--award" href={award.url} key={award.title}>
                {award.title}
              </a>
            ) : (
              <span className="content-label content-label--award" key={award.title}>{award.title}</span>
            )
          ))}
        </div>
      )}

      {publication.links && publication.links.length > 0 && (
        <nav className="content-links" aria-label={`${publication.title} resources`}>
          {publication.links.map((link) => (
            <a href={link.url} key={`${publication.id}-${link.type}-${link.label}`}>[{link.label}]</a>
          ))}
        </nav>
      )}
    </article>
  );
};

export default PublicationItem;
