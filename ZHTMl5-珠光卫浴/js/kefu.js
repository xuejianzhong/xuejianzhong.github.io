/**
 * Created by lenovo on 17/6/10 010.
 */
$(function(){
    $('.slide-2 .icon li').not('.up,.down').mouseenter(function(){
        $('.slide-2 .info').addClass('hover');
        $('.slide-2 .info li').hide();
        $('.slide-2 .info li.'+$(this).attr('class')).show();//.slide .info li.qq
    });
    $('.slide-2').mouseleave(function(){
        $('.slide-2 .info').removeClass('hover');
    });

    $('#btn').click(function(){
        $('.slide-2').toggle();
        if($(this).hasClass('index_cy')){
            $(this).removeClass('index_cy');
            $(this).addClass('index_cy2');
        }else{
            $(this).removeClass('index_cy2');
            $(this).addClass('index_cy');
        }

    });

});