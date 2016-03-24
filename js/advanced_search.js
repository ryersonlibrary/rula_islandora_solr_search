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
    $search_form_wrapper = $('#block-islandora-solr-simple');
    $search_form = $search_form_wrapper.find('form input[type="text"]');

    // Create the structure for the tacked on drawer!
    $advanced_search_link = $('<div>', { 
      class: 'simple-search-drawer',
      html: $('<a>', {
        href: '/advanced-search',
        text: 'Advanced Search'
      })
    });

    // Add the element DOM when input gets focus
    $search_form.focus(function() {
      $search_form_wrapper.append($advanced_search_link);      
    });

    // Remove the element from DOM when the input loses focus
    $search_form.blur(function(){
      $('.simple-search-drawer').remove();
    });

  });
})(jQuery);