/*
$(function(){
	m = "09/06/2018";
    d = moment(m).format("YYYY-MM-DD");
    $("#paragraph").text(d);
});
*/

/*
$(function(){
	window.onscroll = function() {isPageScrolling()};
	function isPageScrolling() {
		if($("#navbarmainpage").visible()) {
			$("#navbarmainpage").addClass("stickyimportant");
			else {
				$("#navbarmainpage").removeClass("stickyimportant");
			}
		}
	}
});
*/

var stickyOffset = $(".sticky").offset().top;

$(window).scroll(function(){
	var sticky = $(".sticky"),
		scroll = $(window).scrollTop();

	if (scroll >= stickyOffset) sticky.addClass("stickyimportant");
	else sticky.removeClass("stickyimportant");
});