# Portfolio

This repo is a static portfolio site (GitHub Pages friendly).

## Portfolio Structure

- Homepage: [index.html](index.html)
- Images: [images/](images/)
- Legacy/duplicate HTML (not used by the homepage): [js/index.html](js/index.html)

### Editing content

- Update the hero, work, projects, writing, and contact sections inside [index.html](index.html).
- Writing posts live in the hidden “Dummy Blog Post Content” section. The modal pulls HTML from those blocks.

### Adding a new case study

1. Duplicate an existing project card under the “Selected work” section.
2. Replace the title, bullets, and the bracketed placeholders (e.g. `-[X]%`) with real numbers when you have them.
3. Keep claims honest—use placeholders rather than inventing metrics.

### Adding a new writing post

1. Add a new card in the “Writing” section linking to `#blog-post-N`.
2. Add corresponding content block with id `blog-post-N-content` in the hidden content area.

