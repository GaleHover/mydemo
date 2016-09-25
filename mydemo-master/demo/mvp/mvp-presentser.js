/**
 * Created by Hover on 2016/9/13.
 */
/**
 * 连接模型和视图 ，使得两者完全解耦 ,表示器负责视图所有事件的订阅；
 * @param model
 * @param view
 * @constructor
 */
function EmailPresenter(model,view){
    this.model = model;
    this.view = view;
    console.log(this.model+"first");
}

EmailPresenter.prototype={
    initialize:function () {

        var modelData = this.model.getAll();

        this.view.render(modelData);

        this.bindEvents();
    },


    bindEvents:function () {
        var that = this;
        observer.subscribe("view.email-view.add",function(email){
            that.model.add(email);
        });
        observer.subscribe("view.email-view.remove",function (email) {
            that.model.remove(email);
        });
        observer.subscribe("model.email-address.added",function(email){
            that.view.addEmail(email);
        });
        observer.subscribe("model.email-address.removed",function(email){
            that.view.removeEmail(email);
        });
    }
};
