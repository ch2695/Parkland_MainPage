$(function () {
	/* GNB 서브메뉴 */
	$(".mainLi").click(function () {
		if ($(this).children("ul").css({"display": "none"})) {
			$(this).children("ul").css({"display": "block"});
		}

		if ($(this).children("ul").css({"display": "block"})) {
			$(this).children("ul").css({"display": "none"});
		}
	});
	/* GNB 서브메뉴 */

	/* 이미지 슬라이드 */
	setInterval(fnSlide, 5000);

	function fnSlide() {
		$("#shuttleFrame").animate({
				"margin-left": "-1000px"
			},
			400,
			"swing",
			function () {
				$("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");
				$("#shuttleFrame").css({
					"margin-left": "0"
				});
			}
		);
	}
	/* 이미지 슬라이드 */
});
