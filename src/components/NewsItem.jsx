import React from 'react';
import './contentComponents.css';

const typeLabels = {
  paper: 'Paper',
  award: 'Award',
  people: 'People',
  grant: 'Grant',
  release: 'Release',
  talk: 'Talk',
  service: 'Service',
  event: 'Event',
  other: 'News',
};

const renderLinkedTitle = (item) => {
  const availableLinks = (item.links || [])
    .map((link) => ({ ...link, start: item.title.indexOf(link.label) }))
    .filter(({ start }) => start >= 0)
    .sort((first, second) => first.start - second.start);
  const content = [];
  let cursor = 0;

  availableLinks.forEach((link) => {
    if (link.start < cursor) return;
    if (link.start > cursor) content.push(item.title.slice(cursor, link.start));
    content.push(<a href={link.url} key={`${item.id}-${link.label}-${link.start}`}>{link.label}</a>);
    cursor = link.start + link.label.length;
  });
  if (cursor < item.title.length) content.push(item.title.slice(cursor));
  return content;
};

const NewsItem = ({ item, compact = false, showType = true }) => {
  if (!item) return null;

  const compactDate = item.date.length === 4 ? item.date : item.date.slice(0, 7).replace('-', '.');
  const embeddedLinkLabels = new Set(
    (item.links || []).filter(({ label }) => item.title.includes(label)).map(({ label }) => label),
  );
  const additionalLinks = (item.links || []).filter(({ label }) => !embeddedLinkLabels.has(label));
  const className = compact ? 'news-item news-item--compact' : 'news-item';

  return (
    <article className={className}>
      <div className="news-item__metadata">
        <time dateTime={item.date}>{compactDate}</time>
        {showType && (
          <span className={`content-label content-label--${item.type}`}>
            {typeLabels[item.type] || typeLabels.other}
          </span>
        )}
      </div>
      <div className="news-item__body">
        <span>{renderLinkedTitle(item)}</span>
        {!compact && item.summary && <p>{item.summary}</p>}
        {additionalLinks.length > 0 && (
          <span className="content-links news-item__links">
            {additionalLinks.map((link) => (
              <a href={link.url} key={`${item.id}-${link.label}`}>[{link.label}]</a>
            ))}
          </span>
        )}
      </div>
    </article>
  );
};

export default NewsItem;
