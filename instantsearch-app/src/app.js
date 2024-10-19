const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch('6B2X1K3XC2', 'ec3070b9ba98434873be05750a9b27f4');

const search = instantsearch({
  indexName: 'product-import-template(1)',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
  
});


search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
<article>
  <img src=${ hit.Product Thumbnail } alt=${ hit.Product Title } />
  <div>
    <h1>${components.Highlight({hit, attribute: "Product Title"})}</h1>
    <p>${components.Highlight({hit, attribute: "Product Description"})}</p>
  </div>
</article>
`,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();

