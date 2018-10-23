$(function() {
    setTimeout(function() {
        $('.formarea').addClass('formarea_opened');
        $('.page').addClass('page_blured');
    }, 1000);
    setTimeout(function() {
        $('.footer').css('display', 'flex').css('margin-left', '0');
    }, 1200);

    $('.shevron').on('click', function() {
        $(this).toggleClass('shevron_opened');
        var preview = $(this).parent().find('.section__preview'),
            postview = $(this).parent().find('.section__postview');

        $(preview).toggleClass('section__preview_closed');
        $(postview).toggleClass('section__postview_closed');

        $(preview).slideToggle();
        $(postview).slideToggle();
    });

    findChecked();

    $('.checkbox input').on('change', function() {
        findChecked();
    });

    function findChecked() {
        var section = $('.section');

        var titles = [];

        $.each(section, function(key, value) {
            titles = $(value).find('.checkbox input:checked ~ .checkbox__title');
        });

        console.log(titles.length);

        for (var i=0; i < titles.length; i++) {
            console.log(titles[i]);
        }
    }

    
});