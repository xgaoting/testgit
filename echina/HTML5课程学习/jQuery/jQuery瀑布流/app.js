/**
 * Created by Administrator on 2016/11/18.
 */
$(document).ready(function () {
    $(window).on("load",function(){//监听load事件
        imgLocation();
        var dataImg = {"data":[{"src":"200-1.jpg"},{"src":"200-2.jpg"},{"src":"200-3.jpg"},{"src":"200-4.jpg"},{"src":"250-1.jpg"},{"src":"250-2.jpg"},{"src":"250-3.jpg"},{"src":"250-4.jpg"}]}
        window.onscroll = function () {
            if(scrollside()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("#container"));//创建class为box的div并将其添加到container当中
                    var content = $("<div>").addClass("content").appendTo(box);//创建class为content的div并将其添加到box当中
                    console.log("./test/"+$(value));
                    $("<img>").attr("src","./test/"+$(value).attr("src")).appendTo(content);//创建图片，并将其添加到content当中
                });
                imgLocation();//重新按照瀑布流的方式进行摆放
            }
        }
    })
})
function scrollside(){
    var box = $(".box");//获取box对象
    var lastboxHeight = box.last().get(0).offsetTop +Math.floor(box.last().height()/2);/*加载图片的界线*/
    var documentHeight = $(document).width();//浏览器的高度
    var scrollHeight = $(document).scrollTop();//滚动条的高度
    return (lastboxHeight<documentHeight+scrollHeight)?true:false;//判断（什么时候进行滚动加载）
}
function imgLocation(){
    var box = $(".box");//获取box对象
    var boxWidth = box.eq(0).width();//获取每一个等宽盒子的宽度
    var num = Math.floor( $(document).width()/boxWidth);//转换为整数
    var boxArr = [];//承放数组的高度，目的就是获取最小高度
    box.each(function(index,value){//遍历盒子
        /*console.log(index+"--"+value);*/
        var boxHeight = box.eq(index).height();//获取每一个盒子的高度
        if(index<num){
            boxArr[index] = boxHeight;//将高度存储在数组当中
           // console.log(boxHeight);
        }else{
            var minboxHeight = Math.min.apply(null,boxArr);//获取最小高度
            /*console.log(minboxHeight);*/
             var minboxIndex = $.inArray(minboxHeight,boxArr);//获取最小高度的位置
            /*console.log(minboxIndex);*/
            /*console.log(value);*/
            $(value).css({//设置最小图片的样式
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();//重新排序，计算最小高度
        }
    })
}