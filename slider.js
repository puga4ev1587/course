const slider1 = document.querySelector(".u-section-1-1");
const slider2 = document.querySelector(".u-section-1-2");

const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");

button1.onclick = function () {
  slider1.classList.add("block");
  slider2.classList.remove("block");
  console.log("кнопка 1");
};

button2.onclick = function () {
  slider1.classList.remove("block");
  slider2.classList.add("block");
  console.log("кнопка 2");
};

console.log(slider2.classList);
