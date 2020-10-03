var $grid = $('.work__row').masonry({
    // options...
    itemSelector: '.item',
  // use element for option
    columnWidth: '.percent-size',
    percentPosition: true,
    gutter: '.gutter-size'
    });
  // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});