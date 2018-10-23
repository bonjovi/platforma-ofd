$(function() {
    setTimeout(function() {
        $('.formarea').addClass('formarea_opened');
        $('.page').addClass('page_blured');
    }, 1000);

    $('.shevron').on('click', function() {
        $(this).toggleClass('shevron_opened');
        $(this).parent().find('.section__preview').toggleClass('section__preview_closed');
        $(this).parent().find('.section__postview').toggleClass('section__postview_closed');
    });
});