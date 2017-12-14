/**
 * Created by lenovo on 17/9/8 008.
 */

$(".action").css("color","red");

$(".nav1 li").click(function(){
    var n=$(this).index();
    $(this).children("a").css("color","red").parent().siblings().children("a").css("color","#777");
    $("body section").eq(n).fadeIn(400).siblings().not("header").fadeOut(400);
    return false;
})

$(".nav1 li").click(function(){
    sessionStorage.index=$(this).index(),console.log(sessionStorage.index);
        $(".nav1 li").eq(sessionStorage.index).addClass("action").siblings().removeClass("action");
})
$(".nav1 li").children("a").eq(sessionStorage.index).css("color","red").parent().siblings().children("a").css("color","#777");


$(".nav1 li").click(function(){
    sessionStorage.indea=$(this).index(),console.log(sessionStorage.indea);
    $("body section").eq(sessionStorage.indea).show().siblings().not(".nav-2").not("header").not("footer").not(".md-modal").hide();
})
$("body section").eq(sessionStorage.indea).show().siblings().not("header").hide();
