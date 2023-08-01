const myImgs = document.querySelectorAll('#imgs img');
const myImg = document.getElementById('imgs');
const leftBtn = document.querySelector('#left-button');
const rightBtn = document.querySelector('#right-button');
let currentSlide = 0;
const sliderD = document.querySelector('.slider');
const dotsActive = document.querySelectorAll('.dots-dot');

let interval = setInterval(run , 3000);
function run() {
    currentSlide++;
    changeImage();
}


function changeImage(){

if(currentSlide > myImgs.length - 1){
currentSlide = 0 ;
} else if(currentSlide < 0){
currentSlide = myImgs.length - 1
}

myImg.style.transform = `translateX(${-currentSlide * 100}%)`;

const dotsActive = document.querySelectorAll('.dots-dot');
dotsActive.forEach( r=> r.classList.remove('slider-dots-active') );
dotsActive[currentSlide].classList.add('slider-dots-active');



}

function resetInterval() {

clearInterval(interval);
interval = setInterval(run , 3000);
}
/////// button function
rightBtn.addEventListener('click' , function(){

currentSlide++;
changeImage();
resetInterval();

});

leftBtn.addEventListener('click' , function(){

currentSlide--;
changeImage();
resetInterval();

}) // left button event

const dotContainer = document.querySelector('.slider-dots');
const createDots = function() {

myImgs.forEach( function(_ , i){

dotContainer.insertAdjacentHTML( 'beforeend' , `<button class="dots-dot" data-slide="${i}"></button>` )

} )


}
createDots();

function dotButton(){

    const dotNum = document.querySelectorAll('.dots-dot').length;

if(currentSlide > dotNum - 1){
currentSlide = 0 ;
} else if(currentSlide < 0){
currentSlide = dotNum - 1
}

myImg.style.transform = `translateX(${-currentSlide * 100}%)`;
const dotsActive = document.querySelectorAll('.dots-dot');
dotsActive.forEach( r=> r.classList.remove('slider-dots-active') );
dotsActive[currentSlide].classList.add('slider-dots-active');


}

dotContainer.addEventListener('click' , function(e){

    if( e.target.classList.contains('dots-dot') ) {

        var dotDots = e.target.dataset.slide;
        console.log(dotDots);
        currentSlide = dotDots;

        dotButton();
        resetInterval();


    } // if er bracket


}) // event listener end

// cart button
const cartButton = document.querySelector('.cart');
const offCanvas = document.querySelector('.off-canvas-cart');
const cartCloseBtn = document.querySelector('.cart-close-btn');
cartButton.addEventListener('click' ,function() {
offCanvas.classList.add('active')
} );
cartCloseBtn.addEventListener('click' , function(){
 
offCanvas.classList.remove('active') 
})
