var elements = document.getElementsByClassName('stroke');
var intervals = [];
function clear(i) {
  return function(){
    clearInterval(intervals[i]);
  }
}
for (var i = elements.length - 1; i >= 0; i--) {
  var timer = Math.round(15 / parseInt(elements[i].getAttribute("data-amount")) * 252);
  intervals[i] = setInterval(function(elem, interv) {
    if(parseInt(elem.getAttribute("stroke-dashoffset")) <= 1000 - parseInt(elem.getAttribute("data-amount"))) {
      clear(interv);
    }
    else {
      stroke(elem);
    }
  }, timer, elements[i], i);
};
var stroke = function(elem) {
  elem.setAttribute("stroke-dashoffset", parseInt(elem.getAttribute("stroke-dashoffset"))-3);
}
function clearAll() {
  for (var i = intervals.length - 1; i >= 0; i--) {
    clearInterval(intervals[i]);
  }
}

// clear all intervals anyways, because apparently they keep running on forever note: this is really s
setTimeout(clearAll, 2500);
