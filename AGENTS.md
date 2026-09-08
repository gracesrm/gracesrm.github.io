# Repository Instructions for Content Updates

These instructions apply to the entire repository. Read `CONTENT_GUIDE.md` before changing website content.

## Core contract

- Make the smallest change that satisfies the content request. Preserve unrelated user changes and the existing design unless a redesign is explicitly requested.
- Do not invent dates, titles, authors, venues, award amounts, roles, URLs, or completion status. Use user-provided facts or authoritative primary sources.
- Treat the cadence below as a review target, not permission to make unsolicited content changes.
- Keep structured content in its existing source-of-truth file. Do not duplicate publication, news, person, or research-direction data inside presentation components.
- Maintain stable kebab-case IDs and all internal cross-references.
- Use `YYYY-MM-DD` for News and `YYYY-MM` for role dates. Keep News newest first.
- Spell out public-facing grant roles: Principal Investigator, Co-Principal Investigator, and Senior Personnel.

## Maintenance cadence

- Personal page Service: review and update every two months.
- RiS3 Lab Research cards: add new papers whenever possible and review approximately monthly.
- RiS3 Lab News: add verified updates whenever possible and review approximately monthly.
- Publications, Team, Sponsors, Awards, Resources, profile, research focus, and teaching: update when new verified information is supplied.

## Source-of-truth rules

- Personal Service: `src/Service/index.jsx`.
- People and team roles: `src/content/people.js`.
- Publications: `src/content/publications.js`.
- News and lab-member awards: `src/content/news.js`.
- Research directions and subdirections: `src/content/researchDirections.js`.
- Sponsor logos and projects: `src/Lab/Sponsor.jsx`.
- Resources: `src/Lab/Resources.jsx`.
- Site and institution labels: `src/content/site.js`.

Research cards use curated `publicationIds` in each research subdirection to reference publication records in display order; `subdirectionIds` maintain the broader taxonomy. Awards are derived from award-type News records. Do not hard-code these derived items into their rendering components.

## Page-specific presentation rules

- Publications: do not render the one-line paper summary. Render resource links such as `[PDF]`, `[Code]`, and `[Slides]` inline after the venue.
- Sponsors: sort projects by `startDate`, newest first. Keep the role emphasized, funding agency normal weight, and project title bold. Preserve the requested logo order and accessible alt text.
- News: keep dates descending and preserve typed references to people, publications, and research subdirections.
- Team: preserve role history; use `endDate: null` only for a current role.
- Resources: group entries by topic and render each as one compact line containing only the title and action link.
- Service: place items in the correct category and keep recent items first within that category.

## Future prompt handling

Accept natural-language update prompts. Extract, when applicable: target section, action, effective date, title, people and roles, venue or funder, amount and period, related research direction, links or sources, exact required wording, and ordering or styling constraints.

Ask a focused question only when a missing fact would materially change the content. Otherwise proceed with the narrowest reasonable interpretation. Do not broaden a content edit into a redesign or repository-wide cleanup.

## Required verification

After a structured-content change:

1. Run `npm run validate-content`.
2. Run focused tests for the changed component.
3. Run `CI=true npm test -- --runInBand` for changes shared across pages.
4. Run `npm run build` before final handoff.
5. Run `git diff --check` and verify that unrelated files were not modified.

In the final response, summarize the visible result, list verification performed, and mention assumptions or intentionally preserved user-supplied wording.
