let offset = 0,
  paused = true;


  
function startStopwatch(evt) {
  if (paused) {
    paused = false;
    offset -= Date.now();
    render();
  }
}

function stopStopwatch(evt) {
  if (!paused) {
    paused = true;
    offset += Date.now();
  }
}

function resetStopwatch(evt) {
  if (paused) {
    offset = 0;
    render();
  } else {
    offset = -Date.now();
  }
}

function format(value, scale, modulo, padding) {
  value = Math.floor(value / scale) % modulo;
  return value.toString().padStart(padding, 0);
}

function render() {
  var value = paused ? offset : Date.now() + offset;

  miliseconds = format(value, 1, 1000, 3);
  seconds = format(value, 1000, 60, 2);
  minutes = format(value, 60000, 60, 2);
  
  if(!paused) {
    requestAnimationFrame(render);
  }
}