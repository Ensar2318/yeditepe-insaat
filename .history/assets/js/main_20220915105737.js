// Header ve footer load işlemi
$(document).ready(function () {

    // Mobile tab content open - close
    $(".mobile-btn").click(function (e) {
        e.preventDefault();
        $(".nav").toggleClass("mobile-active");
    });


    // Desktop Dropdown Content
    function desktopDropdown() {
        $("header .dropdown .nav-link").click(function (e) {
            e.preventDefault();
            let id = $(this).attr("href");

            if ($(this).hasClass("dropdown-active")) {
                $(this).removeClass("dropdown-active");
                $(".dropdown-wrap").removeClass("active");
            } else {
                $(".dropdown-wrap .dropdown-content").removeClass("active");
                $("header .dropdown .nav-link").removeClass("dropdown-active");

                $(this).addClass("dropdown-active");
                $(id).addClass("active");
                $(".dropdown-wrap").addClass("active");
            }
        });

    }
    if (window.innerWidth >= 1000) {
        desktopDropdown();
    }
    // Desktop Dropdown Content
    
    // Aos init
    AOS.init({
        duration: 1200,
        once: false,
        mirror: false,
        ofset: 100
    });

});




//#####Swiper Örneği######


var indexHeroSwiper = new Swiper(".indexHeroSwiper", {
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    loop: true,
    speed: 1000,
    slidersPerView: 1,
    effect: "fade",
    navigation: {
        nextEl: ".indexHeroSwiper-button-next",
        prevEl: ".indexHeroSwiper-button-prev",
    },
    on: {
        slideChangeTransitionStart: function () {
            $(this.$el).find(".content").removeClass("animate__animated animate__fadeInLeft");
            setTimeout(() => {
                $(this.$el).find(".content").addClass("animate__animated animate__fadeInLeft");
            }, 100);
        }
    }
});

var whyUsSwiper = new Swiper(".whyUsSwiper", {
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    loop: true,
    speed: 1000,
    slidersPerView: 1,
    effect: "fade",
    navigation: {
        nextEl: ".whyUsSwiper-button-next",
        prevEl: ".whyUsSwiper-button-prev",
    }

});

var misyonSwiper = new Swiper(".misyonSwiper", {
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    loop: true,
    speed: 1000,
    slidersPerView: 1,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChangeTransitionStart: function () {
            $(this.$el).find(".content").removeClass("animate__animated animate__fadeInLeft");
            $(this.$el).find(".play-btn").removeClass("animate__animated animate__fadeIn");
            setTimeout(() => {
                $(this.$el).find(".content").addClass("animate__animated animate__fadeInLeft");
                $(this.$el).find(".play-btn").addClass("animate__animated animate__fadeIn");

            }, 100);
        }
    }
});


var blogFeaturesSwiper = new Swiper(".blogFeaturesSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        780: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        982: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1750: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".blogFeaturesSwiper-button-next",
        prevEl: ".blogFeaturesSwiper-button-prev",
    },
});

var brandSwiper = new Swiper(".brandSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        580: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        780: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 7,
            spaceBetween: 20,
        },
        1750: {
            slidesPerView: 8,
            spaceBetween: 50,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

var historySwiperThumb = new Swiper(".historySwiperThumb", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    watchSlidesProgress: true,
    breakpoints: {
        600: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    },

});

var historySwiper = new Swiper(".historySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    thumbs: {
        swiper: historySwiperThumb
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    speed: 1300,
    effect: "fade",
    virtualTranslate: true,
    fadeEffect: { crossFade: true },
    navigation: {
        nextEl: ".historySwiper-button-next",
        prevEl: ".historySwiper-button-prev",
    },


});

var blogHeroSwiper = new Swiper(".blogHeroSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    speed: 1300,
    effect: "fade",
    virtualTranslate: true,
    fadeEffect: { crossFade: true },
    navigation: {
        nextEl: ".blogHeroSwiper-button-next",
        prevEl: ".blogHeroSwiper-button-prev",
    },
    pagination: {
        el: ".blogHeroPagination",
        clickable: true,
    },


});

var blogFeaturesSwiper2 = new Swiper(".blogFeaturesSwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    breakpoints: {
        780: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        982: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        }

    },
    navigation: {
        nextEl: ".blogFeaturesSwiper2-button-next",
        prevEl: ".blogFeaturesSwiper2-button-prev",
    },
});

var plansSwiper = new Swiper(".plansSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    breakpoints: {

        570: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".plain-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".plansSwiper-button-next",
        prevEl: ".plansSwiper-button-prev",
    },
});

var newAndSaleProjectsSwiper = new Swiper(".newAndSaleProjectsSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 800,
    navigation: {
        nextEl: ".newAndSaleProjectsSwiper-button-next",
        prevEl: ".newAndSaleProjectsSwiper-button-prev",
    },
});

// var indexHeroSwiper = new Swiper(".indexHeroSwiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     centeredSlides: true,
//     breakpoints: {

//         768: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         },
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".indexHeroSwiper-button-next",
//         prevEl: ".indexHeroSwiper-button-prev",
//     },
// });
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});


