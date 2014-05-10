head.ready(function() {
	console.log("These aren't the droids you're looking for!");
	// YouTube API - doesn't work
	var embed = 0;
	function addEmbeded(object, videoId, width, height, autoplay) {
		if (autoplay == 'true') {
			object.html("<iframe width='"+width+"' height='"+height+"' src='http://www.youtube.com/embed/"+videoId + "?autoplay=1" +"' frameborder='0' allowfullscreen></iframe>");
		} else {
			object.html("<iframe width='"+width+"' height='"+height+"' src='http://www.youtube.com/embed/"+videoId + "?autoplay=0" +"' frameborder='0' allowfullscreen></iframe>");
		}
		embed+=1;
	}

	$(".embeded").each(function() {
		if (!$(this).attr("data-autoplay")) {
			$(this).attr("data-autoplay", 'false');
		}
		addEmbeded($(this), $(this).attr("data-videoId"), $(this).attr("data-width"), $(this).attr("data-height"), $(this).attr("data-autoplay"));
	});
	$(".video_link").click(function() {
		if ($(this).attr("data-videoId") && $(this).find(".embeded").size() == 0) {
			var image = $(this).find(".image");
			addEmbeded(image, $(this).attr("data-videoId"), image.width(), image.height(), 'true');
			image.addClass("embeded");
		}
		return false;
	});

});