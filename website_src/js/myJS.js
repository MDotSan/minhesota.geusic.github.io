/*
 credit to: Julian Easley
 Linkedin: https://linkedin.com/in/julian-easley-57a664161
*/


$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scrolling
    $('.my_card').each(function(i) {
            if ($(this).position().top <= (scrollDistance + 100)) {
                    $('.nav-item a.active').removeClass('active');
                    $('.nav-item a').eq(i).addClass('active');
            }
    });
}).scroll();

$(function(){
        $(".navbar a").on('click', function(){
                $("html, body").animate({
                        scrollTop: $($.attr(this, 'href')).offset().top
                }, 500) // 500 = 0.5 seconds
        });
});