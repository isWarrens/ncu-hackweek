window.mySwipe = Swipe(document.getElementById('slider0'), {  
  callback: function(pos) {  
  var i = bullets.length;  
  while(i--){  
      bullets[i].className = ' ';  
  }  
  bullets[pos].className = 'on';  
  }  
});
window.mySwipe = Swipe(document.getElementById('slider1'), {  
  callback: function(pos) {  
  var i = bullets.length;  
  while(i--){  
      bullets[i].className = ' ';  
  }  
  bullets[pos].className = 'on';  
  }  
});
window.mySwipe = Swipe(document.getElementById('slider2'), {  
  callback: function(pos) {  
  var i = bullets.length;  
  while(i--){  
      bullets[i].className = ' ';  
  }  
  bullets[pos].className = 'on';  
  }  
});
var bullets = document.getElementById('position').getElementsByTagName('li');