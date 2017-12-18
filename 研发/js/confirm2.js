//换一批的功能
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
var num=0;
var num2=0;
var select1=document.getElementById("electronics");
var select2=document.getElementById("cosmetics");

if (localStorage.getItem("color3")==="white") {//保留被点击的localstorage以及颜色
  select1.style.color = localStorage.getItem("color3");
  select1.style.backgroundColor = localStorage.getItem("background3");
  select1.style.borderColor = localStorage.getItem("bordercolor3");
  name='电子产品';
  window.localStorage.setItem("ta",name);
  num=1;
}

var changeblue=function (x) {//电子产品一类点击的localstorage以及颜色的变化
  this.x=x;
  x.onclick=function () {
    if (num%2===0) {
      window.localStorage.setItem("color3","white");
      window.localStorage.setItem("background3","#2194ff");
      name='电子产品';
      window.localStorage.setItem("ta", name);
      x.style.color = window.localStorage.getItem("color3");
      x.style.backgroundColor = window.localStorage.getItem("background3");

    }
    if (num%2!==0){
      window.localStorage.setItem("color3","#2194ff");
      window.localStorage.setItem("background3","white");
      window.localStorage.setItem("bordercolor3","#2194ff");
      name=null;
      window.localStorage.setItem("ta", name);
      x.style.color=window.localStorage.getItem("color3");
      x.style.borderColor=window.localStorage.getItem("bordercolor3");
      x.style.backgroundColor=window.localStorage.getItem("background3");
    }
    num+=1;

  };
};


if (localStorage.getItem("color4")==="white") {//保留美妆一类点击的localstorage以及颜色
  select2.style.color = localStorage.getItem("color4");
  select2.style.backgroundColor = localStorage.getItem("background4");
  select2.style.borderColor= localStorage.getItem("bordercolor4");
  name1='美妆';
  window.localStorage.setItem("ta2",name1);
  num2=1;
}

var changeblue2=function (x) {//美妆一类点击的localstorage以及颜色的变化
  this.x=x;
  x.onclick=function () {
    if (num2%2===0) {
      window.localStorage.setItem("color4","white");
      window.localStorage.setItem("background4","#ff6ea4");
      name1='美妆';
      window.localStorage.setItem("ta2", name1);
      x.style.color = window.localStorage.getItem("color4");
      x.style.backgroundColor = window.localStorage.getItem("background4");

    }
    if (num2%2!==0){
      window.localStorage.setItem("color4","#ff6ea4");
      window.localStorage.setItem("background4","white");
      window.localStorage.setItem("bordercolor4","#ff6ea4");
      name1=null;
      window.localStorage.setItem("ta2", name1);
      x.style.color=window.localStorage.getItem("color4");
      x.style.borderColor=window.localStorage.getItem("bordercolor4");
      x.style.backgroundColor=window.localStorage.getItem("background4");
    }
    num2+=1;

  };
};


changeblue(select1);
changeblue2(select2);


