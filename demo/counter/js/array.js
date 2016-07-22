var arr   = ["a","x","b","d","m","a","k","m","p","j","a"];
var count = {};
var pos   = {};
//遍历arr，统计每个字母出现次数且记录位置
arr.forEach(function(value, index){
    if(count[value]){
        count[value] ++;
        pos[value] += ","+index;
    } else {
        count[value] = 1;
        pos[value]   = ""+index;
    }
});
console.log(count);
console.log(pos);

//获取出现最多的字母
var max = 0;
var letter;
for(i in count){
    if(count[i] > max ){
        max    = count[i];
        letter = i;
    }
}

console.log("最多的是：" + letter);
console.log("位置分布：" + pos[letter]);