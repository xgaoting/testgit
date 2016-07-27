/**
 * Created by Administrator on 2016/7/21.
 */
var WIDTH_CANVAS = 500,HEIGHT_CANVAS =500;
window.onload = function(){
    createCanvas();
    //drawRect();
    drawImage();
}
function createCanvas(){
    document.body.innerHTML = "<canvas id = \"mycanvas\" width = \""+WIDTH_CANVAS+"\" height = \""+HEIGHT_CANVAS+"\"</canvas>";
    mycanvas = document.getElementById('mycanvas');
    context = mycanvas.getContext('2d');
}
function drawRect(){
    context.fillStyle = "#ff0000";
   // context.rotate(45);
   // context.translate(200,200);
    context.scale(2,0.5);
    context.fillRect(0,0,200,200);
}
/*绘制图片*/
function drawImage(){
    var img = new Image();
    img.onload = function(){
        context.drawImage(img,0,0);
    }
    img.src = "Canvas.png";
}