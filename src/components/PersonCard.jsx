import React from 'react';
import './contentComponents.css';

const getInitials = (name) => name
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join('')
  .toUpperCase();

const Role = ({ role }) => (
  <div className="person-card__role">
    <span>{role.title}</span>
    {role.periodLabel && <span> ({role.periodLabel})</span>}
    {role.institution && <span>, {role.institution}</span>}
    {role.coAdvisedWith && <span> (Co-advised with {role.coAdvisedWith})</span>}
  </div>
);

const Contribution = ({ contribution }) => {
  const [primaryLink, ...otherLinks] = contribution.links || [];

  return (
    <li className="person-card__contribution">
      <span className={`content-label content-label--${contribution.type}`}>
        {contribution.type}
      </span>
      <span>
        {primaryLink ? (
          <a href={primaryLink.url}>{contribution.title}</a>
        ) : contribution.title}
      </span>
      {contribution.date && <time dateTime={contribution.date}> ({contribution.date})</time>}
      {contribution.description && <div>{contribution.description}</div>}
      {otherLinks.map((link) => (
        <a className="content-link" href={link.url} key={`${contribution.id}-${link.label}`}>
          {link.label}
        </a>
      ))}
    </li>
  );
};

const PersonCard = ({ person, compact = false, showContributions = true }) => {
  if (!person) return null;

  const homepageLink = (person.links || []).find(({ label, type }) => (
    type === 'homepage' || label.toLowerCase() === 'homepage'
  ));
  const className = compact ? 'content-card person-card person-card--compact' : 'content-card person-card';

  return (
    <article className={`${className}${homepageLink ? ' person-card--linked' : ''}`}>
      {homepageLink && (
        <a
          className="person-card__overlay-link"
          href={homepageLink.url}
          aria-label={`Visit ${person.name}'s homepage`}
        >
          <span className="sr-only">Visit {person.name}'s homepage</span>
        </a>
      )}
      <div className="person-card__identity">
        {person.photo ? (
          <img className="person-card__photo" src={person.photo} alt={`Portrait of ${person.name}`} />
        ) : (
          <div className="person-card__photo person-card__photo--placeholder" aria-hidden="true">
            {getInitials(person.name)}
          </div>
        )}
        <div>
          <h3 className="content-card__title">{person.name}</h3>
          {(person.roles || []).slice(0, 1).map((role, index) => (
            <Role role={role} key={`${person.id}-${role.title}-${role.startDate}-${index}`} />
          ))}
        </div>
      </div>

      {person.highlight && <p className="person-card__highlight">{person.highlight}</p>}

      {showContributions && person.contributions && person.contributions.length > 0 && (
        <section className="person-card__contributions" aria-label={`${person.name} highlights`}>
          <h4>Highlights</h4>
          <ul>
            {person.contributions.slice(0, 2).map((contribution) => (
              <Contribution contribution={contribution} key={contribution.id} />
            ))}
          </ul>
        </section>
      )}

      {person.links && person.links.length > 0 && (
        <nav className="content-links" aria-label={`${person.name} links`}>
          {person.links.map((link) => (
            <a href={link.url} key={`${person.id}-${link.label}`}>
              {link.label || 'Homepage'}
            </a>
          ))}
        </nav>
      )}
    </article>
  );
};

export default PersonCard;
