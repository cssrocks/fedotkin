head.ready(function() {

	console.log("These aren't the droids you're looking for!");
	// $('.rf').each(function(){
	// 		// Объявляем переменные (форма и кнопка отправки)
	// 	var form = $(this),
	// 			btn = form.find('.btn_submit');
	// 	function checkInput(){
	// 		form.find('.form-control').each(function(){
	// 			if($(this).val() != ''){
	// 				// Если поле не пустое удаляем класс-указание
	// 				$(this).parent().removeClass('has-error');
	// 			} else {
	// 					// Если поле пустое добавляем класс-указание
	// 				$(this).parent().addClass('has-error');
	// 			}
	// 		});
	// 	}

	// });
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

    btn.click(function(){
      if($(this).hasClass('disabled')){
				lightEmpty();
        return false;
      } else {
        form.submit();
				$('.request').slideUp('fast');
				$('.requestsuccess').slideDown();
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

});