// const cards = document.querySelectorAll('.card');
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');
// const dotsContainer = document.querySelector('.dots');
// let currentIndex = 0;
// let autoSlideInterval;

// function updateSlider() {
//     const cardSlider = document.querySelector('.card-slider');
//     const cardWidth = cardSlider.offsetWidth;
//     const track = document.querySelector('.card-track');

//     track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

//     document.querySelectorAll('.dots span').forEach(dot => dot.classList.remove('active'));
//     if (dotsContainer.children[currentIndex])
//         dotsContainer.children[currentIndex].classList.add('active');
// }


// function createDots() {
//     cards.forEach((_, index) => {
//         const dot = document.createElement('span');
//         if (index === 0) dot.classList.add('active');
//         dot.addEventListener('click', () => {
//             currentIndex = index;
//             updateSlider();
//             resetAutoSlide(); 
//         });
//         dotsContainer.appendChild(dot);
//     });
// }

// prev.addEventListener('click', () => {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
//     updateSlider();
//     resetAutoSlide(); 
// });

// next.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % cards.length;
//     updateSlider();
//     resetAutoSlide(); 
// });

// function startAutoSlide() {
//     autoSlideInterval = setInterval(() => {
//         currentIndex = (currentIndex + 1) % cards.length;
//         updateSlider();
//     }, 2000); 
// }

// function resetAutoSlide() {
//     clearInterval(autoSlideInterval);
//     startAutoSlide();
// }

// createDots();
// updateSlider();
// startAutoSlide(); 
