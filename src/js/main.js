// Узнать сколько всего слайдов в каждом слайдере и написать это в спец теге
var sliders = $(".projects__slider");
for(var i = 0; i < sliders.length; i++) {
	var slides = sliders[i].querySelectorAll(".projects__slide");
	$(sliders[i]).siblings(".projects__count-slide").attr("data-length", slides.length);
	$(sliders[i]).siblings(".projects__count-slide").text("1/" + slides.length);
}
// Добавление своих кастомных стрелок для слайдеров
$(".projects__slider").slick({
	prevArrow: '<svg class="projects__arrow projects__arrow--prev" width="11" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.5 20.1"><path class="projects__arrow-path" fill="none" stroke="#828181" stroke-miterlimit="10" d="M10.2 19.5L.9 10.2 10.2.5"/></svg>',
    nextArrow: '<svg class="projects__arrow projects__arrow--next" width="11" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.6 19.9"><path class="projects__arrow-path" fill="none" stroke="#828181" stroke-miterlimit="10" d="M.5.4l9.3 9.3-9.3 9.8"/></svg>'
});
// Добавление счетчика для слайдов
$(".projects__slider").on('afterChange', function(event, slick, currentSlide){
 	var elemForCount = $(this).siblings(".projects__count-slide");
 	elemForCount.text(currentSlide + 1 + "/" + elemForCount.attr("data-length"));
});

 // Окно прайс-листа при закрытие
$(".price__descr .descr__close").on("click", function() {
	$(this).parent().css("display", "none");

	setInterval(function() {
		$(".price__descr").removeAttr("style");
	}, 1000);
});

// Слайдеры для отзывов и шагов
$(".feed-item__slider").slick({
	nextArrow: "<div class='feed-item__arrow feed-item__arrow--next'><svg width='10' height='20' xmlns='http://www.w3.org/2000/svg'><path fill='none' stroke='#000' stroke-miterlimit='10' d='M0 20l10-10M0 0l10 10.7'/></svg></div>",
	prevArrow: "<div class='feed-item__arrow feed-item__arrow--prev'></div>"
});

// Открытие вопросов в секции faq 
$(".faq__btn").on("click", function() {
	$(this).siblings(".faq__quest").toggleClass("faq__quest--opened");
	$(this).toggleClass("faq__btn--opened");
	$(this).siblings(".faq__answer").toggle(300);


});
