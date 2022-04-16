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


const pictures = [
	'../Pictures/Stranger-Dude-1.png',
	'../Pictures/Stranger-Dude-2.png',
	'../Pictures/Stranger-Dude-3.png',
	'../Pictures/Stranger-Dude-4.png',
	'../Pictures/Stranger-Dude-5.png',
	'../Pictures/Stranger-Dude-6.png',
	'../Pictures/Stranger-Dude-7.png',
	'../Pictures/Stranger-Dude-8.png',
	'../Pictures/Stranger-Dude-9.png',
];

let count = 0;

changePictures = function(){
	if(count == pictures.length){
		count = 0;
	}
	document.getElementById("image-1").src = pictures[count];
	count++;
}

changePictures2 = function(){
	if(count == pictures.length){
		count = 0;
	}
	document.getElementById("image-2").src = pictures[count];
	count++;
}

changePictures3 = function(){
	if(count == pictures.length){
		count = 0;
	}
	document.getElementById("image-3").src = pictures[count];
	count++;
}

changePictures4 = function(){
	if(count == pictures.length){
		count = 0;
	}
	document.getElementById("image-4").src = pictures[count];
	count++;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const asyncAppear = async () => {
    
	await delay(1500);
	changePictures();

	await delay(1500);
	changePictures2();

	await delay(1500);
	changePictures3();
	
	await delay(1500);
	changePictures4();

  };


setInterval(asyncAppear, 6000);