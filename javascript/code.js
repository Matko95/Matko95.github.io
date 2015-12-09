$(document).ready(function(){
    $(".img, .shadow").hover(function(){
        $(this).css({"top" : "-5px","box-shadow": "14px 14px 14px #777"});
        }, function(){
        $(this).css({"top":"+5px","box-shadow": "7px 7px 7px #666"});
    });

    /*$('.dropdown').on('mouseenter mouseleave click tap', function() {
        $(this).toggleClass("open");
    });*/
 
  
  $("#aboutBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});
  
  $("#homeBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
});
  $("#portfolioBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
});
  
  $("#contactBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});

});

