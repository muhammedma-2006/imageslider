let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
let intervalId = null;

function initialiseSlider(){
    if(slides.length){
        slides[slideIndex].classList.add("displaySlide");
            intervalId =setInterval(nextSlide,5000);


        
    }
}
function showSlide(index){
 

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })
     slide[slideIndex].classList.add("displaySlide");
}
function prevSlide(){

    slideIndex--;
    showSlide(slideIndex);

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}