/**
 * Created by Hover on 2016/9/15.
 * 职责链模式：
 *          场景：当基于一个相同类的若干个类可以相应地处理某项请求或调用时。
 *          运作: 首先该项请求会被传递给某个对象 ，如果该对象不是能处理该请求的最合适的对象。
 *          则会把该请求传递至另一个另一个对象；
 *          数据结构：基于链表：
 *
 */
var Loglevel = {
    INFO:"INFO",
    WARN :"WARN",
    ERROR:"ERROR"
},
    log;
/**
 *
 * @param logLevel 匹配符 用来判断是否会当前对象是否会接受请求
 * @constructor
 */
function LogFormatter(logLevel) {
    this.logLevel = logLevel;
}
/**
 * nextInChain 职责链中的下一个对象
 * setNextInChain：用来设置nextInChain
 * @type {{nextInChain: null, setNextInChain: LogFormatter.setNextInChain, createLogMesage: LogFormatter.createLogMesage}}
 */
LogFormatter.prototype = {
    nextInChain :null,

    setNextInChain : function(next){
        this.nextInChain = next;
    },

    createLogMesage:function (message,logLevel) {

        var returnValue ;
        if(this.logLevel === logLevel){
            console.log("jinlail")
            if(logLevel === Loglevel.ERROR) {
                returnValue = logLevel + ":" + message.toUpperCase();
            }else if(logLevel ===Loglevel.WARN){
                console.log("hh")
                returnValue = logLevel + ":" +message;
            }else{
                returnValue = message;
            }

        }else if(this.nextInChain){
            returnValue = this.nextInChain.createLogMesage(message,logLevel);
        }
        return returnValue;
    }
};


log = (function(){
    var logs = [],
        infoLogger = new LogFormatter(Loglevel.INFO),
        warnLogger = new LogFormatter(Loglevel.WARN),
        errorLogger = new LogFormatter(Loglevel.ERROR),
        logger = errorLogger;

    errorLogger.setNextInChain(warnLogger);

    warnLogger.setNextInChain(infoLogger);

    return {
        getLogs :function (){
            return logs.join("\n");
        },

        message:function (message,logLevel){
            var logMessage = logger.createLogMesage(message,logLevel);
            logs.push(logMessage);
        }
    }
}());

log.message("something vary bad happened ",Loglevel.ERROR);
log.message("something bad happened ",Loglevel.WARN);
log.message("something happened ",Loglevel.INFO);

console.log(log.getLogs());

