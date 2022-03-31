let imgPop = document.querySelectorAll('.images-benefits');
imgPop.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active');

}));

let animated = document.querySelectorAll('.animated-appear');

function scrollToAppear() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i = 0; i < animated.length; i++) {
        let heightScroll = animated[i].offsetTop;
        if(heightScroll - 550 < scrollTop) {
            animated[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', scrollToAppear);