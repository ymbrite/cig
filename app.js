const images = document.querySelectorAll('.main-2 img');
const imgBox = document.querySelector('.img-box');
const img = document.getElementById('img');
const close = document.getElementById('close');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const filterButtons = document.querySelectorAll('.filter-buttons button');
// const activeFilter = document.querySelector('.active');

let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        imgBox.style.display = 'flex';
        img.src = image.src;
        currentIndex = index;
        console.log(currentIndex);
        console.log(image);

    })
})

close.addEventListener('click', () => {
    imgBox.style.display = 'none';
})

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex].src;
    console.log(currentIndex);
})

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    img.src = images[currentIndex].src;
    console.log(currentIndex);
})

filterButtons.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
        console.log(btn)
        document.querySelector('.active').classList.remove('active');
        // activeFilter.classList.remove('active');
        btn.classList.add('active');


        const filter = btn.getAttribute('data-filter');
        images.forEach((image) => {
            if (filter === 'all' || image.getAttribute('data-category') === filter) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        })
    })
})