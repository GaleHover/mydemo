/**
 * 备忘录模式 已静态的形式在内存中定义对象数据的储存，
 *           这样在代码的执行过程的后期就可以对对象数据进行恢复。
 *
 * 定义方式：通过类方式来定义 ，通过json格式储存
 *
 */

function Memento() {
    this.storage = {};
}

Memento.prototype.saveState = function (key,obj) {
    this.storage[key] = JSON.stringify(obj);
} ;

Memento.prototype.restorState = function (key) {
    var output = {};

    if(this.storage.hasOwnProperty(key)){
        output = JSON.parse(output);
    }
    return output;
};



