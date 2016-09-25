/**
 * Created by Hover on 2016/9/11.
 */
// 模型 ：表示系统的数据 在此系统中 我们希望能管理屏幕上 的一个email地址列表。看可以从吸纳时的liebi9ao中把email 地址进行添加或删除。

function EmailModel(data){

// 创建一个储存数组 用于保存email地址 如果在实例化的时候没有提供 则初始化为新数组
    this.emailAddresses = data ||[];

}

EmailModel.prototype= {
    // 把新email地址添加至数组的开始位置
    add: function (email) {
        this.emailAddresses.unshift(email);
        observer.publish("model.email-address.added", email);
    },
    remove: function (email) {
        var index = 0,
            length = this.emailAddresses.length;
        for (; index < length; index++) {
            if (this.emailAddresses[index] === email) {
                this.emailAddresses.splice(index, 1);
                observer.publish("model.email-address.removed", email);
                break;
            }
        }
    },
    getAll :function () {
        return this.emailAddresses;
    }

};