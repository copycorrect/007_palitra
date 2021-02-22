$('.works').ready(function(){
    $('.works-block').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }]
    });
});

$('.results').ready(function(){
    $('.results-block').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        vertical: false,
        adaptiveHeight: false,
        // dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: true,
                    swipeToSlide: true
                }
            }]
    });
});
