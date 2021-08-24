// JavaScript Document
// Claudio Gomboli . the EGGS LAB
// 2012 / 8 / 29
// Responsive animated gallery





$('.portfolio2').each(function(index)
{
    $(this).attr('id', 'img' + (index + 1));
});


$('.portfolio2').click(function(){
if($(this).hasClass('opened')){
    $(this).removeClass('opened');
    $(".portfolio2").fadeIn("fast");
		$("#maincontent").fadeIn("fast");
}
else{
	var indexi = $("#maincontent2 .portfolio2").index(this) + 1;
    $(this).addClass('opened'); 
    $(".portfolio2").not(this).fadeOut("fast");
	$("#maincontent").fadeOut("fast");
}
});	


$('.portfolio').each(function(index)
{
    $(this).attr('id', 'img' + (index + 1));
});
    
$('.portfolio').click(function(){
if($(this).hasClass('opened')){
    $(this).removeClass('opened');
    $(".portfolio").fadeIn("fast");
	$("#maincontent4").fadeIn("fast");
}
else{
	var indexi = $("#maincontent .portfolio #maincontent2").index(this) + 1;
    $(this).addClass('opened'); 
    $(".portfolio").not(this).fadeOut("fast");
	$("#maincontent4").fadeOut("fast");
}
});	


$('.portfolio4').each(function(index)
{
    $(this).attr('id', 'img' + (index + 1));
});

$('.portfolio4').click(function(){
if($(this).hasClass('opened')){
    $(this).removeClass('opened');
    $(".portfolio4").fadeIn("fast");
	$("#maincontent3").fadeIn("fast");
	
}
else{
	var indexi = $("#maincontent4 .portfolio4").index(this) + 1;
    $(this).addClass('opened'); 
    $(".portfolio4").not(this).fadeOut("fast");
	$("#maincontent3").fadeOut("fast");

}
});	
   

$('.portfolio3').each(function(index)
{
    $(this).attr('id', 'img' + (index + 1));
});

$('.portfolio3').click(function(){
if($(this).hasClass('opened2')){
    $(this).removeClass('opened2');
    $(".portfolio3").fadeIn("fast");
	$("#maincontent4").fadeIn("fast");
}
else{
	var indexi = $("#maincontent3 .portfolio3").index(this) + 1;
    $(this).addClass('opened2'); 
    $(".portfolio3").not(this).fadeOut("fast");
	$("#maincontent4").fadeOut("fast");

}
});	