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
    add_tab_listener();
    //Updates the content based on the current hash
    if(document.location.hash == "") {
        document.location.hash = "#graphic-design";
    }
    var header = document.getElementById("header");
    header.className = document.location.hash.split("#")[1]
    update_content(document.location.hash.split("#")[1])
});


function add_tab_listener() {
    var graphic = document.getElementById("graphic-design-tab");
    var web = document.getElementById("web-design-tab");
    var prog = document.getElementById("programming-tab");
    graphic.addEventListener("click", function( event ) {
        var header = document.getElementById("header");
        // display the current click count inside the clicked div
        if (header.className != "graphic-design") {
            header.className = "graphic-design";
        }
        update_content("graphic-design");

      }, false);
    web.addEventListener("click", function( event ) {
        var header = document.getElementById("header");
        // display the current click count inside the clicked div
        if (header.className != "web-design") {
            header.className = "web-design";
        } 
        update_content("web-design");

      }, false);
    prog.addEventListener("click", function( event ) {
        var header = document.getElementById("header");
        // display the current click count inside the clicked div
        if (header.className != "programming") {
            header.className = "programming";
        } 
        update_content("programming");
      }, false);
}

function update_content(class_name) {
    document.location.hash = "#" + class_name;
    graph = document.getElementsByClassName("graphic-design-content");
    web = document.getElementsByClassName("web-design-content");
    prog = document.getElementsByClassName("programming-content");
        for(i = 0; i < graph.length; i++) {
            graph[i].style.display = "none";
        }
   
        for(i = 0; i < prog.length; i++) {
            prog[i].style.display = "none";
        }
        for(i = 0; i < web.length; i++) {
            web[i].style.display = "none";
        }

    to_show = document.getElementsByClassName(class_name+ "-content");
    if(to_show.length > 0){ 
        for(i = 0; i <= to_show.length - 1 ; i++) {
            to_show[i].style.display = "";
        }
    }

    
}
