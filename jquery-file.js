$(document).ready(function(){
    $("img").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/card-front.jpg");
    });    

    $('.hamburger-icon').click(function(){
        $('.hamburger-menu-items').css("right", "0");
     });

     $('.close-icon').click(function(){
        $('.hamburger-menu-items').css("right", "-100%");
     });
});
