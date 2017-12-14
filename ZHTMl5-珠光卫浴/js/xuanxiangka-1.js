/**
 * Created by lenovo on 17/6/10 010.
 */
$(".btn-group a").click(function(){
    var n=$(this).index();
    $(this).css("box-shadow","0px -1px 2px #000000").siblings().css("box-shadow","none");
    $("body section").eq(n+1).fadeIn(400).siblings().not(".nav-2").not("header").not(".md-modal").not("footer").fadeOut(400);
    return false;
})


$(".btn-group a").click(function(){
    sessionStorage.index=$(this).index(),console.log(sessionStorage.index),
        $(".btn-group a").eq(sessionStorage.index).addClass("action").siblings().removeClass("action");
})
$(".btn-group a").eq(sessionStorage.index).addClass("action").siblings().removeClass("action");


$(".btn-group a").click(function(){
    sessionStorage.indea=$(this).index()+1,console.log(sessionStorage.indea);
    $("body section").eq(sessionStorage.indea).show().siblings().not(".nav-2").not("header").not("footer").not(".md-modal").hide();
})
$("body section").eq(sessionStorage.indea).show().siblings().not(".nav-2").not("header").not(".md-modal").not("footer").hide();


