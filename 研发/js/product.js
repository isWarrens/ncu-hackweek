var grade = new Array();
var url = "http://120.78.94.18:5000/"
var level=localStorage.level;
var className = localStorage.classType;
var typeName = localStorage.productType;
// var level="b";
// var className = "化妆品";
// var typeName = "口红";

function addData(name,highPrice,lowPrice,commentaries,i){//添加数据
  selector = ".option" + i;
  $(selector).find(".headline").html(name);
  $(selector).find(".high-price").html(highPrice);
  $(selector).find(".low-price").html(lowPrice);
  $(selector).find(".introduce").html(commentaries);
}

function gainImg(url,typeName,grade,i){//添加图片
  url = "http://120.78.94.18:5000/" + encodeURI("images/")
  $.ajax({
    url: url,
    type: "POST",
    async: true,
    data: {"class_name":typeName,"name":grade},
    dataType: "json",
    success: function(data){//所有图片都放在了一个网址，无法根据品种来获得图片
      if(i==0){
        selector = ".option" + i;
        $(selector).find(".showing1").attr("src",data.image_102);
        $(selector).find(".showing0").attr("src",data.image_101);
        $(selector).find(".showing2").attr("src",data.image_103);
      }
      else if(i==1){
        selector = ".option" + i;
        $(selector).find(".showing0").attr("src",data.image_104);
        $(selector).find(".showing1").attr("src",data.image_105);
        $(selector).find(".showing2").attr("src",data.image_106);
      }
      else if(i==2){
          selector = ".option" + i;
          $(selector).find(".showing0").attr("src",data.image_107);
          $(selector).find(".showing1").attr("src",data.image_108);
          $(selector).find(".showing2").attr("src",data.image_109);
      }
    }
  })
}

function gainProduct(url,className,typeName,grade,i){//获得产品的详细资料，包括Nama,price,commentaries
  productUrl = url + encodeURI(className ) + "/" + encodeURI(typeName) + "/" + encodeURI(grade) +"/";
  $.ajax({
    url: productUrl,
    type: "GET",
    async: true,
    dataType: "json",
    success: function(data){
      var name = data.title;
      var highPrice = data.H_price;
      var lowPrice = data.L_price;
      var commentaries = data.commentaries;
      addData(name,highPrice,lowPrice,commentaries,i)//用函数将数据动态的添加到HTML中
    }
  })
}

$(document).ready(function(){//获得第二级目录下的产品
  $(".typename").html(typeName);
  classUrl = url + encodeURI(className ) + "/" + encodeURI(typeName) + "/";
  $.ajax({
    url: classUrl,
    type: "GET",
    async: true,
    dataType: "json",
    success: function(data){
      if(level=="c"){
        grade[0] = data.products.level_1;
        grade[1] = data.products.level_2;
        grade[2] = data.products.level_3;
      }
      else if(level==="b"){
        grade[0] = data.products.level_4;
        grade[1] = data.products.level_5;
        grade[2] = data.products.level_6;
      }
      else if(level=="a"){
        grade[0] = data.products.level_7;
        grade[1] = data.products.level_8;
        grade[2] = data.products.level_9;
      }
      for (var i=0;i<3;++i){
        gainProduct(url,className,typeName,grade[i],i)//用函数获得产品的详细资料
        gainImg(url,typeName,grade[i],i)
      }
    }
  })
})
