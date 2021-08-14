---
title: "Syntax highlighting"
description: "Syntax highlighting with Prism"
---

Syntax highlighting uses the [Eleventy Syntax Highlighting Plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/), which in turn relies on [Prism](https://prismjs.com/).

## Use one of Prism's main themes from CDN

Enter the Prism theme name in `config.js`. The theme loads from a CDN.

```js
prism_theme: "<theme-name>"
```

Valid names are:

* `prism` (corresponds to "Default" on Prism's demo page)
* `prism-dark`
* `prism-funky`
* `prism-okaidia`
* `prism-twilight`
* `prism-coy`
* `prism-solarizedlight`
* `prism-tomorrow` (corresponds to "Tomorrow Night" on Prism's demo page)


You can see previews of these themes on the [Prism Download](https://prismjs.com/download.html) page.

## Use a local CSS file

If you don't want to load the CSS from a CDN, you can download it. There are also many additional community-contributed themes to choose from, and this method allows you to use them.

1. Download the CSS file.
2. Place the file in `/css/prism`.
3. Add the file name to `config.js`:
    ```js
    prism_file: "<filename>"
    ```
    Do not include the extension:
    ```js
    // this is correct
    prism_file: `a11y-dark`
    // this will break
    prism_file: `a11y-dark.css`
    ```
4. Set `prism_theme` to `custom`:
    ```js
    prism_theme: "custom"
    ```

Some theme lists:

* [PrismJS/prism-themes](https://github.com/PrismJS/prism-themes)
* [An a11y-friendly theme](https://github.com/ericwbailey/a11y-syntax-highlighting)
