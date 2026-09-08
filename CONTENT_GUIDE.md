# Content Maintenance Guide

This guide defines where website content lives, how often it should be reviewed, and the information a future update prompt should provide. Update cadences are review targets; they do not authorize invented or unsourced changes.

## Review cadence

| Area | Review target | Update rule |
| --- | --- | --- |
| Personal page: Service | Every two months | Add current service and update year ranges. Remove an item only when the site owner explicitly requests removal. |
| Personal page: profile, research, and teaching | As needed | Update when a position, contact detail, research focus, or teaching assignment changes. |
| RiS3 Lab home: Research cards | Monthly, and whenever a paper is added | Add new papers whenever possible. Cards use curated `publicationIds` to display publication records in the requested order; do not hard-code papers into components. |
| RiS3 Lab home: News | Approximately monthly, and whenever news is available | Add verified news whenever possible. Keep the news array in newest-first order. |
| Team | When membership or roles change | Preserve role history and use ISO dates. |
| Publications | When a paper is accepted, published, or materially updated | Add or update the publication record and its links. |
| Sponsors | When an award starts, changes, or ends | Keep projects ordered by start date, newest first, and use full role names. |
| Awards and Resources | When a new item is available | Awards are derived from News; add Resources only when verified content is supplied. |

## Content map

| Website area | Source of truth | Notes |
| --- | --- | --- |
| Personal profile | `src/Home/Intro.jsx`, `src/content/site.js`, faculty record in `src/content/people.js` | Keep institutional names centralized in `site.js` when possible. |
| Personal research | `src/content/researchDirections.js` | Shared with the RiS3 Lab home page. |
| Personal teaching | `src/Teaching/index.jsx` | Update semester and course details together. |
| Personal service | `src/Service/index.jsx` | Group by Chair/Co-Chair, Guest Editor, Panelist, Program Committee, and Reviewer. |
| RiS3 Lab research cards | `src/content/researchDirections.js`, `src/content/publications.js` | Each subdirection lists curated publication IDs in display order. |
| RiS3 Lab news | `src/content/news.js` | The Lab home page initially shows the first six records. |
| Team | `src/content/people.js` | Current members and alumni are sorted from role dates. |
| Publications | `src/content/publications.js` | The page groups records by year. Resource links render inline after the venue; paper summaries are not rendered. |
| Sponsors | `src/Lab/Sponsor.jsx` | Sponsor logos and project records are maintained here. |
| Awards | Award records in `src/content/news.js` | The Awards page selects lab-member awards from News. |
| Resources | `src/Lab/Resources.jsx` | Group entries by topic and render each as one compact line containing only the title and action link. |

## General update rules

1. Treat user-supplied facts and linked primary sources as authoritative. Do not infer award amounts, dates, authors, roles, venues, or completion status.
2. Preserve the current component structure and visual conventions unless the request explicitly asks for a design change.
3. Use stable kebab-case IDs. Never reuse or silently rename an existing ID because other records may reference it.
4. Use `YYYY-MM-DD` for News dates and `YYYY-MM` for person role dates. Contribution dates may use either format.
5. Keep News in descending date order. Items with the same date may remain in the order supplied by the site owner.
6. Use full role names in public copy: `Principal Investigator`, `Co-Principal Investigator`, and `Senior Personnel` rather than PI, Co-PI, or SP.
7. Use official organization names and accessible logo alt text. Prefer an official, maintained asset URL for external logos.
8. Preserve unrelated working-tree changes. Do not rewrite content outside the requested area.
9. Run `npm run validate-content` after structured-content changes. Run the relevant tests and `npm run build` before handing off a completed update.

## Structured content rules

### Publications

A publication record needs:

- A unique stable `id`
- Full `title`
- Structured `authors` and the display-preserving `authorsText`
- Full `venue`, compact `venueShort`, numeric `year`, `type`, and `status`
- At least one applicable `subdirectionId` when the work belongs on a Research card
- Resource links such as PDF, Code, Slides, DOI, Video, or Project
- Optional awards and featured status

The publication page displays the title, authors, venue, inline resource links, and awards. It does not display the one-line `summary`. A paper appears on a RiS3 Lab Research card when its ID is included in the subdirection's curated `publicationIds`; keep the publication's `subdirectionIds` aligned with the broader research taxonomy.

### News

A news record needs:

- A unique ID beginning with `YYYY-MM`
- A real `YYYY-MM-DD` date and a human-readable `dateLabel`
- A valid type, title, and any supporting links; use `emphasisLabels` for exact title substrings that should appear in italics
- Existing `peopleIds`, `publicationIds`, and `subdirectionIds`
- Optional `expiresOn` for time-sensitive announcements

Insert new records at the correct descending-date position. Link a publication announcement to its publication record rather than repeating disconnected data.

### People and team roles

A person needs a unique ID, name, status, role history, research subdirections, contributions, and display order where applicable. Role dates use `YYYY-MM`; `endDate: null` means current. When a person changes roles, retain the previous role and date range unless the site owner requests otherwise.

### Service

Place each service item in the correct section and keep the newest entries first within that section. Use full venue or organization names on first reference and preserve useful external links. During the two-month review, check current-year program committees, chair roles, panel service, guest editorships, and reviewer ranges.

### Sponsors

Each project needs:

- Sortable `startDate` in `YYYY-MM`
- The site owner's role, written in full
- Funding agency and program
- Exact project title
- Award amount and project period
- Completion status when applicable
- Principal and co-principal investigator details
- An authoritative award URL when available

Render projects newest first. Keep the project title bold, the funding agency at normal weight, and the role emphasized. Display sponsor logos in the requested order with accessible alt text.

## Future prompt contract

A future content prompt should identify the page or content type and provide the facts that changed. Natural-language prompts are acceptable; use the following fields when available:

```text
Target page or section:
Effective or announcement date:
Action: add | update | remove
Title or item:
People and roles:
Venue, agency, or program:
Amount and project period, if applicable:
Related research direction:
Links or primary source:
Exact wording that must be preserved:
Special ordering or styling request:
```

If a required fact is missing and guessing could change the meaning, the maintainer should ask one focused question. Otherwise, make the smallest reasonable update, preserve established formatting, and report any harmless normalization such as correcting an obvious month-name typo.

### Prompt examples

```text
Update the personal page Service section as of 2026-11-01.
Add Program Committee: Example Security Conference, 2027.
Source: https://example.org/committee
Keep entries newest first.
```

```text
Add this accepted paper to Publications and RiS3 Lab News.
Date: 2026-10-15
Title: Example Paper
Authors: ...
Venue: Example Security Conference 2027
Research subdirection: secure-ai-inference
PDF: ...
Code: ...
```

```text
Update the Sponsor page with this project.
Role: Principal Investigator
Agency/program: ...
Title: ...
Amount: ...
Period: ...
Other investigators: ...
Award URL: ...
```

## Verification checklist

- `npm run validate-content`
- Relevant focused component tests
- `CI=true npm test -- --runInBand` for cross-page changes
- `npm run build`
- Confirm `git diff --check` reports no whitespace errors
- Confirm no unrelated files were changed
