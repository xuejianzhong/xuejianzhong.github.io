var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true, //此参数设置为true时，点击分页器的示指点分页器会控制Swiper切换。
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },

    //添加动画
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});


//音乐
var mp3 = document.querySelector("#mp3");
var mp3btn = document.querySelector("#mp3btn");

mp3btn.addEventListener('click', function () {
    if (mp3.paused) {
        mp3.play()
        mp3btn.style.animationPlayState = 'running';
    } else {
        mp3.pause()
        mp3btn.style.animationPlayState = 'paused';
    }
});


$(function(){
   $(".s4 .main .text .label-1").click(function(){
       $(".main .text .div2").hide();
       $(".main .text .div1").show();
   });
    $(".s4 .main .text .label-2").click(function(){
        $(".main .text .div1").hide();
        $(".main .text .div2").show();
    });
    //$(".s6 .main ul li:nth-of-type(1)").click(function(){
    //    $(".s6 .main .main-1").fadeIn(1000)
    //});
    //$(".s6 .main ul li:nth-of-type(2)").click(function(){
    //    $(".s6 .main .main-2").fadeIn(1000)
    //});
    //$(".s6 .main ul li:nth-of-type(3)").click(function(){
    //    $(".s6 .main .main-3").fadeIn(1000)
    //})
});


