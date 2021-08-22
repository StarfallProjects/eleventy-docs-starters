// DOCS:
module.exports = {
    site_name: "Eleventy Documentation Starters",
    description: "A collection of Eleventy starters for creating documentation sites.",
    keywords: ["documentation", "eleventy"],
    url: "",
    // Set the output directory
    output: "dist",
    /* Choose a theme. Valid options are:
       theme-blank
       theme-minimalist

    */    
    theme: {
        name: "theme-blank",
        alternateLayout: "layouts/test.njk"
    },
    // Syntax highlighting options. Leave as "" if you do not want syntax highlighting.
    // Docs: 
    prism_theme: "custom",
    prism_file: "a11y-dark",
    build_time : new Date(),
    // Search options
    // Docs: 
    // By default, search runs on titles, keywords, and descriptions.
    // To include the full body of documents in the search, set body_search to true
    // WARNING: this will greatly increase the size of the search index
    enable_search: true,
    body_search: false,
    disable_lunr: false
};