let imgPop = document.querySelectorAll('.images-benefits');
imgPop.forEach(popup => popup.addEventListener('click', () => {
	popup.classList.toggle('active');

}));

let animated = document.querySelectorAll('.animated-appear');

function scrollToAppear() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i = 0; i < animated.length; i++) {
		let heightScroll = animated[i].offsetTop;
		if (heightScroll - 550 < scrollTop) {
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

let currentIndex = 0;

function changePicture(elementId) {
	if (currentIndex >= pictures.length) {
		currentIndex = 0;
	}
	document.getElementById(elementId).src = pictures[currentIndex];
	currentIndex++;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const asyncAppear = async () => {
	// Muestra las 4 primeras imágenes de inmediato
	for (let i = 1; i <= 4; i++) {
		changePicture(`image-${i}`);
		await delay(300);
	}

	// Luego, cambia las imágenes una por una cada 1.5 segundos
	const imageIds = ['image-1', 'image-2', 'image-3', 'image-4'];

	setInterval(async () => {
		for (const imageId of imageIds) {
			changePicture(imageId);
			await delay(1500);
		}
	}, 6000);
};

asyncAppear();


document.addEventListener("DOMContentLoaded", () => {
	const merchSlides = async () => {

		await new Promise((resolve) => setTimeout(resolve, 2000));

		const sdBrand = document.querySelector(".sd-brand-images");
		let counter = 1;

		function changeImages() {
			sdBrand.src = `../Pictures/merch-slides/stranger-dudes-merch-${counter}.png`;

			counter++;
			if (counter > 22) {
				counter = 1;
			}
		}

		changeImages();

		setInterval(changeImages, 800);
	}


	merchSlides();
});
