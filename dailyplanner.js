document.querySelector("#submitBtn").addEventListener("click", submit);
document.querySelector("#clearBtn").addEventListener("click", clear);

function submit() {
  const toDo = document.querySelector("#stuffToDo").value;
  const listItem = document.createElement("li");

  document.querySelector("#listOfThings").innerText = `${toDo}`;
}

function clear() {
  let clear = document.querySelector("#stuffToDo");

  document.querySelector("#stuffToDo").value = "";
  document.querySelector("#listOfThings").innerText = "";
}
