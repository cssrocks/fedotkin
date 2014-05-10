head.ready(function() {

	console.log("These aren't the droids you're looking for!");

	// YouTube API
	var embed = 0;
	function addEmbeded(object, videoId, width, height, autoplay) {
		if (autoplay == 'true') {
			object.html("<iframe width='"+width+"' height='"+height+"' src='http://www.youtube.com/embed/"+videoId + "?autoplay=1" +"' frameborder='0' allowfullscreen></iframe>");
		} else {
			object.html("<iframe width='"+width+"' height='"+height+"' src='http://www.youtube.com/embed/"+videoId + "?autoplay=0" +"' frameborder='0' allowfullscreen></iframe>");
		}
		embed+=1;
	}

	// VIDEO
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


	// NAVIGATION
	$('.js-navbar a').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 50
		}, 500, 'swing', function () {
				window.location.hash = target;
		});
	});

	function navScroll(){
		$('.section').each(function(){
			var pos = $(this).offset().top;
			var id = $(this).attr('id');
			var top = ($('.page').offset().top - 53);
			if( $(window).scrollTop() >= (pos - 52)){
				$('.js-navbar li').removeClass('active');
				$('[href = #'+id+']').parent().addClass('active');
			}
			if($(window).scrollTop() < top){
				$('.js-navbar li').removeClass('active');
			}
		});
	}

	$(window).scroll(function() {
		navScroll();
	});

});