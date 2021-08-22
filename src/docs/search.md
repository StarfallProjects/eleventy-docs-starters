---
title: Search
description: "Understand and configure your site search"
---

All the themes include a client-side search powered by [Lunr](https://lunrjs.com/).

## Configuration

! Parameter | Default | Description|
| --------- | ------- | ---------- |
| `body_search` | `false` | You can choose whether to make the full body of your documents searchable. By default, the search only includes title, description, and keywords. This keeps the search index file small. If you want to include the full text of your documents, set `body_search` to `true` in `_data/config.js`. |
| `enable_search` | `true` | If you don't want any search on your site, you can turn it off. This completely removes search from your site. |
| `disable_lunr` | `false` | Set `disable_lunr` to `true` if you want search, but don't want to use Lunr.js. The project will still generate an optimized JSON named `search.json`, which you can use with other search tools. It will also display a search box. |

## Why Lunr.js?

Search is a complex topic. There are several ways to implement search for a static site, each with their own benefits and disadvantages:

* Client side search using JavaScript: there are several free open-source tools for this, setup is comparatively simple, and it avoids calling a server. Popular tools include [Lunr](https://lunrjs.com/), [Elasticlunr](http://elasticlunr.com/), [Flexsearch](https://github.com/nextapps-de/flexsearch), and [Fuse](https://fusejs.io/). The main disadvantage is that you must load the entire search index when the user searches. For large sites, this can be a sizeable file (in a quick test, I created 1000 pages of content, each with title, description, keywords, and three paragraphs of text. The resulting search index was ~6MB). This consumes user's data.
* Client side search using WASM: all search work still takes place on the client side, but uses WebAssembly to improve performance. Depending on the implementation, this approach may also reduce the amount of data consumed. However, it requires additional dependencies when building the site (usually, Rust), and adds complexity. If you want to learn more, this is a helpful blog post on [WebAssembly Search Tools for Static Sites](https://healeycodes.com/webassembly-search-tools-for-static-websites/).
* Server side search / hosted search: the search index lives on a server. When a user searches, they call an API that runs the search server side, and returns results. This removes the need to load the search index. Paid services for hosted search often provide additional features, such as analytics. Popular tools include [Algolia](https://www.algolia.com/) and [ElasticSearch](https://www.elastic.co/elasticsearch/). You could also build and host your own solution. The downsides include cost (if using a paid service) or complexity (if building and hosting your own). While you avoid loading a large search index, your search may be slowed by the need to call a server. 

The Eleventy Docs Starter project uses client side search with JavaScript. This avoids adding build dependencies, making the project easier to use. The project [pre-builds the index](https://lunrjs.com/guides/index_prebuilding.html) to improve search performance. It also aims to keep the index size as small as possible by stripping out unecessary content (see [squash.js]()), and by only indexing the title, description, and keywords (you can choose to index entire documents in the `config.js`). This mitigates some of the disadvantages of client side search.

Lunr.js is widely used, stable, and full-featured.