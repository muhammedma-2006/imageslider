let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
let intervalId = null;

function initialiseSlider(){
    if(slides.length){
        slides[slideIndex].classList.add("displaySlide");
            intervalId =setInterval(nextSlide,5000);


        
    }
}
function showSlide(index){
    if(slideIndex > slides.length){
        slideIndex = 0;
    }
    else if(slideIndex < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })
     slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){

    slideIndex--;
    showSlide(slideIndex);

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
initialiseSlider();