$('.feedback-cards').slick({
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        prevArrow: "<img src='../img/arrow-left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='../img/arrow-right.svg' class='next' alt='2'>",
        responsive: [
            {
            breakpoint: 1240,
            settings: {
                slidesToShow: 2,
                    }
            },
            {
            breakpoint: 601,
            settings: {
                slidesToShow: 1,
                dots: false
            }
        }
    ]
});