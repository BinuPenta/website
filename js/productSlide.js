let nextDom1 = document.getElementById('card-1-next');
let prevDom1 = document.getElementById('card-1-prev');
let nextDom2 = document.getElementById('card-2-next');
let prevDom2 = document.getElementById('card-2-prev');
let nextDom3 = document.getElementById('card-3-next');
let prevDom3 = document.getElementById('card-3-prev');
let carouselDom1 = document.querySelector('.penta-home__body-parallax-product-card-carousel.product-card-carousel-1');
let carouselDom2 = document.querySelector('.penta-home__body-parallax-product-card-carousel.product-card-carousel-2');
let carouselDom3 = document.querySelector('.penta-home__body-parallax-product-card-carousel.product-card-carousel-3');
let listItemDom1 = document.querySelector('.product-card-carousel-1 .penta-home__body-parallax-product-card-carousel-list');
let listItemDom2 = document.querySelector('.product-card-carousel-2 .penta-home__body-parallax-product-card-carousel-list');
let listItemDom3 = document.querySelector('.product-card-carousel-3 .penta-home__body-parallax-product-card-carousel-list');
let thumbnailDom1 = document.querySelector('.product-card-carousel-1 .penta-home__body-parallax-product-card-carousel-thumbnail');
let thumbnailDom2 = document.querySelector('.product-card-carousel-2 .penta-home__body-parallax-product-card-carousel-thumbnail');
let thumbnailDom3 = document.querySelector('.product-card-carousel-3 .penta-home__body-parallax-product-card-carousel-thumbnail');

nextDom1.onclick = function() {
    showSlider1('next');
}
prevDom1.onclick = function() {
    showSlider1('prev');
}
nextDom2.onclick = function() {
    showSlider2('next');
}
prevDom2.onclick = function() {
    showSlider2('prev');
}
nextDom3.onclick = function() {
    showSlider3('next');
}
prevDom3.onclick = function() {
    showSlider3('prev');
}
let timeRunning = 3000;
let timeAutoNext = 10000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom1.click();
    nextDom2.click();
    nextDom3.click();
}, timeAutoNext);

function showSlider1(type){
    let itemSlider = document.querySelectorAll('.product-card-carousel-1 .penta-home__body-parallax-product-card-carousel-list-item')
    let itemThumbnail = document.querySelectorAll('.product-card-carousel-1 .penta-home__body-parallax-product-card-carousel-thumbnail-item')

    if(type === 'next'){
        listItemDom1.appendChild(itemSlider[0])
        thumbnailDom1.appendChild(itemThumbnail[0])
        carouselDom1.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom1.prepend(itemSlider[positionLastItem]);
        thumbnailDom1.prepend(itemThumbnail[positionLastItem]);
        carouselDom1.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom1.classList.remove('next');
        carouselDom1.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom1.click();
    }, timeAutoNext)
}

function showSlider2(type){
    let itemSlider = document.querySelectorAll('.product-card-carousel-2 .penta-home__body-parallax-product-card-carousel-list-item')
    let itemThumbnail = document.querySelectorAll('.product-card-carousel-2 .penta-home__body-parallax-product-card-carousel-thumbnail-item')

    if(type === 'next'){
        listItemDom2.appendChild(itemSlider[0])
        thumbnailDom2.appendChild(itemThumbnail[0])
        carouselDom2.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom2.prepend(itemSlider[positionLastItem]);
        thumbnailDom2.prepend(itemThumbnail[positionLastItem]);
        carouselDom2.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom2.classList.remove('next');
        carouselDom2.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom2.click();
    }, timeAutoNext)
}


function showSlider3(type){
    let itemSlider = document.querySelectorAll('.product-card-carousel-3 .penta-home__body-parallax-product-card-carousel-list-item')
    let itemThumbnail = document.querySelectorAll('.product-card-carousel-3 .penta-home__body-parallax-product-card-carousel-thumbnail-item')

    if(type === 'next'){
        listItemDom3.appendChild(itemSlider[0])
        thumbnailDom3.appendChild(itemThumbnail[0])
        carouselDom3.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom3.prepend(itemSlider[positionLastItem]);
        thumbnailDom3.prepend(itemThumbnail[positionLastItem]);
        carouselDom3.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom3.classList.remove('next');
        carouselDom3.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom3.click();
    }, timeAutoNext)
}