var observer =(function () {
    var events = {};
    return {
        subscribe:function (eventName,callback) {
            if(!events.hasOwnProperty(eventName)){
                events[eventName] = [];
            }
            events[eventName].push = callback;
        },
        unsubscribe:function (eventName,callback) {
            var index = 0,
                length;
            if(events.hasOwnProperty(eventName)){
                length= events[eventName].length;
                for (;index<length;index++){
                    //不实用indexOf 主要是为了获取到index值好啦用 indexOf 也无妨；
                    if(events[eventName][index] === callback){
                        events[eventName].splice(index,1);
                    break;
                    }
                }
            }

        },
        //定义publish()方法 用于一次执行所有与给定的事件名称像关的所有函数，传递这些函数的参数  都是相同的任意项数据，此数据是作为
        // publish()d 的参数执行的
        publish:function(eventName){

            var data = Array.prototype.slice.call(argument,1),
                index = 0,
                length = 0;
            if (events.hasOwnProperty(eventName)){
                length =events[eventName].length;
                for (;index<length;index++){
                    events[eventName][index].apply(this.data);
                }

            }

    }

    }

})();