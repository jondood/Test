var stickyOffset = $("#navbar").offset().top;

$(window).scroll(function(){
	var sticky = $("#navbar"),
		scroll = $(window).scrollTop();

	if (scroll >= stickyOffset) sticky.addClass("sticky");
	else sticky.removeClass("sticky");
});

