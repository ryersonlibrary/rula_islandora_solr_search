/*
 *  advanced_search.js
 *
 *  This isn't really an advanced search! It just injects a link
 *  underneath our search bar that leads to the /advanced-search
 *  page.
 *
 */

(function ($) { 
  $( document ).ready(function() {
    // find the elements that we want to mess with
    $searchFormWrapper = $('#block-islandora-solr-simple');
    $searchForm = $searchFormWrapper.find('form input[type="text"]');

    // Create the structure for the tacked on drawer!
    $advancedSearchLink = $('<div>', { 
      class: 'simple-search-drawer',
      html: $('<a>', {
        href: '/advanced-search',
        text: 'Advanced Search'
      })
    });

    // Show the advancedSearchLink element when the input is focused.
    $searchForm.focus(function() {
      $searchFormWrapper.append($advancedSearchLink);
    });

    // Remove the element from DOM when the input loses focus
    $searchForm.blur(function() {
      $('.simple-search-drawer').remove();
    });

  });
})(jQuery);