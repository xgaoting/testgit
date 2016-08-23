/**
 * Created by Administrator on 2016/8/3.
 */
var canvas;
var stage;
var img =new Image();
var sprite;
var context;
window.onload = function () {
    canvas = document.getElementById('canvas');
    /*context = canvas.getContext('2d');
    context.fillStyle = "#000000";
    context.fillRect(0,0,1000,500);*/
    stage = new createjs.Stage(canvas);
    stage.addEventListener('stagemousedown',clickCanvas);//鼠标点击时效果
    stage.addEventListener('stagemousemove',moveCanvas);//鼠标移动时效果
    var data = {
        images:["0447e2c243854221cba4ed14a03f788a.jpg"],//图片资源
        frames:{width:20,height:20,regX:10,regY:10}//序列，里边是图片的变化方式，宽度，高度，变化区域X,变化区域y
    }
    sprite = new createjs.Sprite(new createjs.SpriteSheet(data));//sprite会处理data序列组成动画效果
    createjs.Ticker.setFPS(20);//以什么方式进行改变
    createjs.Ticker.addEventListener('tick',tick);//序列监听事件
}
function tick(e){
    var t = stage.getNumChildren();
    for(var i = t-1;i>0;i--){
        var s = stage.getChildAt(i);
        s.vY += 2;
        s.vX +=1;
        s.x += s.vX;
        s.y += s.vY;
        s.scaleX = s.scaleY =s.scaleX+ s.vS;
        s.alpha += s.vA;
        if(s.alpha<=0|| s.y > canvas.height){
            stage.removeChildAt(i);
        }
    }
    stage.update(e);
}
function clickCanvas(e){
    addS(Math.random()*200+100,stage.mouseX,stage.mouseY,2);
}
function moveCanvas(e){
    addS(Math.random()*2+1,stage.mouseX,stage.mouseY,1);

}
function addS(count,x,y,speed){
    for(var i =0;i<count;i++){
        var s = sprite.clone();//获取实例对象
        s.x = x;
        s.y = y;
        s.alpha = Math.random()*0.5+0.5;
        s.scaleX = s.scaleY = Math.random()+0.3;
        var a = Math.PI*2 * Math.random();//变化的范围
        var v = (Math.random()-0.5)*30*speed;//变化的速度
        s.vX = Math.sin(a)*v;//曲线的变化
        s.vY = Math.cos(a)*v;//曲线的变化
        s.vS = (Math.random()-0.5)*0.2;//scale
        s.vA = -Math.random()*0.05 - 0.01;//alpha
        stage.addChild(s);
    }
}