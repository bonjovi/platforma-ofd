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

    $('.checkbox input[status=ordinary]').on('change', function() {
        if(!$(this).is(':checked')) {
            $(this).parents('.section__postview').find('.checkbox input[status=checkall]').prop('checked', false);
        }
        findChecked();
    });

    $('.checkbox input[status=checkall]').on('change', function() {
        if($(this).is(':checked')) {
            $(this).parents('.section__postview').find('.checkbox input[status=ordinary]').prop('checked', true);
        } else {
            $(this).parents('.section__postview').find('.checkbox input[status=ordinary]').prop('checked', false);
        }
        findChecked();
    });

    function findChecked() {
        var section = $('.section');

        $.each(section, function(key, value) {
            var titles;
            titles = $(value).find('.checkbox input[status=ordinary]:checked ~ .checkbox__title');
            $(this).find('.section__preview').text('');

            for (var i=0; i < titles.length; i++) {
                var text = $(this).find('.section__preview').text() + $(titles[i]).text() + '. ';
                $(this).find('.section__preview').text(text);
            }
        });

    }

    
});