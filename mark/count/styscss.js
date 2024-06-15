// JavaScript Document
$(function(){
	//手机导航
	$('.btn-nav').on('click', function () {
		$('.nav-content').toggleClass('showNav hideNav');
		$(this).toggleClass('animated');
		$(".showNav").css("height", ($(".sjdhbt").height() - 32) + "px");
		return false;
	});
	$(".sjdhbt").css("height", ($(window).height()) + "px");
	//$(".sjdhbt").css("padding-top", ($(window).height() * 0.4) + "px");
	//$(".showNav").css("height", ($(window).height() - 32) + "px");
	//$(".nav-content").css("height", ($(window).height() - 32) + "px");
	//$(".nylcx").css("min-width", ($(".nylc").width() - 150) + "px");
})
