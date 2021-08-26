---
title: "Table of contents"
---

All themes include support for an in-page table of contents.

## Turn off in-page table of contents

You can turn off the table of contents for the entire theme, a section, or for individual pages.

To turn off the toc for the entire site, set `toc: false` in `_data/config.js`.

For a section, make sure there is a `<section-name>.11tydata.js` file in the section directory, then add `toc: false`. For example, if you have a blog section, and don't want a toc in your blog posts:

```js
// blog/blog.11tydata.js

module.exports = {
    toc: false
}
```

For an individual page, set `toc: false` in the YAML frontmatter.