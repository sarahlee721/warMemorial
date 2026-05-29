/* 메뉴 */
$(function () {
	$(".btn_menu").click(function () {
		$(".back_layer").fadeIn(300);
		$(".menu_list_box").addClass("active");
	});
	$(".btn_close, .back_layer").click(function () {
		$(".back_layer").fadeOut(500);
		$(".menu_list_box").removeClass("active");
	});

	$("ul.menu_list_sub > li > a").each(function (index) {
		$(this).on({
			click: function () {
				$(this).next().fadeToggle(300);
			},
		});
	});
});

$(function () {
  const $document = $(document);
  $document.on("click", ".serbtn", function () {
    $(".back_layer").fadeIn(500);
    $(".searchcon").addClass("active");
  });

  // 메뉴 닫기
  $document.on("click", ".ser_close, .back_layer", function () {
    $(".back_layer").fadeOut(500);
    $(".searchcon").removeClass("active");
  });

});