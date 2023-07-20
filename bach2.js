// const andi = document.querySelector("#andi");
// const claire = document.querySelector("#claire");
// const sharleen = document.querySelector("#sharleen");

// document.querySelector("#andiNext").addEventListener("click", andiNext);
// document.querySelector("#claireNext").addEventListener("click", claireNext);
// document.querySelector("#sharleenNext").addEventListener("click", sharleenNext);

// function andiNext() {
//   claire.classList.add("hidden");
//   sharleen.classList.add("hidden");
//   andi.classList.toggle("hidden");
// }

// function claireNext() {
//   sharleen.classList.add("hidden");
//   andi.classList.add("hidden");
//   claire.classList.toggle("hidden");
// }

// function sharleenNext() {
//   andi.classList.add("hidden");
//   claire.classList.add("hidden");
//   sharleen.classList.toggle("hidden");
// }

// const scorpion = document.querySelector("#scorpion");
// const subZero = document.querySelector("#subZero");
// const reptile = document.querySelector("#reptile");

// document.querySelector("#scorpionNext").addEventListener("click", scorpionNext);
// document.querySelector("#subZeroNext").addEventListener("click", subZeroNext);
// document.querySelector("#reptileNext").addEventListener("click", reptileNext);

// function scorpionNext() {
//   reptile.classList.add("hidden");
//   subZero.classList.add("hidden");
//   scorpion.classList.toggle("hidden");
// }

// function subZeroNext() {
//   scorpion.classList.add("hidden");
//   reptile.classList.add("hidden");
//   subZero.classList.toggle("hidden");
// }
// function reptileNext() {
//   scorpion.classList.add("hidden");
//   subZero.classList.add("hidden");
//   reptile.classList.toggle("hidden");
// }

// const scorpion = document.querySelector("#scorpion");
// const subZero = document.querySelector("#subZero");
// const reptile = document.querySelector("#reptile");

// document.querySelector("#scorpionNext").addEventListener("click", scorpionNext);
// document.querySelector("#subZeroNext").addEventListener("click", subZeroNext);
// document.querySelector("#reptileNext").addEventListener("click", reptileNext);

// function scorpionNext() {
//   reptile.classList.add("hidden");
//   subZero.classList.add("hidden");
//   scorpion.classList.toggle("hidden");
// }

// function subZeroNext() {
//   reptile.classList.add("hidden");
//   scorpion.classList.add("hidden");
//   subZero.classList.toggle("hidden");
// }

// function reptileNext() {
//   subZero.classList.add("hidden");
//   scorpion.classList.add("hidden");
//   reptile.classList.toggle("hidden");
// }

const scorpion = document.querySelector("#scorpion");
const subZero = document.querySelector("#subZero");
const reptile = document.querySelector("#reptile");

document.querySelector("#scorpionNext").addEventListener("click", scorpionNext);
document.querySelector("#subZeroNext").addEventListener("click", subZeroNext);
document.querySelector("#reptileNext").addEventListener("click", reptileNext);

function scorpionNext() {
  subZero.classList.add("hidden");
  reptile.classList.add("hidden");
  scorpion.classList.toggle("hidden");
}
function subZeroNext() {
  scorpion.classList.add("hidden");
  reptile.classList.add("hidden");
  subZero.classList.toggle("hidden");
}
function reptileNext() {
  scorpion.classList.add("hidden");
  subZero.classList.add("hidden");
  reptile.classList.toggle("hidden");
}
