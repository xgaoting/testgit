/**
 * Created by Administrator on 2016/7/20.
 */
var box1Div,msgDiv,img1,box2Div;
window.onload = function(){
    box1Div = document.getElementById('box');
    box2Div = document.getElementById('box2');
    msgDiv = document.getElementById('msg');
    img1 = document.getElementById('img');
    /*box1Div.ondragenter = function(e){
        showObj(e);
    }*/
    //阻止默认事件
    box1Div.ondragover = function(e){
        e.preventDefault();
    }
    box2Div.ondragover = function(e){
        e.preventDefault();
    }
    img1.ondragstart = function(e){
        e.dataTransfer.setData('imgId','img');
    }
    box1Div.ondrop =dropImghandler;
    box2Div.ondrop =dropImghandler;

}
function dropImghandler(e){
    showObj(e.dataTransfer);
    e.preventDefault();
    var img = document.getElementById(e.dataTransfer.getData('imgId'));
    e.target.appendChild(img);
}
function showObj(obj){
    var s = "";
    for(var k in obj){
        s+=k+":"+obj[k]+"<br/>"
    }
    msgDiv.innerHTML =s;
}