var sliders = $(".projects__slider");
for(let i = 0; i < sliders.length; i++) {
	var slides = sliders[i].querySelectorAll(".projects__slide");
	$(sliders[i]).siblings(".projects__count-slide").text("1/" + slides.length);
}
$(".projects__slider").slick({
	prevArrow: '<svg class="projects__arrow projects__arrow--prev " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.5 20.1"><path class="projects__arrow-path" fill="none" stroke="#828181" stroke-miterlimit="10" d="M10.2 19.5L.9 10.2 10.2.5"/></svg>',
    nextArrow: '<svg class="projects__arrow projects__arrow--next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.6 19.9"><path class="projects__arrow-path" fill="none" stroke="#828181" stroke-miterlimit="10" d="M.5.4l9.3 9.3-9.3 9.8"/></svg>'
});

 $(".projects__slider").on('afterChange', function(event, slick, currentSlide){
 	$(this).siblings(".projects__count-slide").text(currentSlide + 1 + "/7");
});