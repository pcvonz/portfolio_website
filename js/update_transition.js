function updateTransitionCube() {
  var el = document.querySelector("#cube_down");
   
  if (el) {
    el.id = "cube_up";
  } else {
    el = document.querySelector("#cube_up");
    el.id = "cube_down";
  }
   
  return el;
}

function updateTransitionCone() {
  var el = document.querySelector("#cone_down");
   
  if (el) {
    el.id = "cone_up";
  } else {
    el = document.querySelector("#cone_up");
    el.id = "cone_down";
  }
   
  return el;
}
function updateTransitionSphere() {
  var el = document.querySelector("#sphere_down");
   
  if (el) {
    el.id = "sphere_up";
  } else {
    el = document.querySelector("#sphere_up");
    el.id = "sphere_down";
  }
   
  return el;
}


var intervalID = window.setInterval(updateTransitionCube, 2000);
var intervalID = window.setInterval(updateTransitionCone, 2200);
var intervalID = window.setInterval(updateTransitionSphere, 2400);

document.addEventListener("DOMContentLoaded", function(event) {
    updateTransitionSphere();
    updateTransitionCone();
    updateTransitionCube();
});
