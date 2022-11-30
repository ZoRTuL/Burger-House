$(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        
    });

    $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle()
    });
});