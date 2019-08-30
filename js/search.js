const searchClient = algoliasearch('OJTYESVQSG', '52cfee1315a66b91bb6e4d0b1ff4ae98');

const search = instantsearch({
  indexName: 'devchat.tv',
  searchClient,
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-text',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
  })
);

search.start();