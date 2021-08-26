---
title: "Overriding layout blocks"
description: "Customize a theme by overriding sections of the base layout."
---


## Quickstart

1. Enable the `extra_layouts` directory by setting `enable_extra_layouts: true` in `_data/config.js`. This makes Eleventy look in `_extra_layouts` for your page layouts, instead of in the theme directory.
2. Find the appropriate layout in `_extra_layouts`. Use this file to override theme blocks.

## Understand blocks

Each theme provides a base layout, `<theme-name>/layouts/base.njk`. This file uses [Nunjucks' block tag](https://mozilla.github.io/nunjucks/templating.html#block) to demarcate its content. This means that, for example, the search controls sit within a block named "search".

To override the theme's search block, target it from the `overrides.njk` file:

```js
// extra_layouts/overrides.njk

{% block search %}

// Add your custom search GUI here

{% endblock %}
```

You probaly need to look at your theme's `layouts/base.njk` to check that your override will work correctly.