var ems = document.querySelectorAll(".tc-green");//内容a标签
var linkactive=document.getElementById("linkactive");//首页
var outerUl=document.getElementById("outerul");//首页外层ul元素
/**
 * 改变字体的颜色和背景
 * @param color:选择的颜色
 */
function changeColor(color){
    var i,len;
    clearCookie("hao123");
    for(i=0,len=ems.length;i<len;i++)
    {
        linkactive.style.backgroundColor=color;
        outerUl.style.borderTopColor=color;
        ems[i].style.color=color;
        setCookie("hao",color,10000);
    }
}
/**
 * 获取cookie中name的值
 * @param name
 * @returns {boolean}
 */
function getCookie(name) {
 var nameEQ = name + "=";
     var ca = document.cookie.split(';');    //把cookie分割成组
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];                      //取得字符串
       while (c.charAt(0)==' ') {          //判断一下字符串有没有前导空格
          c = c.substring(1,c.length);      //有的话，从第二位开始取
          }
       if (c.indexOf(nameEQ) == 0) {       //如果含有我们要的name
          return unescape(c.substring(nameEQ.length,c.length));    //解码并截取我们要值
             }
       }
 return false;
  }
/**
 * 设置cookie值
 * @param name cookie名称
 * @param value 对应的值
 * @param seconds cookie有效时间
 */
function setCookie(name, value, seconds) {
     seconds = seconds || 0;   //seconds有值就直接赋值，没有为0。
    var expires = "";
     if (seconds != 0 ) {      //设置cookie生存时间
        var date = new Date();
     date.setTime(date.getTime()+(seconds*1000));
       expires = "; expires="+date.toGMTString();
         }
    document.cookie = name+"="+escape(value)+expires+"; path=/";   //转码并赋值
   }
/**
 * 清除cookie中name的值
 * @param name
 */
function clearCookie(name) {
    setCookie(name, "", -1);
    }
/**
 * 载入完毕触发的时间
 */
function load(){
    changeColor(getCookie('hao'));
}