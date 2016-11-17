/**
 * Created by Administrator on 2016/11/18.
 */
$(document).ready(function () {
    $(window).on("load",function(){//监听load事件
        imgLocation();
    })
})
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