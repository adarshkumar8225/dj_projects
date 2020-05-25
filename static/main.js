if (typeof jQuery === 'undefined') {
  throw new Error('JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  $(document).scroll(function () {
    var $nav = $(".nav-section");
    $nav.toggleClass('fix', $(this).scrollTop() > $nav.height());
  });
  
}(jQuery);

+function ($) {
	'use strict';
	$(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
		
	/* Extra class "tab_last" to add border to right side of last tab */
	$('ul.tabs li').last().addClass("tab_last");
}(jQuery);

+function ($) {
	$('.footer-panels').find(".pclick").append('<span class="submenubtn">+</span>');
	$('.footer-panels .pclick').on('click', function(event) {
		event.preventDefault(); 
		event.stopPropagation(); 
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
	});
	
}(jQuery);

+function ($) {
	$('.accpkg').find(".sub-head-a").append('<span class="submenubtn">+</span>');
	$('.accpkg .sub-head-a').on('click', function(event) {
		event.preventDefault(); 
		event.stopPropagation(); 
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
	});
	
}(jQuery);


+function ($) {
	'use strict';
	var owl = $('#ClientSlider');
	owl.owlCarousel({
		items:2,
		slideBy: 5,
		dots:true,
		loop:false,
		margin:10,
		autoplay:true,
		nav: true,
		navText: [
			'<image src="assets/images/left-arrows.png" class="img-responsive"></image>',
			'<image src="assets/images/right-arrows.png" class="img-responsive"></image>'
		],
		smartSpeed:1000,
		slideSpeed : 5000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{ items:1 },
			480:{ items:1 },
			767:{ items:2 },
			991:{ items:3 },
			1024:{ items:4 },
			1199:{ items:5 }
		} 
	});	
}(jQuery);

+function ($) {
	'use strict';
	var owl = $('#Recommended');
	owl.owlCarousel({
		items:1,
		dots:true,
		loop:false,
		margin:10,
		autoplay:true,
		smartSpeed:1000,
		slideSpeed : 5000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{ items:1 },
			480:{ items:1 },
			767:{ items:2 },
			991:{ items:3 },
			1024:{ items:4 }
		} 
	});	
}(jQuery);

+function ($) {
	'use strict';
	var owl = $('#OurPartners');
	owl.owlCarousel({
		items:1,
		dots:true,
		loop:false,
		margin:30,
		autoplay:true,
		smartSpeed:1000,
		slideSpeed : 5000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{ items:1 },
			480:{ items:1 },
			767:{ items:2 },
			991:{ items:2 },
			1024:{ items:3 }
		} 
	});	
}(jQuery);

+function ($) {
	'use strict';
	var owl = $('#HotelSlider');
	owl.owlCarousel({
		items:1,
		dots:true,
		loop:false,
		margin:30,
		autoplay:true,
		smartSpeed:1000,
		slideSpeed : 5000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{ items:1 },
			480:{ items:2 },
			767:{ items:3 },
			991:{ items:4 },
			1024:{ items:6 }
		} 
	});	
}(jQuery);

+function ($) {
	'use strict';
	var owl = $('#CruiseSlider');
	owl.owlCarousel({
		items:1,
		dots:true,
		loop:false,
		margin:30,
		autoplay:true,
		smartSpeed:1000,
		slideSpeed : 5000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{ items:1 },
			480:{ items:2 },
			767:{ items:3 },
			991:{ items:4 },
			1024:{ items:6 }
		} 
	});	
}(jQuery);

+function ($) {
	'use strict';
	var owl = $('#RailSlider');
	owl.owlCarousel({
		items:1,
		dots:true,
		loop:false,
		margin:30,
		autoplay:true,
		smartSpeed:1000,
		slideSpeed : 5000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{ items:1 },
			480:{ items:2 },
			767:{ items:3 },
			991:{ items:4 },
			1024:{ items:6 }
		} 
	});	
}(jQuery);

+function ($) {
	'use strict';
	var owl = $('#OverseasSlider');
	owl.owlCarousel({
		items:1,
		dots:true,
		loop:false,
		margin:30,
		autoplay:true,
		smartSpeed:1000,
		slideSpeed : 5000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{ items:1 },
			480:{ items:2 },
			767:{ items:3 },
			991:{ items:4 },
			1024:{ items:6 }
		} 
	});	
}(jQuery);

+function ($) {
	'use strict';
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
}(jQuery);

+function ($) {
	'use strict';
	$('ul.dropdown-menu, ul.dropdown-menu-one').on('click', function(event){
		var events = $._data(document, 'events') || {};
		events = events.click || [];
		for(var i = 0; i < events.length; i++) {
			if(events[i].selector) {

				//Check if the clicked element matches the event selector
				if($(event.target).is(events[i].selector)) {
					events[i].handler.call(event.target, event);
				}

				// Check if any of the clicked element parents matches the 
				// delegated event selector (Emulating propagation)
				$(event.target).parents(events[i].selector).each(function(){
					events[i].handler.call(this, event);
				});
			}
		}
		event.stopPropagation(); //Always stop propagation
	});
}(jQuery);

function bs_input_file() {
	$(".input-file").before(
		function() {
			if ( ! $(this).prev().hasClass('input-ghost') ) {
				var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
				element.attr("name",$(this).attr("name"));
				element.change(function(){
					element.next(element).find('input').val((element.val()).split('\\').pop());
				});
				$(this).find("button.btn-choose").click(function(){
					element.click();
				});
				$(this).find("button.btn-reset").click(function(){
					element.val(null);
					$(this).parents(".input-file").find('input').val('');
				});
				$(this).find('input').css("cursor","pointer");
				$(this).find('input').mousedown(function() {
					$(this).parents('.input-file').prev().click();
					return false;
				});
				return element;
			}
		}
	);
}
$(function() {
	bs_input_file();
});

+function ($) {
	'use strict';
	
	$('select.input-select-c1').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;
	  
		$this.addClass('select-hidden'); 
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());
	  
		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);
	  
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}
	  
		var $listItems = $list.children('li');
	  
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});
	  
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});
	  
		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});
}(jQuery);

+function ($) {
	'use strict';
    $(document).on('click', '.choosefile', function(){
      var file = $(this).parent().parent().parent().find('#file');
      file.trigger('click');
    });
    $(document).on('change', '#file', function(){
      $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
    });  
	/*$('#chooseFile').bind('change', function () {
	  var filename = $("#chooseFile").val();
	  if (/^\s*$/.test(filename)) {
		$(".file-upload").removeClass('active');
		$("#noFile").text("No file chosen..."); 
	  }
	  else {
		$(".file-upload").addClass('active');
		$("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
	  }
	});*/
}(jQuery);

+function ($) {
	// Animate the scroll to top
	$('.go-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 700);
	});
	// Scroll Top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
			$('.go-top').fadeIn();
		}else {
			$('.go-top').fadeOut();
		}
	});	
}(jQuery);	

+function ($) {
	
	$(".go-down").on("click", function( e ) {
	e.preventDefault();
		$("body, html, .modal").animate({ 
			scrollTop: $( $(this).attr('href') ).offset().top 
		}, 500);
	});
}(jQuery);	

+function ($) {
	$('select[multiple]#Rating').multiselect({
		columns: 1,
		placeholder: 'Please Select',
		search: true			
	});
}(jQuery);



wow = new WOW(
  {
	animateClass: 'animated',
	offset:       0,
	callback:     function(box) {
	  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
  }
);
wow.init();