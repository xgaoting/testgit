/**
 * Created by Administrator on 2016/2/25.
 */
function saveStorage(id){
    var data = document.getElementById(id).value;
    var time = new Date().getTime();
    localStorage.setItem(time,data);
    alert("数据已经保存");
    loadStroage("msg");
}
function loadStroage(id){
    var result = "<table border='1'>"
    for(var i = 0;i<localStorage.length;i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key);
        result += "<tr><td>"+i+"</td><td>"+value+"</td><td>"+date+"</td></tr>"
    }
    result += "</table>";
    var target = document.getElementById(id);
    target.innerHTML = result;
}
function clearStorage(){
    localStorage.clear();
    alert("数据已经删除");
    loadStroage("msg");
}