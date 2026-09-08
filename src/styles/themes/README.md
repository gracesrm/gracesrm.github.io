# Institutional themes

The site separates layout and typography from institutional color values.

To replace the FIU scheme:

1. Copy `fiu.css` to a new theme file.
2. Keep the semantic variable names and replace only their color values.
3. Import the new file in `src/App.jsx`.
4. Change `theme` in `src/content/site.js` to match the new `data-institution` selector.

Components should use semantic variables such as `--color-heading`,
`--color-surface`, and `--color-accent`; do not add institution-specific colors
to component stylesheets.
