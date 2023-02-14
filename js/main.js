$('.feedback-cards').slick({
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        prevArrow: "<img src='../img/prev-arrow.png' class='prev' alt='< prev'>",
        nextArrow: "<img src='../img/next-arrow.png' class='next' alt='next >'>",
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