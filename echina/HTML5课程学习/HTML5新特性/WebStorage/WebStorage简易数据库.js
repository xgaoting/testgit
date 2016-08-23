/**
 * Created by Administrator on 2016/2/25.
 */
function saveStorage(){
    var date = new Object;
    date.name = document.getElementById("name").value;
    date.email = document.getElementById("email").value;
    date.tel = document.getElementById("tel").value;
    date.memo = document.getElementById("memo").value;
    var str = JSON.stringify(date);
    localStorage.setItem(date.name,str);
    alert("数据已经保存");
}
function findStorage(id){
    var find = document.getElementById('find').value;
    var str = localStorage.getItem(find);
    var data = JSON.parse(str);
    var result = "姓名："+data.name+"<br>";
        result +="姓名："+data.email+"<br>"
        result +="姓名："+data.tel+"<br>"
        result +="姓名："+data.memo+"<br>"
    var target = document.getElementById(id);
    target.innerHTML = result;
}