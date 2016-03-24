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
    $searchFormInput = $searchFormWrapper.find('form input[type="text"]');

    // Create the structure for the tacked on drawer!
    $advancedSearchLink = $('<div>', { 
      class: 'simple-search-drawer',
      html: $('<a>', {
        href: '/advanced-search',
        text: 'Advanced Search',
        style: 'display: block;'
      }),
      style: 'display: none;'
    });

    $searchFormWrapper.append($advancedSearchLink);

    // Show the drawer when the input is focused
    $searchFormInput.focus(function() {
      $advancedSearchLink.show();    
    });

    // When the input loses focus, hide the drawer UNLESS the 
    // drawer was clicked
    // TODO:  this is still a little bug, currently the entire bar
    //        is a clickable link, I'd rather have only the text 
    //        be clickable AND have the drawer not close when it is
    //        clicked on
    $searchFormInput.blur(function(e) {
      if ( e.relatedTarget === null ) {
        $advancedSearchLink.hide();
      }
    });

  });

})(jQuery);