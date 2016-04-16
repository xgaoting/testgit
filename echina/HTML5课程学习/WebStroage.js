/**
 * Created by Administrator on 2016/2/25.
 */
/**
 *sessionStroage的用法
 */
/*function save_stroage(id){
    var data = document.getElementById(id);
    var username = data.value;
    sessionStorage.setItem("message",username);
}
function load_stroage(id){
    var data = document.getElementById(id);
   var username =  sessionStorage.getItem("message");
    msg.innerHTML=username;
}*/
/**
 */
function save_stroage(id){
    var data = document.getElementById(id);
    var username = data.value;
    localStorage.setItem("message",username);
}
function load_stroage(id){
    var data = document.getElementById(id);
    var username =  localStorage.getItem("message");
    msg.innerHTML = username;
}