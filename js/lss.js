var counter = document.getElementById('counter');
var container = document.getElementById('container');
var meme = document.getElementById('meme');

window.onscroll = function(){
  var y = window.pageYOffset;

  console.log(y);

  counter.style.top = (200 + y) * 1.01 + "px";
  counter.innerHTML = y + " px";

  if (y > 2000){
    counter.style.backgroundColor = "deeppink";
  } else {
    counter.style.backgroundColor = "lightseagreen";
  }

  meme.style.top = y + 300 + "px";

  if (y > 1500) {
    meme.src = "img/live-dangerous.jpg";
    meme.style.position = "fixed";
    meme.style.left = 1000 + "px";
    meme.style.top = 0 + "px";

  } else {
    meme.src = "img/funny-got-meme.jpg";
    meme.style.position = "absolute";
    meme.style.left = 150 + "px";
    meme.style.top = y + 300 + "px";

  }
};
