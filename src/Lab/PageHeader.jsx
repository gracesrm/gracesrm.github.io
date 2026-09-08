import React from 'react';

const PageHeader = ({ title, description }) => (
  <header className="lab-subpage__header">
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </header>
);

export default PageHeader;
