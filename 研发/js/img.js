window.mySwipe = Swipe(document.getElementById('slider0'), {  
  callback: function(pos) {  
  var i = bullets0.length;  
  while(i--){  
      bullets0[i].className = ' ';  
  }  
  bullets0[pos].className = 'on';  
  }  
});
window.mySwipe = Swipe(document.getElementById('slider1'), {  
  callback: function(pos) {  
  var i = bullets1.length;  
  while(i--){  
      bullets1[i].className = ' ';  
  }  
  bullets1[pos].className = 'on';  
  }  
});
window.mySwipe = Swipe(document.getElementById('slider2'), {  
  callback: function(pos) {  
  var i = bullets2.length;  
  while(i--){  
      bullets2[i].className = ' ';  
  }  
  bullets2[pos].className = 'on';  
  }  
});
var bullets0 = document.getElementsByClassName('position')[0].getElementsByTagName('li');
var bullets1 = document.getElementsByClassName('position')[1].getElementsByTagName('li');
var bullets2 = document.getElementsByClassName('position')[2].getElementsByTagName('li');