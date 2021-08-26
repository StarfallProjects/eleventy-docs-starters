---
title: "Content reuse"
keywords: []
---

Content reuse allows you to use the same content in multiple places, but maintain it in just one file.

## Quickstart


```js
// `your-docs-page.md`
This is some content.
{% raw %}
// Provide the relative path to the file you want to include
{% include "../snippets/my-reusable-content.md" %}
{% endraw %}
This is some more content.
```

Eleventy processes the include, meaning you can use Markdown, HTML, and other templating languages, inside the snippet. The above example outputs:


This is some content

{% include "../snippets/my-reusable-content.md" %} 

This is some more content.


## Explanation

[Nunjucks' `include` tag](https://mozilla.github.io/nunjucks/templating.html#include) allows us to pull other files into our content. For example, the above example looks for a file named `my-reusable-content.md` in a `snippets` directory.

We're taking advantage of one of Eleventy's unique features: all files are templates. If you've used other static site generators, this can be a strange concept. You may be used to having your content files (in Markdown, AsciiDoc or rST) and then your layout files (using a templating language), and can't mix the two. Because 11ty treats all files as templates, you can use a templating language directly in your Markdown files.