// DOCS:
module.exports = {
    site_name: "Eleventy Documentation Starters",
    description: "A collection of Eleventy starters for creating documentation sites.",
    keywords: ["documentation", "eleventy"],
    url: "",
    build_time : new Date(),
    // Set the output directory
    output: "dist",
    // Syntax highlighting options. Leave as "" if you do not want syntax highlighting.    
    // Docs: 
    // If using one of the default Prism themes, enter the name here. Enter "custom" if using a custom theme.
    prism_theme: "custom",
    // If using a custom theme, you must place the .css file in `_assets/css/prism/`
    // Provide the filename without extension here
    prism_file: "a11y-dark",    
    // Search options
    // Docs: 
    // By default, search is enabled, uses lunr.js, and runs on titles, keywords, and descriptions.
    // To disable search completely, set enable_search to false.
    enable_search: true,
    // To include the full body of documents in the Lunr search, set body_search to true
    // WARNING: this will greatly increase the size of the search index
    body_search: false,
    // To use Algolia instead of Lunr, set search_tool to "algolia". 
    // To use your own search tooling, set search_tool to "other".
    search_tool: "lunr",
    // To turn off table of contents for the entire theme, set to false
    toc: true
};