document.querySelector("#yell").addEventListener("click", run);

function run() {
  const fName = document.querySelector("#firstName").value;
  const fMidName = document.querySelector("#middleName").value;
  const lName = document.querySelector("#lastName").value;

  document.querySelector(
    "#placeToYell"
  ).innerText = `${fName} ${fMidName} ${lName}`;
}
