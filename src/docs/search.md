---
title: Search
description: "Understand and configure your site search"
---

All the themes include several search options:

* Default: a client-side search powered by [Lunr](https://lunrjs.com/).
* [Algolia Docs Search](https://docsearch.algolia.com/).
* Generate an optimized `search.json` document, index it using your prefered search library, and use the provided search box in the theme.
* Disable search entirely.

Search is complex. This project tries to simplify it by providing a pre-configured default, as well as allowing you to switch to a different type of search tooling with minimal configuration changes.

However, you may wish to use different search tooling. The project allows for this, and to support it, this article provides background information on how Lunr and Algolia are implemented, and the decisions behind the search tooling choices.

## Configuration

| Parameter | Default | Description|
| --------- | ------- | ---------- |
| `body_search` | `false` | When using Lunr, you can choose whether to make the full body of your documents searchable. By default, the search only includes title, description, and keywords. This keeps the search index file small. If you want to include the full text of your documents, set `body_search` to `true` in `_data/config.js`. |
| `search_tool` | `lunr` | Valid options are `lunr`, `algolia`, and `none`. Use `none` if you want to use the optimized JSON and the theme's search UI, with your own choice of search tooling. |
| `enable_search` | `true` | If you don't want any search on your site, you can turn it off. This completely removes search from your site. |

## Lunr.js

Lunr is the default option. It provides client-side search. If you are happy with the defaults, it requires no configuration.

### Configuration options

| Parameter | Default | Description|
| --------- | ------- | ---------- |
| `body_search` | `false` | When using Lunr, you can choose whether to make the full body of your documents searchable. By default, the search only includes title, description, and keywords. This keeps the search index file small. If you want to include the full text of your documents, set `body_search` to `true` in `_data/config.js`. |

### How it works

Lunr builds an index from documents. In Lunr's terminology, a document is a JSON object that has an identifier, along with other fields. Lunr generates the search index from your document objects. It then provides a `search()` function to look up items in that index.

> **Tip**: the terminology around search gets confusing. Some Eleventy skeletons (and other static site generators) talk about generating an index when they're generating the JSON that Lunr consumes to build its index. This article refers to that file as the documents JSON.

This project does the following:

1. At build time, generates an optimized document JSON called `search.json`, using `search.njk` and the `squash` filter.
2. At build time, pre-builds the Lunr index. The code for this is in `.eleventy.js`. It runs after the Eleventy build, consumes `dist/search.json`, and outputs `dist/index.json`.
3. Each theme contains a `search-ui.njk` partial. This implements a search box, and calls Lunr when a user enters a query. 

If you want to use alternative client-side search, such as Fuse.js, Flexsearch, or ElasticLunr, you need to:

1. Add code that generates an index from `dist/search.json`. You probably want to add this to `.eleventy.js` in the `afterBuild` event handler.
2. 



## Understand the search choices in this project

Search is a complex topic. There are several ways to implement search for a static site, each with their own benefits and disadvantages:

* Client side search using JavaScript: there are several free open-source tools for this, setup is comparatively simple, and it avoids calling a server. Popular tools include [Lunr](https://lunrjs.com/), [Elasticlunr](http://elasticlunr.com/), [Flexsearch](https://github.com/nextapps-de/flexsearch), and [Fuse](https://fusejs.io/). The main disadvantage is that you must load the entire search index when the user searches. For large sites, this can be a sizeable file (in a quick test, I created 1000 pages of content, each with title, description, keywords, and three paragraphs of text. The resulting search index was ~6MB). This consumes user's data.
* Client side search using WASM: all search work still takes place on the client side, but uses WebAssembly to improve performance. Depending on the implementation, this approach may also reduce the amount of data consumed. However, it requires additional dependencies when building the site (usually, Rust), and adds complexity. If you want to learn more, this is a helpful blog post on [WebAssembly Search Tools for Static Sites](https://healeycodes.com/webassembly-search-tools-for-static-websites/).
* Server side search / hosted search: the search index lives on a server. When a user searches, they call an API that runs the search server side, and returns results. This removes the need to load the search index. Paid services for hosted search often provide additional features, such as analytics. Popular tools include [Algolia](https://www.algolia.com/) and [ElasticSearch](https://www.elastic.co/elasticsearch/). You could also build and host your own solution. The downsides include cost (if using a paid service) or complexity (if building and hosting your own). While you avoid loading a large search index, your search may be slowed by the need to call a server. 

The Eleventy Docs Starter project defaults to client side search with JavaScript, powered by Lunr. This avoids adding build dependencies (which are required for WASM), and means you can go ahead and use the search as-is, with no configuration or signup (which is required for Algolia). The project [pre-builds the index](https://lunrjs.com/guides/index_prebuilding.html) to improve search performance. It also aims to keep the index size as small as possible by stripping out unecessary content (see [squash.js]()), and by only indexing the title, description, and keywords (you can choose to index entire documents in the `config.js`). This mitigates some of the disadvantages of client side search.

