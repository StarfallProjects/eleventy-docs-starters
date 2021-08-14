# Conditional outputs

Conditional outputs allow you to change how you output your content depending on certain variables. For example, you might want to mark some of your content as `draft`, and make sure it's only included in test builds, not in builds for the live site.

## Quickstart

```js
// `_data/config.js`
module.exports = {
    'output': process.env.OUTPUT
};
```

```js
// `index.md`
{% raw %}
{% if config.output == "draft" %}
Draft text
{% endif %}
{% endraw %}
```

Then build the output with:

```bash
# Bash shell

# include the draft content
OUTPUT=draft npx @Eleventy/eleventy

# exclude the draft content
npx @Eleventy/eleventy
```

```powershell
# PowerShell

# include the draft content
$env:OUTPUT="draft"; npx @Eleventy/eleventy; $env:OUTPUT=$null

# exclude the draft content
npx @Eleventy/eleventy
```

```json
// In your package.json

"scripts": {
    "start": "npm run dev",
    "dev": "cross-env ELEVENTY_ENV=draft eleventy --serve",
    "prod": "cross-env ELEVENTY_ENV=prod eleventy --serve",
    "build": "cross-env ELEVENTY_ENV=prod eleventy",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

## Explanation

Eleventy allows us to pass environment variables to our templates using Node.js' `process.env` property. [Eleventy docs example](https://www.11ty.dev/docs/data-js/#example-exposing-environment-variables).

This may sound complicated. What it means is:
- You need a data file listing your environment variables.
- You set those variables in the CLI (command line interface) when you build the site, or in your `scripts` in your `package.json`.
- Your templates can check for those variables and take action based on the values.

In the example above, we:
1. Create an environment variable named `OUTPUT` in the `_data/config.js` file.
2. Check the value of the variable in the `index.md` file.
3. If the value of the variable is `draft`, we show the draft content.
4. Build the site, setting the value of `OUTPUT` to `draft`.

### Why is OUTPUT capitalized?
It's a common style convention for environment variables.

### What's going on with PowerShell?

The Eleventy documentation shows how to set environment variables in a Bash shell (or CLI). In PowerShell it's more complicated. There is a detailed explanation in [this StackOverflow answer](https://stackoverflow.com/a/43030126/2291838).

The PowerShell command:
1. Sets the environment variable _before_ running the Eleventy build.
2. Runs the Eleventy build.
3. Clears the environment variable.

If you use an npm script (for example, `npm run draft`) to build your site, I recommend using [cross-env](https://www.npmjs.com/package/cross-env) to avoid PowerShell-related quirks.

### Can I still use flags like `--serve` or `--output`?

Yes. For example, the following overwrites the default output directory, `docs`, and puts the output into `docs/draft`. This allows you to have several output folders. You could have one for live, one for draft, and so on.

```shell
# Bash
OUTPUT=draft npx @Eleventy/eleventy --output=docs/draft

# PowerShell
$env:OUTPUT="draft"; npx @Eleventy/eleventy --output=docs/draft; $env:OUTPUT=$null
```

> **Warning:** in PowerShell, if you run it with the `--serve` flag, it will never run `$env:OUTPUT=$null`. The `$env:OUTPUT` variable will keep the value you set until you manually unset it or close PowerShell.