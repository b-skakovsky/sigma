$('.carousel-services').owlCarousel({
    slideBy: 1,
    margin:20,
    dots: false,
    navText: ["<img src='img/slider-btn.png'>", "<img src='img/slider-btn-right.png'>"],
    nav:true,
    checkVisible: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items: 2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        },
        1200:{
            items:4   
        }
    }
})
