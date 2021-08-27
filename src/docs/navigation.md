---
title: "Navigation"
---

Documentation sites need full control of their navigation and menus. 

11ty provides a way to do this, using the [11ty navigation plugin](https://www.11ty.dev/docs/plugins/navigation/). It's full-featured, supporting breadcrumbs, nesting, and highlighting active menu items. 

Its downside (for me) is that you control your navigation from within each content file. In other words, in the frontmatter of every content file, you have to add a `key` (the name of the menu item), a `parent` if it's nested, and a numerical value for `order`, which determines the order of the pages on the menu. I find this gets confusing fast. When adding a new page, you have to check the output, then work out what number in the order the new page will be and what its parent will be. If you decide to change the order, you have to edit several files. I like having one file that defines the whole menu.

> **If you use the 11ty Navigation plugin:** use large numbers for the order. For example, use `100` for the first page, `200` for the second and so on. This will allow you to add new pages in future without editing the whole menu.

I have set up an alternative using a data file (`_data/navigation.js`) which sets out the menu structure and details, and a Nunjucks template that consumes it to create a menu. It supports:
- Infinite nesting (you can have as many navigation levels as you want).
- Highlighting active menu items.
- Custom titles: you can set a title in `navigation.js`, for use in the menu. If you leave this blank, the menu uses the title from the article's frontmatter.