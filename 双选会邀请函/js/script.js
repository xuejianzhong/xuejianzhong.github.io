var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true, //姝ゅ弬鏁拌缃负true鏃讹紝鐐瑰嚮鍒嗛〉鍣ㄧ殑绀烘寚鐐瑰垎椤靛櫒浼氭帶鍒禨wiper鍒囨崲銆�
    },


    navigation: {
        nextEl: '.swiper-button-next',
    },


    on:{
        init: function(){
            swiperAnimateCache(this);
            swiperAnimate(this);
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this);
        }
    }
});



//音乐
var mp3 = document.querySelector("#mp3");
var mp3btn = document.querySelector("#mp3btn");

mp3btn.addEventListener('click', function () {
    if (mp3.paused) {
        mp3.play();     //点击音乐暂停
        mp3btn.style.animationPlayState = 'running';    //点击动画停止旋转
    } else {
        mp3.pause();    //点击音乐继续
        mp3btn.style.animationPlayState = 'paused';     //点击动画开始旋转
    }
});

