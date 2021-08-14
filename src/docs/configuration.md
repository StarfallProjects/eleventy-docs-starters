---
title: Configure your site
---

There are two main places where you can configure your site:

* In the `_data` directory.
* In the frontmatter of individual content files.

## The _data directory

### layout.js

```js
module.exports = "layouts/<theme-name>.njk"
```

Options:

* base: Use the base template with no styling.
* plain:

This file controls just one configuration option: your theme choice. Due to how Eleventy looks for layout files, this has to be in its own configuration file (rather than the general `config.js`). Refer to [this GitHub issue](https://github.com/11ty/eleventy/issues/380#issuecomment-568033456) for a detailed explanation.


Do not edit `utils.js`.

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
