document.querySelector("#clickToAdd").addEventListener("click", addCount);
document.querySelector("#clickToMinus").addEventListener("click", subractCount);
document.querySelector("#clear").addEventListener("click", clearCount);

let clickToAdd = document.querySelector("clickToAdd");
let clickToMinus = document.querySelector("#clickToMinus");
let count = 0;

function addCount() {
  count = ++count;
  document.querySelector("h2").textContent = count;
}

function subractCount() {
  count = --count;
  document.querySelector("h2").textContent = count;
}

function clearCount() {
  let count = 0;
  document.querySelector("h2").textContent = count;
}
