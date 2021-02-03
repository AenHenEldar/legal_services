$(function() {
    $('.slider__wrapper').slick({
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        infinite: false
    });
    $('.news__wrapper').slick({
        nextArrow: '<button type="button" class="slick-next news__slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev news__slick-prev"></button>',
        infinite: false
    });
    $('.advice__form select').styler();

    $('.header__menu-btn').on('click', e => {
        $('.header__menu').toggle();
    });

});