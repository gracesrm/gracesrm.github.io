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
  const formattedRanges = [
    ...(item.links || []).map((link) => ({ ...link, format: 'link' })),
    ...(item.emphasisLabels || []).map((label) => ({ label, format: 'emphasis' })),
  ]
    .map((range) => ({ ...range, start: item.title.indexOf(range.label) }))
    .filter(({ start }) => start >= 0)
    .sort((first, second) => first.start - second.start);
  const content = [];
  let cursor = 0;

  formattedRanges.forEach((range) => {
    if (range.start < cursor) return;
    if (range.start > cursor) content.push(item.title.slice(cursor, range.start));
    content.push(range.format === 'link'
      ? <a href={range.url} key={`${item.id}-${range.label}-${range.start}`}>{range.label}</a>
      : <em key={`${item.id}-${range.label}-${range.start}`}>{range.label}</em>);
    cursor = range.start + range.label.length;
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
  const dateLabel = item.dateLabel || compactDate;

  return (
    <li className={className}>
      <time className="news-item__metadata" dateTime={item.date}>({dateLabel})</time>{' '}
      <span className="news-item__body">
        {showType && (
          <span className={`content-label content-label--${item.type}`}>
            {typeLabels[item.type] || typeLabels.other}
          </span>
        )}
        <span>{renderLinkedTitle(item)}</span>
        {!compact && item.summary && <span className="news-item__summary">{item.summary}</span>}
        {additionalLinks.length > 0 && (
          <span className="content-links news-item__links">
            {additionalLinks.map((link) => (
              <a href={link.url} key={`${item.id}-${link.label}`}>[{link.label}]</a>
            ))}
          </span>
        )}
      </span>
    </li>
  );
};

export default NewsItem;
