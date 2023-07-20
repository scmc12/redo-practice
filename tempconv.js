// document.querySelector("#yell").addEventListener("click", run);

// function run() {
//   let temp = document.querySelector("#firstName").value;

//   temp = (temp * 9) / 5 + 32;

//   document.querySelector("#placeToYell").innerText = temp;
// }

document.querySelector("#yell").addEventListener("click", run);

function run() {
  let temp = document.querySelector("#firstName").value;

  temp = (temp * 9) / 5 + 32;

  document.querySelector("#placeToYell").textContent = temp;

  {
    if (temp >= 70) {
      alert("warm");
    } else {
      alert("cold");
    }
  }
}
