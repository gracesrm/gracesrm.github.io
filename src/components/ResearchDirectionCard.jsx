import React from 'react';
import './contentComponents.css';

const ResearchDirectionCard = ({ direction, publications = [], publicationLimit = 2 }) => {
  if (!direction) return null;

  const publicationsFor = (subdirectionId) => publications
    .filter(({ subdirectionIds = [] }) => subdirectionIds.includes(subdirectionId))
    .sort((first, second) => second.year - first.year)
    .slice(0, publicationLimit);

  return (
    <article className="content-card research-direction-card" id={direction.id}>
      <header className="research-direction-card__header">
        <h3 className="content-card__title">{direction.title}</h3>
        <p>{direction.summary}</p>
      </header>

      <div className="research-direction-card__subdirections">
        {direction.subdirections.map((subdirection) => {
          const relatedPublications = publicationsFor(subdirection.id);

          return (
            <section className="research-subdirection" id={subdirection.id} key={subdirection.id}>
              <h4>{subdirection.title}</h4>
              <p>{subdirection.summary}</p>
              {relatedPublications.length > 0 && (
                <ul className="research-subdirection__publications">
                  {relatedPublications.map((publication) => (
                    <li key={`${subdirection.id}-${publication.id}`}>
                      <strong>{publication.title}</strong>
                      <span className="research-publication__meta">
                        {publication.venueShort} · {publication.year}
                      </span>
                      {publication.summary && <span>{publication.summary}</span>}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </article>
  );
};

export default ResearchDirectionCard;
