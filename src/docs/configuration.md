---
title: Configure your site
---

There are two main places where you can configure your site:

* In `_data/config.js`.
* In the frontmatter of individual content files.

## The _data directory

### Theme

Set a theme:

```js
theme: <theme-name>
```

Options are:

* `blank`: this theme has no styling. It provides documentation features, with the absolute minimum markup. Use this if you want to create your own custom look and feel.
* `minimalist`: 



Do not edit `utils.js` or `layout.js`.

## Frontmatter

Frontmatter is material that appears at the top of your content files, between lines of three hyphens, like so:

```md
---
title: "Some title"
description: "A description"
---
```

All the themes allow you to set the title, description, and tags, for each article individually. They are used as follows:

| Frontmatter | Usage |
| ----------- | ----- |
| `title` | In the `<title>` tag in the page metadat and as the page's `<h1>` heading
| `description` | |
| `tags` | |
