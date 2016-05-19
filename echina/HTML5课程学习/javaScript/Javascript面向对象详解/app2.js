/**
 * Created by Administrator on 2016/5/8.
 */
(function(){
    function Person(name){
        var _this = {};
        _this._name = name;
        _this.sayHello = function(){
            alert("hello"+_this._name);
        }
        return _this;
    }
    window.Person = Person;
}());
(function () {
    function Teacher(name){
        var _this2 = new Person(name);
        var superSayHello = _this2.sayHello;
        _this2.sayHello = function (){
            superSayHello.call(_this2);
            alert("t_hello"+_this2._name);
        }
        return _this2;
    }
    window.Teacher = Teacher;
}());

var t =  Teacher("刘青山");
t.sayHello();