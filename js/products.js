
function init() {
    let current = 0;
    let directionForward = true;
    const items = document.querySelectorAll('.penta-home__body-parallax-products-card_slider-items-each');
    const nextBtn = document.querySelector('.penta-home__body-parallax-products-card_slider-next');
    const prevBtn = document.querySelector('.penta-home__body-parallax-products-card_slider-next');
    const getCurrentItem = function() {
        return;
    }
    const getCard = function(item) {
        return item.find('.penta-home__body-parallax-products-card_slider-items-each-card');
    }
    const getTitle = function(item) {
        return item.find('.penta-home__body-parallax-products-card_slider-items-each-text h3');
    }

    const setItems = function() {
        items.each(function(item, index){
            if(index === current) return;
            set(getCard(item), {
                translateX: '100vw'
            }) 
        })
        set(items(current), {
            translateX: 0,
            opacity: 1,
        }) 
 
    }
    const animate = {
        

        in(item) {
            const card = getCard(item);
            const title = getTitle(item);

            const t1 = timeline({
                duration: 1000,
                easing: "easeOutExpo"
            })

            t1.add({
                targets: card,
                translateX: directionForward ? ["100vw, 0"] : ["-100vw", 0],
                rotate: [40, 0]
            }).add({
                targets: title
            })
        }
    }
}
document.addEventListener('DOMContentLoaded', init);