import React from 'react';
import './contentComponents.css';

const ResearchDirectionCard = ({ direction, publications = [], publicationLimit = 2 }) => {
  if (!direction) return null;

  const publicationsById = new Map(publications.map((publication) => [publication.id, publication]));
  const publicationsFor = (subdirection) => {
    if (subdirection.publicationIds) {
      return subdirection.publicationIds
        .map((publicationId) => publicationsById.get(publicationId))
        .filter(Boolean);
    }

    return publications
      .filter(({ subdirectionIds = [] }) => subdirectionIds.includes(subdirection.id))
      .sort((first, second) => second.year - first.year)
      .slice(0, publicationLimit);
  };

  const compactVenue = ({ venueShort, year }) => (
    `${venueShort} ’${String(year).slice(-2)}`
  );

  return (
    <article className="content-card research-direction-card" id={direction.id}>
      <header className="research-direction-card__header">
        <h3 className="content-card__title">{direction.title}</h3>
      </header>

      <ul className="research-direction-card__subdirections">
        {direction.subdirections.filter(({ hidden }) => !hidden).map((subdirection) => {
          const relatedPublications = publicationsFor(subdirection);
          const showPublicationVenues = subdirection.showPublicationVenues
            ?? direction.showPublicationVenues
            ?? true;

          return (
            <li className="research-subdirection" id={subdirection.id} key={subdirection.id}>
              <strong className="research-subdirection__title">{subdirection.title}</strong>
              {relatedPublications.length > 0 && (
                <span className="research-subdirection__publications">
                  :{' '}
                  {relatedPublications.map((publication, index) => {
                    const primaryLink = publication.links && publication.links[0];
                    const showPublicationVenue = showPublicationVenues
                      && !subdirection.hideVenuePublicationIds?.includes(publication.id);
                    const paper = (
                      <>
                        <span className="research-publication__title">
                          {publication.shortTitle || publication.title}
                        </span>
                        {showPublicationVenue && (
                          <> <span className="research-publication__meta">({compactVenue(publication)})</span></>
                        )}
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
