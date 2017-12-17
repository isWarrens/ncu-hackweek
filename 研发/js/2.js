window.onload=function () {
  var control_num=0;
  var left_change=document.getElementsByClassName("left-trigon")[0];
  var first_class='';
  var first_class2='';
  var right_change=document.getElementsByClassName("right-trigon")[0];
  var right1_recover=document.getElementsByClassName("right-rectangular")[0];
  var right2_recover=document.getElementsByClassName("right-2")[0];
  var right3_recover=document.getElementsByClassName("right-3")[0];
  var left1_recover=document.getElementsByClassName("left-1")[0];
  var left2_recover=document.getElementsByClassName("left-2")[0];
  var left3_recover=document.getElementsByClassName("left-3")[0];
  var lefecompare1=document.getElementsByClassName("cfont")[0];
  var lefecompare2=document.getElementsByClassName("cfont")[1];
  var lefecompare3=document.getElementsByClassName("cfont")[2];
  var rightcompare1=document.getElementsByClassName("rightcfont")[0];
  var rightcompare2=document.getElementsByClassName("rightcfont")[1];
  var rightcompare3=document.getElementsByClassName("rightcfont")[2];
  var data1;
  var num=0;
  var num1=0;
  var container=document.getElementsByClassName("container")[0];
  var judefont=document.getElementsByClassName("jfont")[0];
  var arr=new Array()
  var arr1=new Array()


    for (var a = 1; a < 7; a++) {
      if (localStorage.getItem("sta"+ a) != null) {
        arr[num] = localStorage.getItem("sta" + a);
        num += 1;
      }
    }

    function judenum1() {
      if (num == 1) {
        left1_recover.innerHTML=arr[0];
      }
      if (num == 2) {
        left1_recover.innerHTML = arr[0];
        left2_recover.innerHTML = arr[1];
      }
      if (num == 3) {
        left1_recover.innerHTML = arr[0];
        left2_recover.innerHTML = arr[1];
        left3_recover.innerHTML = arr[2];
      }
    };
  judenum1(num);


  for (var i = 1; i < 7; i++) {
    if (localStorage.getItem("snin"+ i) != null) {
      arr1[num1] = localStorage.getItem("snin" + i);
      num1 += 1;
    }
  }

  function judenum2() {
    if (num == 1) {
      right1_recover.innerHTML=arr1[0];
    }
    if (num == 2) {
      right1_recover.innerHTML = arr1[0];
      right2_recover.innerHTML = arr1[1];
    }
    if (num == 3) {
      right1_recover.innerHTML = arr1[0];
      right2_recover.innerHTML = arr1[1];
      right3_recover.innerHTML = arr1[2];
    }
  };
  judenum2(num1);


  var x_font=left1_recover.innerHTML;
  var y_font=right1_recover.innerHTML;


  function innnerfont_recover(x,y,z,a) {
    a.onclick = function () {
      if ((control_num % 2) === 0) {
        y.style.display = "block";
        z.style.display = "block";
        a.style.transform = "rotate(90deg)";
        a.style.marginTop="0.546667rem";
        control_num += 1;
      }
      if ((control_num % 2) !== 0) {
        y.style.display = "block";
        z.style.display = "block";
        a.style.transform = "rotate(90deg)";
        a.style.marginTop="0.546667rem";
        x.innerHTML = x_font;
        control_num += 1;
      }
    };
  }

  innnerfont_recover(left2_recover,left2_recover,left3_recover,left_change);


  right_change.onclick = function () {
    if ((control_num % 2) === 0) {
      right2_recover.style.display = "block";
      right3_recover.style.display = "block";
      right_change.style.transform = "rotate(90deg)";
      right_change.style.marginTop="0.546667rem";
      control_num += 1;
    }
    if ((control_num % 2) !== 0) {
      right2_recover.style.display = "block";
      right3_recover.style.display = "block";
      right_change.style.transform = "rotate(90deg)";
      right_change.style.marginTop="0.546667rem";
      right1_recover.innerHTML = y_font;
      control_num += 1;
    }
  };

  left_change.onclick = function () {
    if ((control_num % 2) === 0) {
      left2_recover.style.display = "block";
     left3_recover.style.display = "block";
      left_change.style.transform = "rotate(90deg)";
      left_change.style.marginTop="0.546667rem";
      control_num += 1;
    }
    if ((control_num % 2) !== 0) {
      left2_recover.style.display = "block";
      left3_recover.style.display = "block";
      left_change.style.transform = "rotate(90deg)";
      left_change.style.marginTop="0.546667rem";
      left1_recover.innerHTML = x_font;
      control_num += 1;
    }
  };



  function click_recoverright(x,y,z,a) {
    x.onclick=function () {
      y.style.display = "none";
      z.style.display = "none";
      a.style.transform = "rotate(0)";
      a.style.marginTop="0.453333rem";
      judeclassoneleft(x.innerHTML);
      GETright();
    };
    y.onclick=function () {

      y.style.display = "none";
      z.style.display = "none";
      a.style.transform = "rotate(0)";
      a.style.marginTop="0.453333rem";
      x.innerHTML = y.innerHTML;
      judeclassoneleft(y.innerHTML);
      GETright()
    };
    z.onclick = function () {

      y.style.display = "none";
      z.style.display = "none";
      a.style.transform = "rotate(0)";
      x.innerHTML = z.innerHTML;
      a.style.marginTop="0.453333rem";
      judeclassoneleft(z.innerHTML);
      GETright()
    };
  }
  click_recoverright(right1_recover,right2_recover,right3_recover,right_change);

  function click_recoverleft(x,y,z,a) {
    x.onclick=function () {
      y.style.display = "none";
      z.style.display = "none";
      a.style.transform = "rotate(0)";
      a.style.marginTop="0.453333rem";
      judeclassoneleft(x.innerHTML);
      GETleft();
    };
    y.onclick=function () {

      y.style.display = "none";
      z.style.display = "none";
      a.style.transform = "rotate(0)";
      a.style.marginTop="0.453333rem";
      x.innerHTML = y.innerHTML;
      judeclassoneleft(y.innerHTML);
      GETleft()

    };
    z.onclick = function () {

      y.style.display = "none";
      z.style.display = "none";
      a.style.transform = "rotate(0)";
      x.innerHTML = z.innerHTML;
      a.style.marginTop="0.453333rem";
      judeclassoneleft(z.innerHTML);
      GETleft()
    };
  }
  click_recoverleft(left1_recover,left2_recover,left3_recover,left_change);

    function judeclassoneleft(x) {
      if ((x == "口红") || (x == "香氛") || (x == "护肤")) {
        first_class = "化妆品";
      }
      else {
        first_class = "电子产品"
      }
    }


  function judeclassoneright(x) {
    if ((x == "口红") || (x == "香氛") || (x == "护肤")) {
      first_class2 = "化妆品";
    }
    else {
      first_class2 = "电子产品"
    }
  }
    judeclassoneleft(left1_recover.innerHTML);
    judeclassoneright(right1_recover.innerHTML);


function GETleft() {

    function Ajax(url) {
      var xmlHttpReq = null;
      if (window.ActiveXObject) {
        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
      }
      else if (window.XMLHttpRequest) {
        xmlHttpReq = new XMLHttpRequest();
      }
      if (xmlHttpReq != null) {
        xmlHttpReq.open("GET", url, true);
        xmlHttpReq.onreadystatechange = RequestCallBack;
        xmlHttpReq.send(null);
      }

      function RequestCallBack() {
        if (xmlHttpReq.readyState == 4) {
          if (xmlHttpReq.status == 200) {
            var data = xmlHttpReq.responseText;
            data1 = eval('(' + data + ')');
            lefecompare1.innerHTML = data1.products.level_top;
            lefecompare2.innerHTML=data1.products.level_middle;
            lefecompare3.innerHTML = data1.products.level_low;
          }
        }
      };
  }
  Ajax("http://120.78.94.18:5000/"+first_class+'/'+left1_recover.innerHTML+'/');
}
GETleft();

function GETright() {

  function Ajax(url) {
    var xmlHttpReq = null;
    if (window.ActiveXObject) {
      xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
      xmlHttpReq = new XMLHttpRequest();
    }
    if (xmlHttpReq != null) {
      xmlHttpReq.open("GET", url, true);
      xmlHttpReq.onreadystatechange = RequestCallBack;
      xmlHttpReq.send(null);
    }

    function RequestCallBack() {
      if (xmlHttpReq.readyState == 4) {
        if (xmlHttpReq.status == 200) {
          var data = xmlHttpReq.responseText;
          data1 = eval('(' + data + ')');
          rightcompare1.innerHTML = data1.products.level_top;
          rightcompare2.innerHTML = data1.products.level_middle;
          rightcompare3.innerHTML = data1.products.level_low;
          judefont.innerHTML=data1.j_standard;    //加上划分依据
        }
      }
    };
  }
  Ajax("http://120.78.94.18:5000/"+first_class2+'/'+right1_recover.innerHTML+'/');
}
  GETright();

  function onclick(x,y) {
    x.onclick = function () {
      window.location.href = "#";
      localStorage.setItem("classType", first_class);
      localStorage.setItem("productType", right1_recover.innerHTML)
      localStorage.setItem("level", y)
    }
  }
    onclick(rightcompare1, "a");
    onclick(rightcompare2, "b");
    onclick(rightcompare3, "c");
    localStorage.clear()
  };