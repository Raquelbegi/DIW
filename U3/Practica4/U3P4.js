onload = function() {
  play.onclick = function() {
    a.play();
  }

  pause.onclick = function() {
    a.pause();
  }

  mas.onclick = function() {
    a.volume+=0.1;
  }

  menos.onclick = function() {
    a.volume-=0.1;
  }
}
