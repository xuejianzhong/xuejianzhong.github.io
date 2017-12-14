/**
 * Created by DELL on 2017/6/12.
 */
function checkName(){/*----键盘按下事件-----*/
    var a=document.getElementById("name").value;
    if (a=="") {
        document.getElementById("nameSpan").innerHTML="<span>姓名不能为空</span>";
    }else if (a.length<2) {
        document.getElementById("nameSpan").innerHTML="<span>姓名不少于两位</span>";
    }else if (a.length<5) {
        document.getElementById("nameSpan").innerHTML="<img src='images/11_03.png'/>";
    }else{
        document.getElementById("nameSpan").innerHTML="<span>姓名太长</span>";
    }
}

function checkPhoneNum(){
    var a=document.getElementById("phoneNum").value;
    var c=/^1\d{10}$/;
    if (c.test(a)){
        document.getElementById("phoneNumSpan").innerHTML="<img src='images/11_03.png'/>";
    }else{
        document.getElementById("phoneNumSpan").innerHTML="<span>手机号不符合</span>";
    }
}

function checkEmail(){
    var a=document.getElementById("email").value;
    var b=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (b.test(a)){
        document.getElementById("emailSpan").innerHTML="<img src='images/11_03.png'/>"
    }else{
        document.getElementById("emailSpan").innerHTML="<span>邮箱不符合</span>"
    }
}

function jianyi1(){
    var a=document.getElementById("jianyi").value;
    if (a<=4){
        document.getElementById("jianyiSpan").innerHTML="<span>不能少于四位</span>"
    }else if (!isNaN(a)){
        document.getElementById("jianyiSpan").innerHTML="<span>不能为纯数字</span>"
    }else{
        document.getElementById("jianyiSpan").innerHTML="<img src='images/11_03.png'/>"
    }
}

function checkAll(){
    var a=document.getElementById("jianyi").value;
    if(a==""){
        alert("请留下您宝贵的意见");
        return false;
    //}else if (b=="") {
    //    alert("请填完整");
    //    return false;
    //}else if (c=="") {
    //    alert("请填完整");
    //    return false;
    //}else if (d="") {
    //    alert("请填完整");
    //    return false;
    //}else if (e="") {
    //    alert("请填完整");
    //    return false;
    //}else{
        return true;
    }
}


