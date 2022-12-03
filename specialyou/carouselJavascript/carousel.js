// const slides = document.querySelectorAll('.slide');

// const slider = document.querySelector('.slideContainer');

// const leftButton = document.querySelector('.sliderBtnLeft');
// const rightButton = document.querySelector('.sliderBtnRight'); 
// let currentSlide = 0;
// // console.log("raghav");
// // console.log(slides);
// // 0%,100%,200%,300%
// let maxSlides = slides.length;
// console.log(maxSlides);

// slides.forEach((s,i) => (s.style.transform = `translateX(${100*i}%)`));

// slider.style.transform = 'scale(0.5) translateX(-600px)';
// slider.style.border = ' 2px solid green';

// rightButton.addEventListener('click',function(){
//     if (currentSlide === maxSlides-1)
//     currentSlide = 0;
//     else {
//         currentSlide++;
//     slides.forEach((s,i) => (s.style.transform = `translateX(${100*(i-currentSlide)}%)`));
//     }

// });


const slides = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slideContainer');
const leftButton = document.querySelector('.sliderBtnLeft');
const rightButton = document.querySelector('.sliderBtnRight');

let currentSlide = 0;

slides.forEach((slide,index) => (slide.style.transform = `translate(${100*index}%)`));
slideContainer.style.transform = 'scale(0.5) translateX(-600px)';
slideContainer.style.border = ' 2px solid green';

const rightButtonHandler = () => {
    currentSlide++;
    slides.forEach((slide,index) => (slide.style.transform = `translateX(${100*(index-currentSlide)}%)`));
};

rightButton.addEventListener('click',rightButtonHandler);