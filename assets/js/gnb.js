$(document).ready(function(){
	function clickMenu() {
		$('.btn_side').off('click').on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$('.menu').toggleClass('active');
			if($('.btn_side').hasClass('active')){
				$('.menuBg').fadeIn(400);
			} else{
				$('.menuBg').fadeOut(500);
			};
		});
		$('.menuBg').on('click', function(){
			$('.menuBg').fadeOut(500);
			$('.btn_side').removeClass('active');
			$('.menu').removeClass('active');
		});
	};
	clickMenu();
	function widthCheck() {
		var winWidth = $(window).width();
		$('.btn_list').off('click');
		if(winWidth <= 1024) {
			$('.sub_menu').stop().slideUp(400);
			$('.m_list').removeClass('active');
			$('.btn_list').on('click', function(e){
				e.preventDefault();
				$('.sub_menu').stop().slideUp(400);
				$(this).next().stop().slideToggle(400, function(){
					$(this).css('height', 'auto');
				});
				$(this).parent('.m_list').toggleClass('active')
				if($(this).parent('.m_list').hasClass('active')) {
					$('.m_list').removeClass('active');
					$(this).parent('.m_list').addClass('active')
				};
			});
		} else{
			$('.sub_menu').stop().slideDown(100, function(){
				$(this).css('height', 'auto');
			});
		};
	};
	widthCheck();
	$(window).resize(function() {
		widthCheck();
		$('.sub_menu').css('height', 'auto');
	});
});