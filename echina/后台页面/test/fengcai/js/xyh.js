/**
 * Created by Administrator on 2016/3/23.
 */
$(document).ready(function() {
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    //当点击跳转链接后，回到页面顶部位置
    $(".one").click(function() {
        $('body,html').animate({
                scrollTop: 0
            },
            1000);
        return false;
    });
    $(".two").click(function() {
        $('body,html').animate({
                scrollTop: 1050
            },
            1000);
        return false;
    });
    $(".three").click(function() {
        $('body,html').animate({
                scrollTop: 1650
            },
            1000);
        return false;
    });
    $(".four").click(function() {
        $('body,html').animate({
                scrollTop: 2320
            },
            1000);
        return false;
    });
    $(".five").click(function() {
        $('body,html').animate({
                scrollTop: 3430
            },
            1000);
        return false;
    });
    $(".six").click(function() {
        $('body,html').animate({
                scrollTop: 4025
            },
            1000);
        return false;
    });
    $(".seven").click(function() {
        $('body,html').animate({
                scrollTop: 4770
            },
            1000);
        return false;
    });
    $(".eightt").click(function() {
        $('body,html').animate({
                scrollTop: 5230
            },
            1000);
        return false;
    });
    $(".nine").click(function() {
        $('body,html').animate({
                scrollTop: 5800
            },
            1000);
        return false;
    });
});