"use strict";
const list = document.getElementById("todo-list");
const inputBox = document.getElementById("inputBox");

function newElement() {
  if (inputBox.value === "") {
    showSnackBar();
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
  inputBox.value = "";
  saveData();
}
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    newElement();
  }
});

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showTask() {
  list.innerHTML = localStorage.getItem("data");
}
showTask();

function showSnackBar() {
  // Get the snackbar DIV
  let x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
