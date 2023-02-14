$('.feedback-cards').slick({
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
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
                arrows: false

            }
        }
    ]
});