// ab me js likhta hu dekhta hu kiye hota ha
const addBtn = document.getElementById("prevBtn");
const crousal = document.querySelector("carousel");
const decBtn = document.getElementById("nextBtn");

// ab next step ha 
let index = 0;
const card = document.querySelectorAll("card");
const cardWidth = card[0].offsetwidth + 20;

nextBtn.addEventListener('click', () => {
  if (index < cards.length - 1) { // 3 cards ek saath dikhenge
    index++;
    carousel.style.transform = `translateX(-${cardWidth * index}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    carousel.style.transform = `translateX(-${cardWidth * index}px)`;
  }
});

    