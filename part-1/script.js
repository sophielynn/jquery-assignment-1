// Do your work in this file.

var view = $('<div></div>').addClass('view');
var grass = $('<div></div>').addClass('grass');
var sun = $('<div></div>').addClass('sun');
var mountain = $('<div></div>').addClass('mountain');
var mountainTop = $('<div></div>').addClass('mountain-top');

$('body').append(view);
view.append(grass,sun,mountain);
mountain.append(mountainTop);

var i = 1;
while (i < 6){
    sun.append('<div class = ray-' + i + '></div>');
    i++;     
}

var i = 1;
do {  
    mountainTop.append('<div class = mountain-cap-' + i + '></div>');
    i++;
} while (i < 4);
    