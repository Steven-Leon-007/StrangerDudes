let imgPop = document.querySelectorAll('.images-benefits');
imgPop.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active');

}));

