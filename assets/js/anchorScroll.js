function scrollToAnchor(target){	
	console.log(target);
	$('html, body').animate({scrollTop: target.offset().top - 75}, 'normal');
}

$(document).ready(function(){
	$("a.footnote, a.reversefootnote").click(function(){
		console.log("Ida");
		id = $(this).attr("href");
		index = id.indexOf(":");
		escaped_id = [id.slice(0, index), "\\", id.slice(index)].join("");
		scrollToAnchor($(escaped_id));
	});

	$("div.menu").find("a").click(function(){
		console.log("Menu");
		scrollToAnchor($($(this).attr("href")));
	});
});
