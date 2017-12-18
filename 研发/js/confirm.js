//注释同confirm2（其实可以把他们封装的好点，但是好像参数太多就选择了复制粘贴修改。。。。）
$(document).ready(function(){
  $(".change").click(function(){
    if($("#select1").css("display")=="block"){
      $("#select1").css("display","none");
      $("#select2").css("display","block");
    }
    else{
      $("#select2").css("display","none");
      $("#select1").css("display","block");
    }
  })
});


var name;
var name1;
localStorage.setItem("num","0");
var num=0;
var num2=0;
var select1=document.getElementById("electronics");
var select2=document.getElementById("cosmetics");

if (localStorage.getItem("color")==="white") {
  select1.style.color = localStorage.getItem("color");
  select1.style.backgroundColor = localStorage.getItem("background");
  select1.style.borderColor = localStorage.getItem("bordercolor");
  name='电子产品';
  window.localStorage.setItem("nin",name);
  num=1;
}

var changeblue=function (x) {
  this.x=x;
  x.onclick=function () {
    if (num%2===0) {
      window.localStorage.setItem("color","white");
      window.localStorage.setItem("background","#2194ff");
      name='电子产品';
      window.localStorage.setItem("nin", name);
      x.style.color = window.localStorage.getItem("color");
      x.style.backgroundColor = window.localStorage.getItem("background");

    }
    if (num%2!==0){
      window.localStorage.setItem("color","#2194ff");
      window.localStorage.setItem("background","white");
      window.localStorage.setItem("bordercolor","#2194ff");
      name=null;
      window.localStorage.setItem("nin", name);
      x.style.color=window.localStorage.getItem("color");
      x.style.borderColor=window.localStorage.getItem("bordercolor");
      x.style.backgroundColor=window.localStorage.getItem("background");
    }
    num+=1;

  };
};


if (localStorage.getItem("color2")==="white") {
  select2.style.color = localStorage.getItem("color2");
  select2.style.backgroundColor = localStorage.getItem("background2");
  select2.style.borderColor= localStorage.getItem("bordercolor2");
  name1='美妆';
  window.localStorage.setItem("nin2",name1);
  num2=1;
}

var changeblue2=function (x) {
  this.x=x;
  x.onclick=function () {
    if (num2%2===0) {
      window.localStorage.setItem("color2","white");
      window.localStorage.setItem("background2","#ff6ea4");
      name1='美妆';
      window.localStorage.setItem("nin2", name1);
      x.style.color = window.localStorage.getItem("color2");
      x.style.backgroundColor = window.localStorage.getItem("background2");

    }
    if (num2%2!==0){
      window.localStorage.setItem("color2","#ff6ea4");
      window.localStorage.setItem("background2","white");
      window.localStorage.setItem("bordercolor2","#ff6ea4");
      name1=null;
      window.localStorage.setItem("nin2", name1);
      x.style.color=window.localStorage.getItem("color2");
      x.style.borderColor=window.localStorage.getItem("bordercolor2");
      x.style.backgroundColor=window.localStorage.getItem("background2");
    }
    num2+=1;

  };
};


changeblue(select1);
changeblue2(select2);














