var tachange1_circle=document.getElementById("small_font1");
var tachange2_circle=document.getElementById("small_font2");
var circle_change1=document.getElementById("cicle1");
var circle_change2=document.getElementById("cicle2");
var circle_change3=document.getElementById("cicle3");
var circle_change4=document.getElementById("cicle4");
var circle_change5=document.getElementById("cicle5");
var circle_change6=document.getElementById("cicle6");
var move=document.getElementById("small_font2");
var change=document.getElementsByClassName("tooltip")[0];
var recover=document.getElementsByClassName("recover")[0];
var background=document.getElementsByClassName("tooltip-background")[0];
var num1=0;


if (localStorage.getItem("ta")!="电子产品"){//根据前面页面选的存储的localstorage判断是否保留美妆和电子产品小类
  tachange1_circle.style.display="none";
  move.style.top="1.333333rem";
}
if (localStorage.getItem("ta2")!="美妆"){
  tachange2_circle.style.display="none";
}


function judenum1 () {//判断被选定小圈的个数
  num1=0;
  function judecolor(x) {
    if ((x.style.color == "white")&&(x.style.display!="none")) {
      num1 += 1;
    }
  }
  judecolor(circle_change1);
  judecolor(circle_change2);
  judecolor(circle_change3);
  judecolor(circle_change4);
  judecolor(circle_change5);
  judecolor(circle_change6);
}


var changeblue=function (x,name,circle_name) {//根据被选的小圈个数以及每个小圈被点击的次数判断是否弹出警告以及小圈的颜色变化
  var num=0;
  x.onclick=function () {
      num1=0;//每次点击都初始化
      judenum1();//每次点击都判断被选定小圈的个数
      if ((num1)<3) {
        if (num % 2 == 0) {
          x.style.color = "white";
          x.style.backgroundColor = "#2194ff";
          localStorage.setItem(name, circle_name)
        }
      }
        if (num % 2 != 0) {
          x.style.color = "#2194ff";
          x.style.borderColor = "#2194ff";
          x.style.backgroundColor = "white"
          localStorage.removeItem(name);

        }
        num+=1;
      if (num1==3){//被选中的个数为3是，判断点击的小圈时候被选中
      if (num%2!=0) {
        $(".tooltip-background").css("display", "block");
      }
      if (num%2==0){
        $(".tooltip-background").css("display","none");
      }
    }
  }
};


var changeblue2=function (x,name,circle_name) {//同changeblue的方法
  var num=0;
  x.onclick=function () {
    num1=0;
    judenum1();
    if (num1 <3) {
      if (num % 2 == 0) {
        x.style.color = "white";
        x.style.backgroundColor = "#ff6ea4"
        localStorage.setItem(name, circle_name);
      }
    }
      if (num % 2 != 0) {
        x.style.color = "#ff6ea4";
        x.style.borderColor = "#ff6ea4";
        x.style.backgroundColor = "white";
        localStorage.removeItem(name);
      }
      num += 1;

    if (num1==3){
      if (num%2!=0) {
        $(".tooltip-background").css("display", "block");
      }
      if (num%2==0){
        $(".tooltip-background").css("display","none");
      }
    }

  }
};
recover.onclick=function () {//提示框被点击  “我知道了”后继续隐藏
  $(".tooltip-background").css("display","none");
}
changeblue(circle_change1,"sta1","手机");
changeblue(circle_change2,"sta2","电脑");
changeblue(circle_change3,"sta3","耳机");
changeblue2(circle_change4,"sta4","口红");
changeblue2(circle_change5,"sta5","香氛");
changeblue2(circle_change6,"sta6","护肤");



























