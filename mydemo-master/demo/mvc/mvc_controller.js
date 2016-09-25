/**
 * Created by Hover on 2016/9/11.
 */
function EmailController(model,view) {
    this.model = model;
    this.view = view;
}
EmailController.prototype = {
    initialize:function () {
        var modelData =this.model.getAll();
        this.view.render(modelData);
        this.bindEvents();
    },


    bindEvents:function () {
        var that =this;
        observer.subscribe("view.email-view.add",function(email){
            that.addEmail(email);
        });
        observer.subscribe("view.email-view.remove",function(email){
            that.removeEmail(email);
        })
    },

    addEmail:function (email) {
        this.model.add(email);
    },
    removeEmail:function (email) {
        this.model.remove(email);
    }

};