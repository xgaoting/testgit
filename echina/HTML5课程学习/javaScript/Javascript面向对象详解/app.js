/**
 * Created by Administrator on 2016/5/7.
 */
/*（function()）{}此为对信息的封装*/
(function () {
    var n = "zhanghui";
    function person(name){
        this._name = name;
    }
    person.prototype.say = function (){
        alert("hell word"+this._name+n);
    }
    window.person = person;
}());
(function(){
    function student(name){
        this._name = name;
    }
    student.prototype = new person();
    var superSay = student.prototype.say;
    student.prototype.say = function(){
        superSay.call(this);
        alert("stu -hello word"+this._name);
    }
    window.student = student;
}());
var s = new student("gaoting");
s.say();