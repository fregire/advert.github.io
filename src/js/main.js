// Узнать сколько всего слайдов в каждом слайдере и написать это в спец теге
var sliders = $(".projects__slider");
for(var i = 0; i < sliders.length; i++) {
	var slides = sliders[i].querySelectorAll(".projects__slide");
	$(sliders[i]).siblings(".projects__count-slide").attr("data-length", slides.length);
	$(sliders[i]).siblings(".projects__count-slide").text("1/" + slides.length);
}
// Добавление своих кастомных стрелок для слайдеров
$(".projects__slider").slick({
	slidesToShow: 1,
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
	slidesToShow: 1,
	nextArrow: "<div class='feed-item__arrow feed-item__arrow--next'><svg width='10' height='20' xmlns='http://www.w3.org/2000/svg'><path fill='none' stroke='#000' stroke-miterlimit='10' d='M0 20l10-10M0 0l10 10.7'/></svg></div>",
	prevArrow: "<div class='feed-item__arrow feed-item__arrow--prev'><svg width='10' height='20' xmlns='http://www.w3.org/2000/svg'><path fill='none' stroke='#000' stroke-miterlimit='10' d='M10 0L0 10m10 10L0 9.3'/></svg></div>"
});

// Открытие вопросов в секции faq 
$(".faq__btn").on("click", function() {
	if($(this).hasClass("faq__btn--opened")){
		$(this).siblings(".faq__quest").removeClass("faq__quest--opened");
		$(this).removeClass("faq__btn--opened");
		$(this).siblings(".faq__answer").slideUp(300);
	} else {
		$(this).siblings(".faq__quest").addClass("faq__quest--opened");
		$(this).addClass("faq__btn--opened");
		$(this).siblings(".faq__answer").slideDown(300);
	}
	
	
	


});

// Формы 
$("input").on("focus", function() {
	$(this).siblings(".form__name").addClass("form__name--active");
});
$("input").on("blur", function() {
	if(($(this).val() == "") || ($(this).val() == "+7(___) ___-____")){
		$(this).siblings(".form__name").removeClass("form__name--active");
	}
});
// Маска для телефона 
$("input[type='tel']").mask("+7(999) 999-9999");


// Проверка форм
$(".btn--form").on("click", function(e) {
	var forms = $(".input");
	// Минус 1 т.к. форма с сообщением не обязательна к заполнению
	for(var i = 0; i < forms.length - 1; i++ ){
		if($(forms[i]).val() == ""){
			$(forms[i]).siblings(".form__name").addClass("form__name--error");
		}
	};
	e.preventDefault();
});

// Открытие меню 
$(".menu__mobile").on("click", function() {
	$(".menu__list").slideToggle(300, function() {
		if($(this).css("display") === "none"){
			$(this).removeAttr("style");
		}
	});
	
});

// Плавный переход к секциям
 $(".menu__list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
});

 // Переход к началу  страницы
 $(window).scroll(function() {
 
	if($(this).scrollTop() >= 200) {
	 
		$('.page__scroll').fadeIn();
	 
	} else {
	 
		$('.page__scroll').fadeOut();
	 
	}
	 
	});
	 
	$('.page__scroll').click(function() {
	 
	$('body,html').animate({scrollTop:0},800);
 
});

// Модальное окно 
$(".modal__close").on("click", function() {
	$(".modal").css("display", "none");
});

$(".btn--header").on("click", function() {
	$(".modal").css("display", "block");
});

$(".btn--main-screen").on("click", function() {
	$(".modal").css("display", "block");
});