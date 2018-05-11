/*-----------------------------------------------------------------------------------*/
/*	HEADING
/*-----------------------------------------------------------------------------------*/
(function($){

	$.fn.dcHeader = function(options) {

		var defaults = {
			padding: 0,
			onLoad : function(){},
			beforeLoad : function(){}
		};
		var options = $.extend(defaults, options);
		
		return this.each(function(options){
			if(!$('.dccontent',this).length){
				$(this).html('<span class="dccontent">'+$(this).html()+'</span><span class="dchead right"></span><div class="clear"></div>');
				// onLoad callback;
				defaults.beforeLoad.call(this);
				$('span',this).css({display: 'block', textAlign: 'center'});
				$('.dccontent').css({float: 'left'});
				$('.dchead.right').css({float: 'right'});
				var ht = $('.dccontent',this).height();
				var w = $(this).width();
				var wc = $('.dccontent',this).outerWidth(true) + (1*defaults.padding);
				var wp = Math.round((w - wc)/1);
				wc = w - (1*wp);
				$('.dccontent',this).css({padding: 0, width: wc+'px'});
				$('.dchead',this).css({padding: 0, height: ht+'px', width: wp+'px'});
				// onLoad callback;
				defaults.onLoad.call(this);
			}
		});
	};
})(jQuery);

/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
	var url = document.URL.split('#/')[1];
	if(url != undefined){
		url = '#/'+url;
		$('#top-menu li a[href="'+url+'"]').parent().addClass('active');
	}
	$('#top-menu li').click(function(){
		$('#top-menu li').removeClass('active');
		$(this).addClass('active');
	});
	
});

/*-----------------------------------------------------------------------------------*/
/*	SCROLL
/*-----------------------------------------------------------------------------------*/

$(function()
		{
			$('.scroll-pane').jScrollPane({
				verticalDragMinHeight		: 0,
				verticalDragMaxHeight		: 100,
				verticalGutter				: 10,
				mouseWheelSpeed				: 0,
			});

	});

/*-----------------------------------------------------------------------------------*/
/*	SLIDESHOW
/*-----------------------------------------------------------------------------------*/	
	
$(function() {

    $('#slideshow').cycle({

        speed:    800, 
        timeout:  0,
        prev:    '#prev',
        next:    '#next',
        pager:  '#nav',
        fx: 'fade',
  		cleartype: true,
  		cleartypeNoBg: true
    });
});

 $(document).ready(function() {
        $('#slideshow div ul li').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(200);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(200);
        });

    });
    
    $(document).ready(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto({autoplay_slideshow: false, overlay_gallery: false, social_tools:false, deeplinking: false, theme:'pp_default', slideshow:5000});
});


/*-----------------------------------------------------------------------------------*/
/*	TITLE
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
	
	// Add to header tags
	$('.title').dcHeader({padding: 15});
	
});
	    
/*-----------------------------------------------------------------------------------*/
/*	BG
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($){
	var b = $('body').height();
			var h = $('.outer-wrapper').outerHeight();
			ht = b > h ? b : h ;
			$('.bg, .tile').css({height: ht+'px'});
});

/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($){
	$('.forms').dcSlickForms();
	
});