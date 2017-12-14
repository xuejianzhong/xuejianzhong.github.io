//返回顶部
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#back-to-top").stop().fadeIn(1000);
        } else {
            $("#back-to-top").stop().fadeOut(1000);
        }
    })
    $("#back-to-top").click(function () {
        $("body").animate({"scrollTop": 0}, 1500);
    })
})