document.oncontextmenu=new Function("event.returnValue=false;");
document.onselectstart=new Function("event.returnValue=false;");
var _string=new Array();//存放操作数
var _type;//存放操作符
//存放操作数并且显示

function typetoinput(num)
{
    input=document.getElementById("input-box");

    if(input.name=="type")
    {
        input.value=" ";
        input.name=" ";
    }
    if(num!="."&&input.value[0]==0&&input.value[1]!=".")
    {
        input.value=num;
    }
    //else if(num=="."&&input.value.indexOf(".")>-1)
    //{
    //    input.value=input.value;
    //}
    else if(input.value=="Infinity"||input.value=="NaN")
    {
        input.value="";
        input.value+=num;
    }
    else
    {
        input.value+=num;
    }
}
//计算结果
function operator(type)
{
    switch (type)
    {
        case "clear":
            input.value="0";
            _string.length=0;
            break;
        case "backspace":
            if(checknum(input.value)!=0)
            {
                input.value=input.value.replace(/.$/,'');
                if(input.value=="")
                {
                    input.value="0";
                }
            }
            break;
        case "opposite":
            if(checknum(input.value)!=0)
            {
                input.value=-input.value;
            }
            break;
        case "percent":
            if(checknum(input.value)!=0)
            {
                input.value=input.value/100;
            }
            break;
        case "pow":
            if(checknum(input.value)!=0)
            {
                input.value=Math.pow(input.value,2);
            }
            break;
        case "sqrt":
            if(checknum(input.value)!=0)
            {
                input.value=Math.sqrt(input.value);
            }
            break;
        case "plus":
            if(checknum(input.value)!=0)
            {
                _string.push(input.value);
                _type="plus";
                input.value="+";
                input.name="type";
            }
            break;
        case "minus":
            if(checknum(input.value)!=0)
            {
                _string.push(input.value);
                _type="minus";
                input.value="-";
                input.name="type";

            }
            break;
        case "multiply":
            if(checknum(input.value)!=0)
            {
                _string.push(input.value);
                _type="multiply";
                input.value="*";
                input.name="type";
                count();

            }
            break;
        case "divide":
            if(checknum(input.value)!=0)
            {
                _string.push(input.value);
                _type="divide";
                input.value="/";
                input.name="type";

            }
            break;
        case "sin":
            if(checknum(input.value)!=0)
            {
                input.value=parseFloat(Math.sin(input.value*Math.PI/180).toFixed(8));
            }
            break;
        case "cos":
            if(checknum(input.value)!=0)
            {
                input.value=parseFloat(Math.cos(input.value*Math.PI/180).toFixed(8));
            }
            break;
        case "result":
           count();

    }
}
//得出结果
function count(){
    if(checknum(input.value)!=0)
    {
        _string.push(input.value);
        if(parseInt(_string.length)%2!=0)
        {
            _string.push(_string[_string.length-2]);
        }
        if(_type=="plus")
        {
            input.value=parseFloat(Number(parseFloat(result(_string)[0])+parseFloat(result(_string)[1])).toFixed(5));
            input.name="type";
        }
        else if(_type=="minus")
        {

            input.value=parseFloat(Number(parseFloat(result(_string)[0])-parseFloat(result(_string)[1])).toFixed(5));
            input.name="type";
        }
        else if(_type=="multiply")
        { console.log(_string);
            input.value=parseFloat(Number(parseFloat(result(_string)[0])*parseFloat(result(_string)[1])).toFixed(5));
            input.name="type";
        }
        else if(_type=="divide")

        {
            console.log(_string);
            var  answer = result(_string);
            if (answer[1]!=0){
                input.value=Number(parseFloat(answer[0])/parseFloat(answer[1])).toFixed(5);
                input.name="type";
            }
            else{
                input.value=parseFloat(answer[0])/parseFloat(answer[1]);

                alert("除数不为0");
            }

        }
    }
}
//取最后两个操作数
function result(value)
{
    var result=new Array();
    if(value.length%2==0)
    {
        result.push((value[value.length-2]));
        result.push((value[value.length-1]));
        return (result);
    }
    else
    {
        result.push((value[value.length-1]))
        result.push((value[value.length-2]))

        return (result);
    }
}
//检查操作符是不是基本运算符
function checknum(inputvalue)
{
    if(inputvalue=="+"||inputvalue=="-"||inputvalue=="*"||inputvalue=="/")
    {
        return 0;
    }
}

//捕捉键盘事件
window.document.onkeydown = disableRefresh;
function disableRefresh(evt){
    evt = (evt) ? evt : window.event;
    if (evt.keyCode)
    {
        if(evt.keyCode == 13){operator('result')}
        else if(evt.keyCode == 8){input.focus();window.event.returnValue = false;operator('backspace')}
        else if(evt.keyCode == 27){operator('clear')}
        else if(evt.keyCode == 48){typetoinput('0')}
        else if(evt.keyCode == 49){typetoinput('1')}
        else if(evt.keyCode == 50){typetoinput('2')}
        else if(evt.keyCode == 51){typetoinput('3')}
        else if(evt.keyCode == 52){typetoinput('4')}
        else if(evt.keyCode == 53){typetoinput('5')}
        else if(evt.keyCode == 54){typetoinput('6')}
        else if(evt.keyCode == 55){typetoinput('7')}
        else if(evt.keyCode == 56){typetoinput('8')}
        else if(evt.keyCode == 57){typetoinput('9')}
        else if(evt.keyCode == 96){typetoinput('0')}
        else if(evt.keyCode == 97){typetoinput('1')}
        else if(evt.keyCode == 98){typetoinput('2')}
        else if(evt.keyCode == 99){typetoinput('3')}
        else if(evt.keyCode == 100){typetoinput('4')}
        else if(evt.keyCode == 101){typetoinput('5')}
        else if(evt.keyCode == 102){typetoinput('6')}
        else if(evt.keyCode == 103){typetoinput('7')}
        else if(evt.keyCode == 104){typetoinput('8')}
        else if(evt.keyCode == 105){typetoinput('9')}
        else if(evt.keyCode == 110){typetoinput('.')}
        else if(evt.keyCode == 106){operator('multiply')}
        else if(evt.keyCode == 107){operator('plus')}
        else if(evt.keyCode == 111){operator('divide')}
        else if(evt.keyCode == 109){operator('minus')}
    }
}