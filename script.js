let currentIndex = 0;

const images = document.querySelectorAll('.gallery-container img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}


showImage(currentIndex);

