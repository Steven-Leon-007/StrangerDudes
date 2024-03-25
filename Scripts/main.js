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
	'../assets/images/Stranger-Dude-1.webp',
	'../assets/images/Stranger-Dude-2.webp',
	'../assets/images/Stranger-Dude-3.webp',
	'../assets/images/Stranger-Dude-4.webp',
	'../assets/images/Stranger-Dude-5.webp',
	'../assets/images/Stranger-Dude-6.webp',
	'../assets/images/Stranger-Dude-7.webp',
	'../assets/images/Stranger-Dude-8.webp',
	'../assets/images/Stranger-Dude-9.webp',
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

		// Precargar imágenes
		const imagePromises = Array.from({ length: 22 }, (_, index) => {
			const img = new Image();
			img.src = `../assets/merch-slides/stranger-dudes-merch-${index + 1}.webp`;
			return new Promise((resolve) => {
				img.onload = resolve;
			});
		});

		await Promise.all(imagePromises);

		function changeImages() {
			sdBrand.src = `../assets/merch-slides/stranger-dudes-merch-${counter}.webp`;

			counter++;
			if (counter > 22) {
				counter = 1;
			}
		}

		changeImages();

		setInterval(changeImages, 800);
	};

	merchSlides();
});

const textElements = document.querySelectorAll('#Layer_5 text');

textElements.forEach((text, index) => {
	// Asignar un color diferente a cada elemento de texto
	text.addEventListener("mouseover", () => {
		text.style.fill = `hsl(${index * (360 / textElements.length)}, 70%, 50%)`;
	})

	text.addEventListener("mouseout", () => {
        setTimeout(() => {
            text.style.fill = "#fff";
        }, 2000); 
    });
});