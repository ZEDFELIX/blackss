# Blacks

A small static social-feed demo — a dark-themed landing page with a sample feed, trending topics, and a "who to follow" sidebar.

## How to open

Double-click `index.html` in a browser, or serve the folder locally:

```console
python -m http.server 8000
```

Then visit http://localhost:8000.

## Notes

- Feed posts and sidebar content are static sample data.
- `script.js` includes helpers for a "stories" feature (`submitStory` / `copyLink`); the target elements (`#storyInput`, `#storiesContainer`) are not yet present in the page.