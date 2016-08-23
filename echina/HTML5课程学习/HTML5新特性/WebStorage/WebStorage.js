/**
 * Created by Administrator on 2016/8/12.
 */
//-----sessionStorage保存数据-----------
/*function saveStorage(id){
    var target = document.getElementById(id);
    var str = target.value;
    //保存数据
    sessionStorage.setItem('message',str);
}
function loadStorage(id){
    var target = document.getElementById(id);
    //读取数据
    var msg = sessionStorage.getItem('message');
    target.innerHTML = msg;
}*/
//--------localStorage保存数据-----------
function saveStorage(id){
    var target = document.getElementById(id);
    var str = target.value;
    //保存数据
    localStorage.setItem('message',str);
}
function loadStorage(id){
    var target = document.getElementById(id);
    //读取数据
    var msg = localStorage.getItem('message');
    target.innerHTML = msg;
}