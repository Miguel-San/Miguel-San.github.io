var rem = function (count)
{
    var unit = $('html').css('font-size');
    
    if (typeof count !== 'undefined' && count > 0)
    {
        return (parseInt(unit) * count);
    }
    else
    {
        return parseInt(unit);
    }
}

function scrollToAnchor(target){	
	console.log(target);
	//$('html, body').animate({scrollTop: target.offset().top - 75}, 'normal');
	$('html, body').animate({scrollTop: target.offset().top - rem(3.25)}, 'normal');
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
