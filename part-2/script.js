// Do your work in this file.

for (var i = 0; i < 196; i++) {
    var box = $('<div></div>').addClass('box');
    if (i % 2) {box.addClass('type-2');}
    else {box.addClass('type-1');}
    $('body').append(box);
}

$(".box").click(function(){
    if ($(this).hasClass("clicked")) {
        $(this).removeClass('clicked');
    }
    else {
        $(this).addClass('clicked');
    }

});