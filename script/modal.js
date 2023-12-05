function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
// const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector('.close');
const form = document.querySelector("form");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event 
closeButton.addEventListener("click", () => {
    modalbg.style.display = "none";
})

// Vérif nom et prénom
function checkName(name){
  const regexName = new RegExp("^[a-zA-Z-]+$")
  if(name.length >= 2 && regexName.test(name)){
    console.log("oui")
  }else{
    console.log("non")
  }
}
// envoie form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const allInputForm = document.querySelectorAll(".formData input");
  console.log(allInputForm)

  for(let i = 0; i < allInputForm.length; i++) {
    input = allInputForm[i]
    if(input.type === "text"){
      checkName(input.value)
    }
  }
})


