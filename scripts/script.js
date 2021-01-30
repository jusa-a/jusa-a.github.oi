$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $("a").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");

        var target = this.hash,
            menu = target;
        $target = $(target);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $target.offset().top - 0,
                },
                300,
                "swing",
                function () {
                    window.location.hash = target;
                    $(document).on("scroll", onScroll);
                }
            );
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $("#project-nav a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (
            refElement.position().top <= scrollPos + 200 &&
            refElement.position().top + refElement.height() > scrollPos
        ) {
            $("#project-nav ul li a").removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
