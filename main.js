const addBtn = document.querySelector(".fa-plus-circle");
const popupDiv = document.querySelector(".popup-form");
const wordInput = document.querySelector(".word-input");
const addWordBtn = document.querySelector(".add-word");
const WordContainer = document.querySelector(".words-container");
const body = document.querySelector("body");

addBtn.addEventListener("click", (e) => {
  popupDiv.classList.remove("hide");

  body.style.backgroundColor = "#7389D5";
});

addWordBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const value = wordInput.value;

  WordContainer.innerHTML += `<div class="word" >
             <p>${value}</p>
             
     </div>`;

  wordInput.value = "";

  body.style.backgroundColor = "white";
  popupDiv.classList.add("hide");
});
