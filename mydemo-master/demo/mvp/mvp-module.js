function EmailModel(data){
    //定义一个方法 用于添加一个新email地址至所保存的email。如果没有，则默认为空数组

    this.emailAddresses = data || [];
}

EmailModel.prototype = {
//定义一个方法用于添加email地址；-p07
    add:function (email) {
        //插入首部
        this.emailAddresses.unshift(email);
        // 广播一个事件 至该系统 ，之处已经添加一个新的email地址，并向那些正在监听此事件的其他代码传入该email地址
        observer.publish("model.email-address.added",email);
    },
    //定义一个方法，用于从所保存的email地址列表中一处一个email
    remove:function (email) {
    var index = 0,
        length = this.emailAddresses.length;
    for(;index<length;index++){
        if(this.emailAddresses[index]===email){
            this.emailAddresses.splice(index,1);
            observer.publish("model.email-address.removed",email);
            break;
        }

    }
},
    getAll:function () {
        return this.emailAddresses;
    }

};