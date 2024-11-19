$(document).ready(function() {
    // Enable Lightbox for the gallery
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'fadeDuration': 200
    });
    
    // Enable horizontal scroll for gallery grid on mobile
    $('.gallery-grid').on('touchstart', function(event) {
      var startX = event.originalEvent.touches[0].pageX;
      var scrollLeft = $(this).scrollLeft();
  
      $(this).on('touchmove', function(event) {
        var x = event.originalEvent.touches[0].pageX;
        var walk = (startX - x); // Calculate distance moved
        $(this).scrollLeft(scrollLeft + walk);
      });
    });
    
    // Remove touchmove event to prevent unnecessary listeners
    $('.gallery-grid').on('touchend', function() {
      $(this).off('touchmove');
    });
  });
  