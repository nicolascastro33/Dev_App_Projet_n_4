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
const allInputForm = document.querySelectorAll(".formData input");
let listInputLocation = getInputLocation(allInputForm);
let popup = document.querySelector(".modal-body");
let spanErreurMessage = document.getElementById("erreurMessage");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event 
closeButton.addEventListener("click", () => {
  for(let i = 0; i < allInputForm.length; i++){
    input = allInputForm[i];
    input.value = "";
    input.classList.remove("goodInput", "errorInput")
  }
    modalbg.style.display = "none";
})


//Modification css lors d'une erreur sur une input
function errorInput(input){
  input.classList.remove("goodInput");
  input.classList.add("errorInput");
}
//Modification css lorsqu'un champ est correctement remplit
function fixErrorInput(input){
  input.classList.remove("errorInput");
  input.classList.add("goodInput");
}

// Vérif nom et prénom
function checkName(name, nomOuPrénom, input){
  const regexName = new RegExp("^[a-zA-Z-]+$");
  let exactName = name.trim();
  if(!regexName.test(exactName)){
    errorInput(input);
    throw new Error(`Le champ ${nomOuPrénom} est invalide`);
  }else{
    fixErrorInput(input)
    eraseErrorMessage();
    return name
  }
}

// Vérif email
function checkEmail(email, input){
  const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if(!regexEmail.test(email)){
    errorInput(input);
    throw new Error(`Le champ d'email est invalide`);
  }else{
    fixErrorInput(input);
    eraseErrorMessage();
    return email;
  }
}

// Vérif date de naissance

function checkBirthDate(birthDate, input){
  console.log(birthDate)
  const regexBirthDate = new RegExp("/^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/")
  if(!regexBirthDate.test(birthDate)){
    errorInput(input)
    throw new Error("la date de naissance est invalide");
  }else{
    fixErrorInput(input);
    eraseErrorMessage();
    return birthDate;
  }
}

// Vérif nombre de tournois
function checkNumberOfTournement(numberOfTournement, input){
  const regexNumberOfTournement = new RegExp("^[0-9]+$");
  if(!regexNumberOfTournement.test(numberOfTournement) && numberOfTournement < 0 ){
    errorInput(input);
    throw new Error("Les données sont invalides");
  }else{
    fixErrorInput(input);
    eraseErrorMessage();
    return numberOfTournement;
  }
}

// Vérif si le lieu du tournoi a bien été indiqué

function checkLocationTournament(locations, input){
  let checked = false;
  let locationPlace;
  for(let i=0; i<locations.length; i++){
   if(location[i].checked){
    checked = true;
    locationPlace = location[i].name
   } 
  }
  if(!checked){
    errorInput(input);
    throw new Error("Le lieu du tournoi n'est pas indiqué");
  }else{
    fixErrorInput(input);
    eraseErrorMessage();
    return locationPlace;
  }
}

// Vérif si la condition a été accepté

function checkConditionAgree(condition){
  if(!condition.checked){
    errorInput(input);
    throw new Error("Vous devez accepter les conditions pour continuer");
  }else{
    fixErrorInput(input);
    eraseErrorMessage();
    return true
  }
}

// Vérif si la notification a été accepté

function checkNotificationAgree(notification){
  if(notification.checked){
    return true
  }else{
    return false
  }
}

// Fonction pour récupérer les différentes input de location 

function getInputLocation(allInputForm){
  let listInputLocation = [];
  for(let i = 0; i < allInputForm.length; i++){ 
    if(allInputForm[i].name === "location"){
      listInputLocation.push(allInputForm[i]);
    }
  }
  return listInputLocation;
}



// Fonction pour afficher un message d'erreur
function showErrorMessage(message){
  if(!spanErreurMessage){
    spanErreurMessage = document.createElement("span");
    spanErreurMessage.id = "erreurMessage";

    popup.append(spanErreurMessage);
  }
  spanErreurMessage.innerText = message;
}

// Fonction enlever message d'erreur
 function eraseErrorMessage(){
  spanErreurMessage.remove();
 }
//Fonction qui va modifier nos résultats pendant que l'on change l'input
function updateResult(input){
  input.addEventListener("change", (event) => {
    try{
      event.preventDefault();
      if(input.type === "text"){
        let nomOuPrénom = input.name === "last" ? "nom" : "prénom";
       checkName(input.value, nomOuPrénom, input);
      }else if(input.type === "email"){
        checkEmail(input.value, input);
      }else if(input.type === "date"){
        checkBirthDate(input.value, input);
      }else if(input.type === "number"){
        checkNumberOfTournement(input.value, input);
      }else if(input.name === "location"){
        checkLocationTournament(listInputLocation, input);
      }else if(input.id === "checkbox1"){
        checkConditionAgree(input);
      }
    }catch(error){
      showErrorMessage(error.message)
      console.log("Une erreur est survenue: " + error.message)
    }
  })

}
// Modification form
for(let i=0; i < allInputForm.length; i++){
  let input = allInputForm[i];
  updateResult(input);
}

// envoie form
form.addEventListener("submit", (event) => {
  try{
     event.preventDefault();
     let allInformation = {};    
     for(let i = 0; i < allInputForm.length; i++) {
      input = allInputForm[i];
      if(input.type === "text"){
        let nomOuPrénom = input.name === "last" ? "nom" : "prénom";
        allInformation[`${nomOuPrénom}`] = checkName(input.value, nomOuPrénom, input);
      }else if(input.type === "email"){
        allInformation.email = checkEmail(input.value, input);
      }else if(input.type === "date"){
        allInformation.birthDate = checkBirthDate(input.value, input);
      }else if(input.type === "number"){
        allInformation.numberOfTournamentPlayed = checkNumberOfTournement(input.value, input);
      }else if(input.name === "location"){
        allInformation.location = checkLocationTournament(listInputLocation, input);
      }else if(input.id === "checkbox1"){
        allInformation.condition = checkConditionAgree(input);
      }else{
        allInformation.notificationAgree = checkNotificationAgree(input);
      }
      console.log(allInformation)
    }

  } catch (error){
    showErrorMessage(error.message)
    console.log("Une erreur est survenue: " + error.message)
  }
})




