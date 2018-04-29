var sliders = $(".projects__slider");
for(let i = 0; i < sliders.length; i++) {
	var slides = sliders[i].querySelectorAll(".projects__slide");
	$(sliders[i]).siblings(".projects__count-slide").text("1/" + slides.length);
}
$(".projects__slider").slick();

 $(".projects__slider").on('afterChange', function(event, slick, currentSlide){
 	$(this).siblings(".projects__count-slide").text(currentSlide + 1 + "/7");
});