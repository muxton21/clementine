$(document).ready(function() {
    $("#backToTop").click(function(event){
        $('html, body').animate({scrollTop: $("#hamburger").offset().top},800);
    });
});   
$(function() {
    $(".pageTitle").animate({opacity:'1'}, 2000)
});
$(function() {
    $(".caption").animate({opacity:'1'}, 5000)
});
$(function() {
    $(".border").animate({opacity:'1'}, 4000)
});
$(function() {
    $("#hamburger").animate({opacity:'1'}, 3000)
});
$(document).ready(function() {
    $("#subTitle").click(function(event){
        $('html, body').animate({scrollTop: $("#introduction").offset().top},800);
    });
});
$(document).ready(function() {
    $("#bloodOrange").click(function(event){
        $('html, body').animate({scrollTop: $("#introduction").offset().top},10);
    });
});
$(document).ready(function() {
    $(".logo").click(function(event){
        $(document).scrollTop(0);
        location.reload();
    });
});
$(document).ready(function() {
    $("#about").click(function(event){
        $('html, body').animate({scrollTop: $("#introduction").offset().top},800);
    });
});
$(document).ready(function() {
    $("#gallery").click(function(event){
        $('html, body').animate({scrollTop: $("#galleryBody").offset().top},800);
    });
});
$(document).ready(function() {
    $("#services").click(function(event){
        $('html, body').animate({scrollTop: $("#servicesBody").offset().top},800);
    });
});
$(document).ready(function() {
    $("#contact").click(function(event){
        $('html, body').animate({scrollTop: $("#contactBody").offset().top},800);
    });
});
$(document).ready(function() {
    $(".gallery").click(function(event){
        $('html, body').animate({scrollTop: $(".manderinDescription").offset().top},400);
    });
});
$(document).ready(function() {
    $("#secondRowClose").click(function(event){
        $('html, body').animate({scrollTop: $("#secondRowImage").offset().top},400);
    });
});

$(document).ready(function() {
    $("#thirdRowClose").click(function(event){
        $('html, body').animate({scrollTop: $("#thirdRowImage").offset().top},400);
    });
});
$(document).ready(function() {
    $("#bloodOrange").click(function(event){
        window.location.href = "index.html";
    });
});
$(document).ready(function() {
    $("#manderin").click(function(event){
        window.location.href = "manderin.html";
    });
});
$(document).ready(function() {
    $("#tangerine").click(function(event){
        window.location.href = "tangerine.html";
    });
});
$(document).ready(function() {
    $("#me").click(function(event){
        window.location.href = "me.html";
    });
});

var n=0;
$(document).ready(function(){
    $("#hamburger").click(function(){
        if((n==0)===true){
            $( ".menuElement" ).animate({opacity:'1'}, "slow").show();
            n=1;
        } else if ( (n==0) === false ) {
            $( ".menuElement" ).animate({opacity:'0'}, "slow").hide();
            n = 0;
        }
    });
});
$(function() {
    $(".menuElement").hide();
});    

function myFunction(x) {
    x.classList.toggle("change");
}
function galleryCreate(i) {
    document.getElementById("test").innerHTML = document.getElementById("gallery"+i).innerHTML;
}
function clearGallery() {
    $('#test').empty();
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
