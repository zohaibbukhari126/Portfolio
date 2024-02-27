const scroll = new LocomotiveScroll({
    el: document.querySelector('#mainmain'),
    smooth: true
});





var elemC1 = document.querySelector("#elem-container");
var elemC2 = document.querySelector("#elem2-container");
var fixed = document.querySelector("#fixed-image");

elemC1.addEventListener("mouseenter", function() {
    fixed.style.display = "block";
});

elemC1.addEventListener("mouseleave", function() {
    fixed.style.display = "none";
});

elemC2.addEventListener("mouseenter", function() {
    fixed.style.display = "block";
});

elemC2.addEventListener("mouseleave", function() {
    fixed.style.display = "none";
});

var elems1 = document.querySelectorAll(".elem");
elems1.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
    });
});

var elems2 = document.querySelectorAll(".elem");
elems2.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
    });
});





