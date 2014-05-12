head.ready(function() {

	$.reject();

	console.log("These aren't the droids you're looking for!");

	$('.requestsuccess').hide();
	$(function() {

	  $('.rf').each(function(){
		var form = $(this),
	        btn = form.find('.btn_submit');

			// form.find('.rj').parent().addClass('has-error');
	    function checkInput(){
	      form.find('.rj').each(function(){
					if($(this).val() != ''){
						$(this).parent().removeClass('has-reject');
						$(this).parent().removeClass('has-error');
	        } else {
						$(this).parent().addClass('has-reject');
	        }
	      });
	    }

	    function lightEmpty(){
	      form.find('.has-reject').addClass('has-error');
	      // setTimeout(function(){
	      //   form.find('.has-reject').removeClass('has-error');
	      // },2000);
	    }

	    setInterval(function(){
				checkInput();
	      var sizeEmpty = form.find('.has-reject').size();
	      if(sizeEmpty > 0){
	        if(btn.hasClass('disabled')){
	          return false;
	        } else {
	          btn.addClass('disabled');
	        }
	      } else {
	        btn.removeClass('disabled');
	      }
	    },500);

	    btn.click(function(event){
	      if($(this).hasClass('disabled')){
					lightEmpty();
	        return false;
	      } else {
					$('.request').slideUp('fast');
					$('.requestsuccess').slideDown();
	        // form.submit();
					// return false;
					// event.stopPropagation();
	      }
	    });
	  });

		$('.requestagain').on('click', function() {
			$('.requestsuccess').slideUp('fast');
			$('.request').slideDown();
			return false;
		});

	});

	$('.js-testimonials').on('click', function() {
		$('.js-testimonials').hide();
		$(this).parent().parent().find('.row').slideDown('fast');
		return false;
	});

	$('.request__formfield-trigger').on('click', function() {
		$(this).parent().find('.form-group').slideToggle('fast');
		$('#website').text(function(_,txt) {
				var ret='';

				if ( txt == 'У меня нет сайта' ) {
					 ret = 'У меня есть сайт';
				}else{
					 ret = 'У меня нет сайта';
				}
				return ret;
		});
	});

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

	// Video
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


	// Navigation
	$('.js-nav a').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
				'scrollTop': $target.offset().top
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
				$('.js-nav li').removeClass('active');
				$('[href = #'+id+']').parent().addClass('active');
			}
			if($(window).scrollTop() < top){
				$('.js-nav li').removeClass('active');
			}
		});
	}

	$(window).scroll(function() {
		navScroll();
	});
	//select
	function select() {
		var el = $('.js-select');
		var el_title = el.children("span");
		var item = el.find('li');
		var input = el.find(".js-select-input");
		var el_text = el.find(".js-select-text");
		var checkbox = el.find(".checkbox");
		var list = el.find('.js-select-drop');
		el_title.click(function(event){
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			}
			event.stopPropagation();
		});
		checkbox.click(function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			el.find('li').removeClass('is-selected');
			$(this).addClass("is-selected");
			var text = $(this).text();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select").find(".js-select-text").text(text);
			$(this).parents(".js-select").find(".js-select-input").val(id);
		});
	}
	select();

	//click document
	$(document).click(function() {
		$('.js-select').removeClass('is-open');
	});

});