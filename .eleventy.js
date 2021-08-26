const config = require("./src/_data/config.js");
const { DateTime } = require("luxon");
const fs = require('fs');
const lunr = require('lunr');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAdmonition = require("markdown-it-admonition");
const eleventyPluginTOC = require('@thedigitalman/eleventy-plugin-toc-a11y');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const includesDir = (config.enable_extra_layouts ? "_extra_layouts" : `${config.theme.name}/layouts`);
   

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/_extra_css');
    eleventyConfig.addPassthroughCopy('src/_extra_js');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/documents');
    eleventyConfig.addPassthroughCopy(`src/${config.theme.name}/css`);
    eleventyConfig.addPassthroughCopy(`src/${config.theme.name}/js`);

    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.setLibrary("md", markdownIt({
        html: true
    })
        .use(markdownItAnchor)
        .use(markdownItAdmonition)
    );


    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyPluginTOC,{
        tags: ['h2','h3'],
        heading: false,
        listType: 'ul'
    });

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

    eleventyConfig.addFilter("squash", require(`./utils/squash.js`) );


    eleventyConfig.on('afterBuild', () => {

        // implement search using Lunr.js
        if(config.enable_search && config.search_tool === "lunr") {
            let data = fs.readFileSync(`${config.output}/search.json`,'utf-8');
            let docs = JSON.parse(data);

            let idx = lunr(function () {
                this.field('title');
                this.field('description')
                this.field('keywords')
                if(config.body_search) {
                    this.field('body');
                }
        
                docs.forEach(function (doc, idx) {
                    doc.id = idx;
                    this.add(doc); 
                }, this);
            });
        
            fs.writeFileSync(`${config.output}/index.json`, JSON.stringify(idx));
        }
    });
   

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: config.output,
            includes: includesDir
        }
    }
};