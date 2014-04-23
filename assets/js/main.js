$(function() {
  $('.show-stat').on('click', function() {
    $(this).closest('.hero').addClass('slide');
  });

  $('.show-bio').on('click', function() {
    $(this).closest('.hero').removeClass('slide');
  });

  $('.has-popover').popover({
    html: true,
    trigger: 'hover'
  });

  $('.quote')
    .on('click', function(e) {
      e.preventDefault();
      var el = $(this),
          content = el.data('content'),
          title = el.data('title'),
          quoteHolder = $('.quote-holder blockquote');
      $('.quote').removeClass('active');
      el.addClass('active');
      quoteHolder.find('p').text(content);
      quoteHolder.find('small').text(title);
      quoteHolder.height(quoteHolder.find('p').outerHeight() + quoteHolder.find('small').height() );
      $('html, body').scrollTo(quoteHolder.offset().top - 30, 500, { easing:'swing' });
    });

  $('.quote-holder blockquote').height(85);
});
