const config = require("./src/_data/config.js");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
   

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/extra_css');
    eleventyConfig.addPassthroughCopy('src/extra_js');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/documents');
    eleventyConfig.addPassthroughCopy(`src/${config.theme.name}/css`);
    eleventyConfig.addPassthroughCopy(`src/${config.theme.name}/js`);
    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addPlugin(syntaxHighlight);

    // Date formats
    eleventyConfig.addFilter("readableDate", dateObj => {
       return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });
    eleventyConfig.addFilter("justTheYear", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy');
    });
    
    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
        if( n < 0 ) {
            return array.slice(n);
        }
        return array.slice(0, n);
    });

    // Return the smallest number argument
    eleventyConfig.addFilter("min", (...numbers) => {
        return Math.min.apply(null, numbers);
    });



   

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: config.output,
            includes: config.theme.name
        }
    }
};