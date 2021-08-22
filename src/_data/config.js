// DOCS:
module.exports = {
    site_name: "Eleventy Documentation Starters",
    description: "A collection of Eleventy starters for creating documentation sites.",
    keywords: ["documentation", "eleventy"],
    url: "",
    // Set the output directory
    output: "dist",
    /* Choose a theme. Valid options are:
       _theme_blank
       _theme_minimalist

    */    
    theme: {
        name: "_theme_blank"
    },
    // Syntax highlighting options. Leave as "" if you do not want syntax highlighting.
    // Docs: 
    prism_theme: "custom",
    prism_file: "a11y-dark",
    build_time : new Date(),
    // Search options
    // Docs: 
    // By default, search is enabled, uses lunr.js, and runs on titles, keywords, and descriptions.
    // To disable search completely, set enable_search to false.
    enable_search: true,
    // To include the full body of documents in the Lunr search, set body_search to true
    // WARNING: this will greatly increase the size of the search index
    body_search: false,
    // To use Algolia instead of Lunr, set search_tool to "algolia". 
    // To use your own search tooling, set search_tool to "none".
    search_tool: "lunr"
};