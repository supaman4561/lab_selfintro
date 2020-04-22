$(function() {
  $('li[href^="#"]').click(function() {
    const duration = 750;
    const headerOuterHeight = $('header').outerHeight(true);  // included margin 
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top - headerOuterHeight;
    $('body,html').animate({scrollTop:position}, duration, 'swing');
    return false;
  });
});

$(function() {
  $('li[id^="costume"]').click(function() {
    imgId = $(this).attr("id");
    imgPath = 'img/' + imgId + '.jpg';
    $('img#mainchara').attr('src', imgPath);
  });
});

$(function() {
  $('.fadein').on('inview', function() {
    $(this).children().addClass('animation');
  });
});