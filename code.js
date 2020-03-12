$('.name').on('click', function () {
    $('body, html').animate({
        scrollTop: $('header').offset().top
    })
})

$('nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

$(document).on('scroll', function () {
    const scrollValue = $(this).scrollTop();
    const windowHeight = $(window).height()

    const $hell2 = $('.hell2');
    const hell2FromTop = $hell2.offset().top
    const hell2Height = $hell2.outerHeight()


    const $soldier2 = $('.soldier2');
    const soldier2FromTop = $soldier2.offset().top
    const soldier2Height = $soldier2.outerHeight()

    const $escape2 = $('.escape2');
    const escape2FromTop = $escape2.offset().top
    const escape2Height = $escape2.outerHeight()

    if (scrollValue > hell2FromTop + hell2Height - windowHeight) {
        $hell2.addClass('active');
    }

    if (scrollValue > soldier2FromTop + soldier2Height - windowHeight) {
        $soldier2.addClass('active');
    }

    if (scrollValue > escape2FromTop + escape2Height - windowHeight) {
        $escape2.addClass('active');
    }

    const $images = $('.images');
    const imagesFromTop = $images.offset().top;
    const imagesHeight = $images.height();


    if (scrollValue > imagesFromTop + imagesHeight / 3 - windowHeight) {
        $images.addClass('active');
    }

    if (scrollValue < 100) {
        $('div').removeClass('active');
    }
})