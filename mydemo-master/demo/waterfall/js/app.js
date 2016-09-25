/**
 * 初始化数据源，实现滚动加载
 */
$(document).ready(function(){

        imgLocation();

        //定义数据源
        var dataImg={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},{"src":"16.jpg"},{"src":"18.jpg"}]};

        window.onscroll= function(){
            if (scrollside()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        }
    });

/**
 * 添加图片，把图片放到当前高度最小的地方
 */
function imgLocation(){
    var box = $(".box");
    //取所有的img元素
    var boxWidth = box.eq(0).width();
    //获取第一个元素的宽度
    var num = Math.floor($(window).width()/boxWidth);
    //计算当前浏览器窗口最大的可放的数量
    var boxArr=[];
    //设置一个空数组
    box.each(function (index,value){
        //console.log(index+"--"+value);
        var boxHeight =box.eq(index).height();
        if(index<num){
            boxArr[index]=boxHeight;
            //console.log(boxHeight)
            //把第一行的元素放进空数组中
        }

        else{
            //从第二行开始开始排列 按照以下规则 首先把元素放进最爱的元素中
            //inArray(是确定第一个参数在数组中的位置) 没有返回-1
            //这个地方非常关键 可以利用apply的特性 直接对数组进行操作

            // 可以取得最小值 以及最大值 找到值
            var minboxHeight= Math.min.apply(null, boxArr);

            //console.log(minboxHeight);
            // 根据值找到index

            var minIndex = $.inArray(minboxHeight,boxArr);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minIndex).position().left
            });
            boxArr[minIndex]+=box.eq(index).height();
        }
    });

}
/**滚动加载
* 通过window来监听一个鼠标的滚动
 *加载数据的时候在边缘进行加载
 *创建一个box对象
 *@return 返回boolean类型 ，判断是否到可以翻转的位置
 */
function scrollside(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}
