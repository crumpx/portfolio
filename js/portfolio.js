
$(document).ready(function(){

var slideIndex = 1;
var x = document.getElementsByClassName("showitem");

window.addEventListener('resize',resized);

function showDivs(n) {
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} 
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

function plusDivs(n) {
        showDivs(slideIndex += n);
}

function resized (){
    if ($(document).width() < 1400) {
        $('.arrow-box').css('display','');
        showDivs(slideIndex);
    } else {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = ""; 
        }
        $('.arrow-box').css('display','none')
    }
}

if ($(document).width() < 1400) {
    $('.arrow-box').css('display','');
    showDivs(slideIndex);
}


    $(".about-link").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});

$(".portfolio-link").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
});

$(".contact-link").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
});



});
