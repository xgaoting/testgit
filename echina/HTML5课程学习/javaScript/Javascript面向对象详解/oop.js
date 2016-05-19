/**
 * Created by Administrator on 2016/5/6.
 */
/*var person ={
    name:"gaoting",
    age:32,
    eat:function(){
        alert("能吃");
    }
}
 alert(person.eat);
*/
/*使用函数构造器*/
function person(){

}
person.prototype = {
    name: "zhanghui",
    age:31,
    eate:function (){
        alert("我在吃");
    }
}
    var p =new person();
alert(p.eate);