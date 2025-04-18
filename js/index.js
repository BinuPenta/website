
$(document).ready(function(){
    const hamburger = $(".penta-home__body-navbar-hamburger");
    const navMenu = $(".penta-home__body-navbar-menu");
    const parallax = $('.penta-home__body-parallax-wrapper');
    const baseLayer = $('.base-layer');
    const baseTextLayer = $('.base-layer').find('.penta-home__body-text');
    const midLayer = $('.mid-layer');
    const midTextLayer = $('.mid-layer').find('.penta-home__body-text');
    const topLayer = $('.top-layer');
    const topTextLayer = $('.top-layer').find('.penta-home__body-text');
    const careLearnerButton = $('#penta-carelearner-button');
    const firstProduct = $('#product-section-1');
    const secondProduct = $('#product-section-2');
    const thirdProduct = $('#product-section-3');

    // const footerImg = $('.penta-home__body-parallax-footer-img img')

    var screenWidth =  $(window).width();
    responsiveMenuBar(screenWidth);
    const moveLogo = function(){
        logoAlign()
        $('.penta-home__body-parallax-landinglogo img').css({
            'transform': 'translate('+ translateXCalculations() +'%,'+ translateYCalculations() +'%) scale('+ scaleCalculations() + ')'})
            
    }
    const eventTextParallax = function() {
        // console.log(parallax.scrollTop())
        eventBaseLayer();
        eventMidLayer();
        eventTopLayer();
    }
    const eventBaseLayer = function(){
        if(parallax.scrollTop() >= 75 && parallax.scrollTop() <= 1000){
            baseLayer.css({'opacity' : 1});
            if(isSafariBrowser()){
                baseLayer.css({'transform' : 'none'})
            }
        }
        else{
            baseLayer.css({'opacity': 0});
        }
    }
    const eventMidLayer = function(){
        if(parallax.scrollTop() >= 100 && parallax.scrollTop() <= 1000){
            midLayer.css({'opacity' : 1});
            baseTextLayer.css({'opacity': 0});
            midTextLayer.css({'opacity': 1})
            if(isSafariBrowser()){
                midLayer.css({'transform' : 'none'})
            }
        }
        else{
            midLayer.css({'opacity': 0});
            midTextLayer.css({'opacity': 0})
            baseTextLayer.css({'opacity': 1});
        }
    }
    const eventTopLayer = function(){
        if(parallax.scrollTop() >= 160 && parallax.scrollTop() <= 1000){
            topLayer.css({'opacity' : 1});
            midTextLayer.css({'opacity': 0});
            topTextLayer.css({'opacity': 1});
        }
        else{
            topLayer.css({'opacity': 0});
            midTextLayer.css({'opacity': 1});
            topTextLayer.css({'opacity': 0});
        }
    }
    const logoAlign = function() {
        if(parallax.scrollTop() > 90){
            $('.penta-home__body-header-logo img').css({
                'opacity': 1
            })
            $('.penta-home__body-parallax-landinglogo img').css({
                'opacity': 0
            })
        }
        else {
            $('.penta-home__body-header-logo img').css({
                'opacity': 0
            })
            if(parallax.scrollTop() < 80) {
                $('.penta-home__body-parallax-landinglogo img').css({
                    'opacity': 1
                })
            }
           
            $('.penta-home__body-parallax-landinglogo').css({
                'height': heightCalculations()*1.25 + '%' 
            })
        }
    }
    const translateXCalculations = function() {
        if(parallax.scrollTop() <= 90){
            return 100-(1.4 * parallax.scrollTop())
        }
        else{
            return -27
        }
            
    }
    const translateYCalculations = function() {
        if(parallax.scrollTop() <= 90){
            return (100-(5 * parallax.scrollTop()))/10
        }
        else{
            return -27
        }
    }
    const scaleCalculations = function(){
        if(parallax.scrollTop() <= 90) {
            return (1- parallax.scrollTop()/100)
        }
        else{
            return 0.1
        }
    }
    const heightCalculations = function(){
        if(parallax.scrollTop() <= 100){
            return (100 - parallax.scrollTop())
        }
        
    }
    careLearnerButton.on("click", () => {
        window.location.href = 'https://carelearner.co.uk'
    })

    hamburger.on("click", () => {
        hamburger.toggleClass("active");
        navMenu.toggleClass("active");
        if(navMenu.hasClass("active")){
            navMenu[0].style.width = "100%"
        }
        else{
            navMenu[0].style.width = "0";
        }
    })
    
    $(".nav-link").each(function() {
        $(this).on("click", () => {
            hamburger.removeClass("active");
            navMenu.removeClass("active");
        })
    }
    )
    // Prodct parallax events
    const eventProductParallax = function(){
        let scrollPosition = parallax.scrollTop(); // Current scroll position
        let viewportHeight = $(window).height();  // Height of the viewport
        console.log('product:', scrollPosition)
        console.log('viewportHeight:', viewportHeight)
        eventFirstProduct(scrollPosition, viewportHeight)
        eventSecondProduct(scrollPosition, viewportHeight)
        eventThirdProduct(scrollPosition, viewportHeight)
    }
    const eventFirstProduct = function(scrollPosition, viewportHeight){
        if(scrollPosition < viewportHeight * 2.7){
            firstProduct.css({'opacity' : 1});
        }
        else{
            firstProduct.css({'opacity' : 0});
        }
    }
    const eventSecondProduct = function(scrollPosition, viewportHeight){
        if(scrollPosition > (viewportHeight * 3.1) && scrollPosition < (viewportHeight * 3.6)){
            secondProduct.css({'opacity' : 1});
        }
        else{
            secondProduct.css({'opacity' : 0});
        }
    }
    const eventThirdProduct = function(scrollPosition, viewportHeight){
        if(scrollPosition > (viewportHeight * 4.1)){
            thirdProduct.css({'opacity' : 1});
        }
        else{
            thirdProduct.css({'opacity' : 0});
        }
    }

    // const eventFooterParallax = (footerResponsive) => {
    //    if(parallax.scrollTop() >= footerResponsive){
    //     $(footerImg).css({
    //         'opacity': 1,
    //     });
    //    }
    //    if(screenWidth >= 428){
    //         if(parallax.scrollTop() >= footerResponsive && parallax.scrollTop() <= (footerResponsive + 50)){
    //             const scrollValue = parallax.scrollTop() - Math.floor(parallax.scrollTop()/100) * 100
    //             if(scrollValue <= 50){
                    
    //                 $(footerImg).css({
    //                     'transform': `translate(0%, ${50 - scrollValue}%)`
    //                 })
    //             }
    //         }
    //         else{
    //             $(footerImg).css({
    //                 'transform': `translate(0%, 0%)`
    //             })
    //         }
    //    }
        

    // }
     

    parallax.on('scroll mousewheel', function(event) {
        $('html, body').animate({
            scrollTop: $(parallax).offset().top
          }, 10000);
        screenWidth = $(window).width(); // New width
        // var footerResponsive =  responsiveScreenFooter(screenWidth);

        moveLogo();
        eventTextParallax()
        // console.log(parallax.scrollTop())
        // eventProductParallax()
        // eventFooterParallax(footerResponsive)
    })
})

