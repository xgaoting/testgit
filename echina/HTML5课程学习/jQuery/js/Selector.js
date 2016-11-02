/**
 * Created by Administrator on 2016/10/27.
 */
$(document).ready(function(){
    $("button").click(function(){
        /*所有内容都被修改了*/
       /* $("p").text("p元素内容被修改了");*/
        /*指定id元素被修改了*/
       /* $("#pid").text("p元素内容被修改了");*/
        /*指定class元素被修改了*/
        $(".pclass").text("p元素内容被修改了");
    })
});