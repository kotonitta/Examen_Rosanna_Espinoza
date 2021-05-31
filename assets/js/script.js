
//esconder los párrafos
$(document).ready(function(){
$("p").dblclick(function(){
$(this).hide("slow");
});
});

// Cambiar de tamaño y color h2
$(document).ready(function(){
$("h2").dblclick(function(){
$(this).hide('slow');
});
$("h2").click(function(){
$(this).css({
"color": "blue",
"font-size": "2em"
});
});
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })