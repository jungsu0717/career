document.addEventListener("DOMContentLoaded", function(){
    // tab menu
    $('.tab-menu li').click(function() {
        const tab_id = $(this).attr('data-tab');

        $('.tab-menu li').removeClass('active');
        $('.tab-cont').removeClass('active');

        $(this).addClass('active');
        $('#'+tab_id).addClass('active');

      window.scrollBy( 0, $('#'+tab_id)[0].getBoundingClientRect().top-80);
    });

    // sub tab
    $('.tab-sort li').click(function() {
        const tab_id = $(this).attr('data-tab');

        $('.tab-sort li').removeClass('active');
        $('.sort-cont').removeClass('active');

        $(this).addClass('active');
        $('#'+tab_id).addClass('active');
    });

    // floating button 
    $(window).scroll(function() {
        const scroll_position = $(window).scrollTop();
        if (scroll_position > 100) {
            $('.floating-wrap').addClass('up');

            const deg = scroll_position - 100;
            $('.floating-wrap .going-up').css('transform', 'rotate(' + deg + 'deg)')
        } else {
            $('.floating-wrap').removeClass('up');
        }
    });

    $('.floating-wrap .going-up').click(function(){
        $('html, body').animate({scrollTop : 0}, 300);
    });
});