// window.addEventListener('scroll', function() {
//     let element = document.getElementById('disappear');
//     let scrollPosition = window.scrollY;
//     console.log(scrollPosition)
    
    // Set the scroll position where the element should disappear
    // if (scrollPosition > 300) { // Adjust this value as needed
    //     element.classList.add('hidden');
    // } else {
    //     element.classList.remove('hidden');
    // }
// });


const responsiveScreenFooter = function(screenWidth) {
    switch(screenWidth) {
        case 2560:
            return 4900;
        case 1440:
            return 4800;
        default:
            return 4900;
    }
}

const isSafariBrowser = function() {
     // Detect Safari
     let userAgentString = navigator.userAgent;
     let safariAgent = userAgentString.indexOf("Safari") > -1;
     let chromeAgent = userAgentString.indexOf("Chrome") > -1;
     
     // Discard Safari since it also matches Chrome
     if ((chromeAgent) && (safariAgent)){
         safariAgent = false;
     }
     return safariAgent;
}

const responsiveMenuBar = function(screenWidth) {
    const menuWeb = $('.penta-home__body-navbar')
    const menuMobile = $('.penta-home__body-navbar-mobile')
    console.log(screenWidth)
    if(screenWidth <= 768) {
        menuWeb.css({'display': 'none'})
        menuMobile.css({'display': 'flex'})
    }
    else{
        menuMobile.css({'display': 'none'})
    }
}