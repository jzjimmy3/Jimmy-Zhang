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

})(jQuery);


