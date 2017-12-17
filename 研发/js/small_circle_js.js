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
var num1=0;


if (localStorage.getItem("ta")!="电子产品"){
  tachange1_circle.style.display="none";
  move.style.top="1.333333rem";
}
if (localStorage.getItem("ta2")!="美妆"){
  tachange2_circle.style.display="none";
}


var changeblue=function (x,name,circle_name) {
  var num=0;
  x.onclick=function () {
    if (num1 < 3) {
      if ((num % 2) == 0) {
        x.style.color = "white";
        x.style.backgroundColor = "#2194ff";
        localStorage.setItem(name, circle_name)
      }
      if ((num % 2) != 0) {
        x.style.color = "#2194ff";
        x.style.borderColor = "#2194ff";
        x.style.backgroundColor = "white"
        localStorage.removeItem(name);
      }
      num += 1;
      num1 += 1
      if (num1 >3) {
        change.style.display = "block";
        change.style.zIndex = "1000";
        $("body").css({"background-color":"black","opacity":"0.5"});
        $(".tooltip").css("opacity","1");
      }
    }
  }
};


var changeblue2=function (x,name,circle_name) {
  var num=0;
  x.onclick=function () {
    if (num1 < 3) {
      if ((num % 2) == 0) {
        x.style.color = "white";
        x.style.backgroundColor = "#ff6ea4"
        localStorage.setItem(name, circle_name);
      }
      if ((num % 2) != 0) {
        x.style.color = "#ff6ea4";
        x.style.borderColor = "#ff6ea4";
        x.style.backgroundColor = "white";
        localStorage.removeItem(name);
      }
      num += 1;
    }
    num1 += 1;
      if (num1 >3) {
        change.style.display = "block";
        change.style.zIndex = "1000"
        $("body").css({"background-color":"black","opacity":"0.5"});
        $(".tooltip").css("opacity","1");
      }

  }
};
recover.onclick=function () {
  change.style.display="none";
  $("body").css({"background-color":"white","opacity":"1"});
}
changeblue(circle_change1,"sta1","手机");
changeblue(circle_change2,"sta2","电脑");
changeblue(circle_change3,"sta3","耳机");
changeblue2(circle_change4,"sta4","口红");
changeblue2(circle_change5,"sta5","香氛");
changeblue2(circle_change6,"sta6","护肤");



























