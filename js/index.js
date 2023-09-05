
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
    const productsSection = $('.penta-home__body-parallax-products')

    // products
    const productBox = $('.penta-home__body-parallax-products-content-box')
    const prevBtn = $('.penta-home__body-parallax-products-controls-prev')
    const nextBtn = $('.penta-home__body-parallax-products-controls-next')
    var i = 0;

    // footer
    const footerImg = $('.penta-home__body-parallax-footer-img img')
    
    // Safari 3.0+ "[object HTMLElementConstructor]" 
    // var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
    // console.log(isSafari)
   
    var screenWidth =  $(window).width();

    // $(window).resize(function() {
    //     // This will execute whenever the window is resized
    //     $(window).height(); // New height
    //     screenWidth = $(window).width(); // New width
    //     var footerResponsive =  responsiveScreenFooter(screenWidth);
    //   });
      
    //  var footerResponsive =  responsiveScreenFooter(screenWidth);

    const moveLogo = function(){
        logoAlign()
        $('.penta-home__body-parallax-landinglogo img').css({
            'transform': 'translate('+ translateXCalculations() +'%,'+ translateYCalculations() +'%) scale('+ scaleCalculations() + ')'})
            
    }
    const eventTextParallax = function() {
        eventBaseLayer();
        eventMidLayer();
        eventTopLayer();
    }
    const eventBaseLayer = function(){
        if(parallax.scrollTop() >= 60 && parallax.scrollTop() <= 900){
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
        if(parallax.scrollTop() >= 100 && parallax.scrollTop() <= 900){
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
        if(parallax.scrollTop() >= 160 && parallax.scrollTop() <= 900){
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
        else{
            $('.penta-home__body-header-logo img').css({
                'opacity': 0
            })
            $('.penta-home__body-parallax-landinglogo img').css({
                'opacity': 1
            })
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

    hamburger.on("click", () => {
        hamburger.toggleClass("active");
        navMenu.toggleClass("active");
        if(navMenu.hasClass("active")){
            if(screenWidth <= 425){
                navMenu[0].style.width = "75%"
            }
            else{
                navMenu[0].style.width = "50%"
            }
            
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

    const eventFooterParallax = (footerResponsive) => {
        console.log(screenWidth)
        console.log(parallax.scrollTop())
        console.log(footerResponsive)
       if(parallax.scrollTop() >= footerResponsive){
        $(footerImg).css({
            'opacity': 1,
        });
       }
       if(screenWidth >= 428){
            if(parallax.scrollTop() >= footerResponsive && parallax.scrollTop() <= (footerResponsive + 50)){
                const scrollValue = parallax.scrollTop() - Math.floor(parallax.scrollTop()/100) * 100
                if(scrollValue <= 50){
                    
                    $(footerImg).css({
                        'transform': `translate(0%, ${50 - scrollValue}%)`
                    })
                }
            }
            else{
                $(footerImg).css({
                    'transform': `translate(0%, 0%)`
                })
            }
       }
        

    }

    const eventProductThemeToggle = () => {

        var vh =  window.innerHeight
        var screenMath = ((parallax.scrollTop()/ vh)).toFixed(2)
        if(screenMath >= 3.70 && screenMath <= 3.90){
            $(productBox).removeClass('transparentbg')
        }
        else{
            $(productBox).addClass('transparentbg')
        }
    }

    nextBtn.on('click', () => {
        if($(productBox[i]).hasClass('active')){
            $(productBox[i]).removeClass('active');
            i = (i+1)% $(productBox).length
            $(productBox[i]).addClass('active');
        }

    })    
    prevBtn.on('click', () => {
        if($(productBox[i]).hasClass('active')){
            $(productBox[i]).removeClass('active');
            i = (i-1 + $(productBox).length)% $(productBox).length
            $(productBox[i]).addClass('active');
        }
    })   

    parallax.on('scroll mousewheel', function(event) {
        $('html, body').animate({
            scrollTop: $(parallax).offset().top
          }, 10000);
        screenWidth = $(window).width(); // New width
        var footerResponsive =  responsiveScreenFooter(screenWidth);
        moveLogo();
        eventTextParallax()
        eventProductThemeToggle()
        eventFooterParallax(footerResponsive)
    })
})


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