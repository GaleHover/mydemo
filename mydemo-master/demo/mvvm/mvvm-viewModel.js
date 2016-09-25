/**
 * 通过自定义的h5 标签，data 属性 ，观察者模式 ， 以类的的方式呈现 ，连接视图和模型
 * 方法：
 *      initialize():
 *      bindEvents();
 * 属性：
 *      模型变量
 *      视图变量
 *      视图通用方法 对象字面量的形式呈现
 * Created by Hover on 2016/9/15.
 */

function EmailViewModel(model,view) {
    var that = this;

    this.model = model;
    this.view = view;

    this.methods = {
        addEmail :function (email) {
            that.model.add(email);
        },
        removeEmail:function (email) {
            that.model.remove(email);
        }
    }
}

EmailViewModel.prototype.initialize = function () {
    this.listElement = this.view.querySelectorAll("[data-loop]")[0];

    this.listItemElement = this.listElement.getElementsByTagName("li")[0];

    this.bindForm();

    this.bindList();

    this.bindEvents()
};

EmailViewModel.prototype.bindForm = function () {
    var that = this,
        form = this.view.querySelectorAll("[data-submit]")[0];
    formSubmitMethod = form.getAttribute("data-submit");

        // 这个地方看可以使用querySeletor()
    form.addEventListener("submit",function(evt){
        evt.preventDefault();
        var email = form.getElementsByTagName("input")[0].value;

        if(that.methods[formSubmitMethod]&&typeof that.methods[formSubmitMethod] === "function"){
            that.methods[formSubmitMethod](email);
        }

    });
};

EmailViewModel.prototype.bindList= function(){
    var data = this.model.getAll(),
        index = 0,
        length =data.length,
        that =this;
    function makeClickFunction(email) {
        return function (evt) {
            var methodName = evt.target.getAttribute("data-click");
            if(that.methods[methodName]&& typeof that.methods[methodName]==="function"){
                that.methods[methodName] (email);
            }
        };
    }
    this.listElement.innerHTML = "";
    for (;index<length;index++){
        email = data[index];
        newListItem = this.listItemElement.cloneNode(true);
        newListItem.querySelectorAll("[data-text]")[0].innerHTML = email;
        newListItem.querySelectorAll("[data-click]")[0]
            .addEventListener("click",makeClickFunction(email),false);
        this.listElement.appendChild(newListItem);
    }

};

EmailViewModel.prototype.clearInputField = function () {
    var textField = this.view.querySelectorAll("[type = text]")[0];
    textField.value = "";
};

EmailViewModel.prototype.bindEvents = function () {
    var that = this;
    function updateView() {
        that.bindList();

        that.clearInputField();
    }

    observer.subscribe("model.email-address.added",updateView);
    observer.subscribe("model.email-address.removed",updateView);

};