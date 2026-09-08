import React from 'react';
import './contentComponents.css';

const ResearchDirectionCard = ({ direction, publications = [], publicationLimit = 2 }) => {
  if (!direction) return null;

  const publicationsFor = (subdirectionId) => publications
    .filter(({ subdirectionIds = [] }) => subdirectionIds.includes(subdirectionId))
    .sort((first, second) => second.year - first.year)
    .slice(0, publicationLimit);

  const compactVenue = ({ venueShort, year }) => (
    `${venueShort.replace(/^IEEE /, '')}'${String(year).slice(-2)}`
  );

  return (
    <article className="content-card research-direction-card" id={direction.id}>
      <header className="research-direction-card__header">
        <h3 className="content-card__title">{direction.title}</h3>
      </header>

      <ul className="research-direction-card__subdirections">
        {direction.subdirections.map((subdirection) => {
          const relatedPublications = publicationsFor(subdirection.id);

          return (
            <li className="research-subdirection" id={subdirection.id} key={subdirection.id}>
              <strong className="research-subdirection__title">{subdirection.title}</strong>
              {relatedPublications.length > 0 && (
                <span className="research-subdirection__publications">
                  :{' '}
                  {relatedPublications.map((publication, index) => {
                    const primaryLink = publication.links && publication.links[0];
                    const paper = (
                      <>
                        {publication.shortTitle || publication.title}{' '}
                        <span className="research-publication__meta">({compactVenue(publication)})</span>
                      </>
                    );

                    return (
                      <React.Fragment key={`${subdirection.id}-${publication.id}`}>
                        {index > 0 && ', '}
                        {primaryLink ? <a href={primaryLink.url}>{paper}</a> : paper}
                      </React.Fragment>
                    );
                  })}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default ResearchDirectionCard;
