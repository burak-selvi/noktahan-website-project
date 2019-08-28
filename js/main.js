
const prev = document.querySelector('#home #prev');
const next = document.querySelector('#home #next');
const slider = document.querySelector('.sldr-container-home');
const slides = document.querySelectorAll('.item-home');
const size = slides[0].clientWidth;
let counter = 1;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';


prev.addEventListener('click', () => {
  prevSlide();
});

next.addEventListener('click', () => {
  nextSlide();
});

const nextSlide = () => {
  if (counter >= slides.length - 1) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
};

const prevSlide = () => {
  if (counter <= 0) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
};


slider.addEventListener('transitionend', () => {
  if (slides[counter].id === 'lastCloneHome') {
    slider.style.transition = 'none';
    counter = slides.length - 2;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
  }
  if (slides[counter].id === 'firstCloneHome') {
    slider.style.transition = 'none';
    counter = slides.length - counter;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
  }
});




/* Memories */
const prev3 = document.querySelector('#memories #prev');
const next3 = document.querySelector('#memories #next');
const slider3 = document.querySelector('.sldr-container-memories');
const slides3 = document.querySelectorAll('.item-memories');
const fClone = document.querySelector('#firstCloneMemories');
const sizeee = slides3[0].clientWidth;
let counterrr = 1;

slider3.style.transform = 'translateX(' + (-sizeee * counterrr) + 'px)';

next3.addEventListener('click', () => {
  nextSlide3();
});

prev3.addEventListener('click', () => {
  prevSlide3();
});


const nextSlide3 = () => {
  const current = document.querySelector('.selected');

  if (counterrr >= slides3.length - 2) return;
  slider3.style.transition = "transform 0.5s ease-in-out";
  counterrr++;
  current.classList.remove('selected');
  current.style.transition = "none";
  current.nextElementSibling.classList.add('selected');


  slider3.style.transform = 'translateX(' + (-sizeee * counterrr) + 'px)';
};

const prevSlide3 = () => {
  const current = document.querySelector('.selected');
  if (counterrr <= -1) return;
  slider3.style.transition = "transform 0.5s ease-in-out";
  counterrr--;
  current.style.transition = "none";
  current.classList.remove('selected');
  current.previousElementSibling.classList.add('selected');
  slider3.style.transform = 'translateX(' + (-sizeee * counterrr) + 'px)';
};

slider3.addEventListener('transitionend', () => {

  if (slides3[counterrr + 1].id === 'lastCloneMemories') {
    const current = document.querySelector('.selected');
    current.style.transition = 'none';
    current.classList.remove('selected');
    slides3[slides3.length - 2].classList.add('selected');
    counterrr = slides3.length - 3;
    slider3.style.transition = 'none';
    slider3.style.transform = 'translateX(' + (-sizeee * counterrr) + 'px)';
  }
  if (slides3[counterrr + 1].id === 'firstCloneMemories') {
    const current = document.querySelector('.selected');
    current.style.transition = 'none';
    current.classList.remove('selected');
    slides3[1].classList.add('selected');
    counterrr = slides3.length - counterrr - 2;
    slider3.style.transition = 'none';
    slider3.style.transform = 'translateX(' + (-sizeee * counterrr) + 'px)';
  }
});





/* Comments */
const prev2 = document.querySelector('#comments #prev');
const next2 = document.querySelector('#comments #next');
const slider2 = document.querySelector('.sldr-container-comments');
const slides2 = document.querySelectorAll('.item-comments');
const sizee = slides2[0].clientWidth;
let counterr = 1;

slider2.style.transform = 'translateX(' + (-sizee * counterr) + 'px)';


prev2.addEventListener('click', () => {
  prevSlide2();
});

next2.addEventListener('click', () => {
  nextSlide2();
});

const nextSlide2 = () => {
  if (counterr >= slides2.length - 1) return;
  slider2.style.transition = "transform 0.4s ease-in-out";
  counterr++;
  slider2.style.transform = 'translateX(' + (-sizee * counterr) + 'px)';

};

const prevSlide2 = () => {
  if (counterr <= 0) return;
  slider2.style.transition = "transform 0.4s ease-in-out";
  counterr--;
  slider2.style.transform = 'translateX(' + (-sizee * counterr) + 'px)';
};


slider2.addEventListener('transitionend', () => {
  if (slides2[counterr].id === 'lastCloneComments') {
    slider2.style.transition = 'none';
    counterr = slides2.length - 2;
    slider2.style.transform = 'translateX(' + (-sizee * counterr) + 'px)'
  }
  if (slides2[counterr].id === 'firstCloneComments') {
    slider2.style.transition = 'none';
    counterr = slides2.length - counterr;
    slider2.style.transform = 'translateX(' + (-sizee * counterr) + 'px)'
  }
});



/* Lezzetler */
const tastes = document.querySelectorAll('.wrapper-taste-1 ul li');
const imgs = document.querySelectorAll('.taste2-item');

tastes.forEach(function (temp, index) {
  temp.addEventListener('click', () => {
    change(temp, index);
  });

});

const change = (val, index) => {
  const current = document.querySelector('.selected-taste');
  const currentImg = document.querySelector('.selected-taste-img');
  current.classList.remove('selected-taste');
  val.classList.add('selected-taste');
  currentImg.classList.remove('selected-taste-img');
  imgs[index].classList.add('selected-taste-img');
};
