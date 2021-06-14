$(document).ready(function () {


    $(".all-wrap > .menu-wrap").click(function () {
        $(".all-wrap > .menu-wrap").toggleClass("active01");

        $(".menu-depth-wrap").toggleClass("active100");
        $(".menu-depth-wrap > .icon-box-wrap").toggleClass("active100");
        $(".menu-depth-wrap>.menu-depth").toggleClass("active100");
    });


    $(".tp-btn").click(function () {
        $("html, body").animate({
            scrollTop: 0
        });

    });

    $(".all-wrap .top-wrap .main .img-box").slick({

        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });


});

$(window).scroll(function () {

    var scrollTop = $(this).scrollTop()
    console.log(scrollTop)
    if (scrollTop > 100) {
        $(".all-wrap>.top-wrap>.header-wrap").addClass("active");
        $(".all-wrap>.top-wrap>.header-wrap2").addClass("active");

        $(".all-wrap>.menu-wrap").addClass("active");
        $(".all-wrap > .menu-wrap > .ham > span").addClass("active");

        $(".tp-btn").css({
            opacity: 1
        }, 300);
    } else {

        $(".all-wrap>.top-wrap>.header-wrap").removeClass("active");
        $(".all-wrap>.top-wrap>.header-wrap2").removeClass("active");

        $(".all-wrap>.menu-wrap").removeClass("active");
        $(".all-wrap > .menu-wrap > .ham > span").removeClass("active");

        $(".tp-btn").css({
            opacity: 0
        }, 300);
    }
    if (scrollTop > 500) {
        $(".all-wrap>.top-wrap>.header-wrap2>.header2>.list-box>ul>li").css({
            "line-height": "80px",
        })
        $(".all-wrap>.top-wrap>.header-wrap2").css({
            "height": "80px",
        })
    } else {
        $(".all-wrap>.top-wrap>.header-wrap2>.header2>.list-box>ul>li").css({
            "line-height": "60px",
        })
        $(".all-wrap>.top-wrap>.header-wrap2").css({
            "height": "60px",
        })

    }

    

});