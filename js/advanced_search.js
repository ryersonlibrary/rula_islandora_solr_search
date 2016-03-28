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
        class: 'advanced-search-link',
        href: '/advanced-search',
        text: 'Advanced Search',
        style: 'display: block'
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
    $searchFormInput.blur(function(e) {
      // We need to use the setTimeout function here because of
      // inconsistent behavior between browsers when the blur 
      // event is invoked
      setTimeout(function(){
        var $target = $(document.activeElement);

        if ( $target.hasClass('simple-search-drawer') ||
             $target.hasClass('advanced-search-link') ) {
          $searchFormInput.focus();
        } else {
          $advancedSearchLink.hide();
        }
      }, 25);
    });

  });

})(jQuery);