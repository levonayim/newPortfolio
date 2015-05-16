jQuery(function(){
    $('.menu-item-1').hover(function(){
        $(".bg1").fadeIn();
    }, function() {
        $(".bg1").fadeOut();
    })
    $('.menu-item-2').hover(function(){
        $(".bg2").fadeIn();
    }, function() {
        $(".bg2").fadeOut();
    })
})