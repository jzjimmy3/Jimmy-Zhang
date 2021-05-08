!(function ($) {


    // Progress Bar Animation
    $('.skills-content').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '75%'
    });

    // Scrolling Header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolling');
        } else {
            $('#header').removeClass('header-scrolling');
        }
    });

    // sm Navigation
    if ($('.nav-link').length) {
        var nav = $('.nav-link').clone().prop({
            class: 'sm-nav d-lg-none'
        });
        $('body').append(nav);
        $('body').prepend('<button type="button" class="sm-nav-toggle d-lg-none"><i class="fas fa-bars preview-link"></i></button>');
        $('body').append('<div class="sm-nav-overly"></div>');

        $(document).on('click', '.sm-nav-toggle', function (e) {
            $('body').toggleClass('sm-nav-active');
            $('.sm-nav-toggle i').toggleClass('fas fa-times fas fa-plus');
            $('.sm-nav-overly').toggle();
        });

        $(document).on('click', '.sm-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".sm-nav, .sm-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('sm-nav-active')) {
                    $('body').removeClass('sm-nav-active');
                    $('.sm-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.sm-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".sm-nav, .sm-nav-toggle").length) {
        $(".sm-nav, .sm-nav-toggle").hide();
    }

})(jQuery);


