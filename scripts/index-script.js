$(window).scroll(function () {
    if ($("#about").position().top <= $(document).scrollTop() + 100) {
        $(".main-header a").addClass("current");
        $(".about a").addClass("current");
        $(".main-image").css("filter", "blur(0px)");
    } else {
        $(".main-header a").removeClass("current");
        $(".about a").removeClass("current");
        $(".main-image").css("filter", "blur(5px)");
    }
});

$(document).ready(function () {
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        $(document).off("scroll");

        var target = this.hash,
            menu = target;
        $target = $(target);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $target.offset().top - 0,
                },
                1000,
                "swing",
                function () {
                    window.location.hash = target;
                    $(document).on("scroll", onScroll);
                }
            );
    });
});
