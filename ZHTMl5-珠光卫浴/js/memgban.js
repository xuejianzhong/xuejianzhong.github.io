/**
 * Created by lenovo on 17/6/10 010.
 */
$(function(){
    $(".jianjie li").hover(function(){
        $(".jianjie li a").children("span").stop().animate({"opacity":"1"},500);
    },function(){
        $(".jianjie li a").children("span").stop().animate({"opacity":"0"},300);
    })
})
$(function(){
    $(".licheng li").hover(function(){
        $(".licheng li a").children("span").stop().animate({"opacity":"1"},500);
    },function(){
        $(".licheng li a").children("span").stop().animate({"opacity":"0"},300);
    })
})
$(function(){
    $(".rongyu li").hover(function(){
        $(".rongyu li a").children("span").stop().animate({"opacity":"1"},500);
    },function(){
        $(".rongyu li a").children("span").stop().animate({"opacity":"0"},300);
    })
})
$(function(){
    $(".lingyufang li").hover(function(){
        $(".lingyufang li a").children("span").stop().animate({"opacity":"1"},500);
    },function(){
        $(".lingyufang li a").children("span").stop().animate({"opacity":"0"},300);
    })
})
$(function(){
    $(".yugang li").hover(function(){
        $(".yugang li a").children("span").stop().animate({"opacity":"1"},500);
    },function(){
        $(".yugang li a").children("span").stop().animate({"opacity":"0"},300);
    })
})
$(function(){
    $(".yushigui li").hover(function(){
        $(".yushigui li a").children("span").stop().animate({"opacity":"1"},500);
    },function(){
        $(".yushigui li a").children("span").stop().animate({"opacity":"0"},300);
    })
})
$(function(){
    $(".zuobianqi li").hover(function(){
        $(".zuobianqi li a").children("span").stop().animate({"opacity":"1"},500);
    },function(){
        $(".zuobianqi li a").children("span").stop().animate({"opacity":"0"},300);
    })
})
$(function(){
    $(".jiameng li").hover(function(){
        $(".jiameng li a").children("span").stop().animate({"opacity":"1"},500);
    },function(){
        $(".jiameng li a").children("span").stop().animate({"opacity":"0"},300);
    })
})


$(".bathtub").hover(function () {
    $(this).find("a").stop().animate({"opacity": "0.8"}, 500);
}, function () {
    $(this).find("a").stop().animate({"opacity": "0"}, 500);
})