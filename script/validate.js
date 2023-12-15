import { eraseErrorInput, eraseErrorMessage } from './error/eraseError.js';
import { insertErrorMessage, inserterrorInput } from './error/insertError.js';
import { allInputForm } from './form.js';

//Fonction qui va vérifier nos résultats pendant quand on change un input du form
export function validateUpdateForm(input) {
  if (input.type === 'text') {
    let nomOuPrénom = input.name === 'last' ? 'nom' : 'prénom';
    validateName(input.value, nomOuPrénom, input);
  } else if (input.type === 'email') {
    validateEmail(input.value, input);
  } else if (input.type === 'date') {
    validateBirthDate(input.value, input);
  } else if (input.type === 'number') {
    validateNumberOfTournement(input.value, input);
  }
}

//Fonction qui va vérifier nos résultats quand on submit le form
export function validateSubmitForm(input, allInformation) {
  if (input.type === 'text') {
    let firstOrLast = input.name === 'last' ? 'nom' : 'prénom';
    allInformation[`${firstOrLast}`] = validateName(
      input.value,
      firstOrLast,
      input
    );
  } else if (input.type === 'email') {
    allInformation.email = validateEmail(input.value, input);
  } else if (input.type === 'date') {
    allInformation.birthDate = validateBirthDate(input.value, input);
  } else if (input.type === 'number') {
    allInformation.numberOfTournamentPlayed = validateNumberOfTournement(
      input.value,
      input
    );
  } else if (input.name === 'location') {
    allInformation.location = validateLocationTournament(
      getInputLocation(allInputForm),
      input
    );
  } else if (input.id === 'checkbox1') {
    allInformation.conditionAgree = validateConditionAgree(input);
  } else {
    allInformation.notificationAgree = validateNotificationAgree(input);
  }
  return allInformation;
}


//Toutes les fonctions qui vont vérifier chaques input selon leur type 
// et qui va renvoyer un message positif ou négatif

function validateName(name, firstOrLast, input) {
  const regexName = new RegExp('^^[a-zA-Zéè-]{2,}$');
  let exactName = name.trim();
  if (!regexName.test(exactName)) {
    let message = `Le champ ${firstOrLast} est invalide`;
    insertErrorMessage(message, input.name);
    inserterrorInput(input);
    throw new Error(message);
  } else {
    eraseErrorInput(input);
    eraseErrorMessage(input.name);
    return name;
  }
}

function validateEmail(email, input) {
  const regexEmail = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+');
  if (!regexEmail.test(email)) {
    let message = `Le champ d'email est invalide`;
    insertErrorMessage(message, input.name);
    inserterrorInput(input);
    throw new Error(message);
  } else {
    eraseErrorInput(input);
    eraseErrorMessage(input.name);
    return email;
  }
}


function validateBirthDate(birthDate, input) {
  const regexBirthDate = new RegExp('^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$');
  if (!regexBirthDate.test(birthDate)) {
    let message = `Votre date de naissance est invalide`;
    insertErrorMessage(message, input.name);
    inserterrorInput(input);
    throw new Error(message);
  } else {
    eraseErrorInput(input);
    eraseErrorMessage(input.name);
    return birthDate;
  }
}

function validateNumberOfTournement(numberOfTournement, input) {
  const regexNumberOfTournement = new RegExp('^[0-9]+$');
  if (!regexNumberOfTournement.test(numberOfTournement)) {
    let message = `Les données sont invalide`;
    insertErrorMessage(message, input.name);
    inserterrorInput(input);
    throw new Error(message);
  } else {
    eraseErrorInput(input);
    eraseErrorMessage(input.name);
    return numberOfTournement;
  }
}

// Vérif lieu du tournoi
// Fonction pour récupérer les différentes input de location
function getInputLocation(allInputForm) {
  let listInputLocation = [];
  for (let i = 0; i < allInputForm.length; i++) {
    if (allInputForm[i].name === 'location') {
      listInputLocation.push(allInputForm[i]);
    }
  }
  return listInputLocation;
}
// Fonction qui vérifie dans la liste de input location récupérer si l'un est checked
// et lequel exactement
function validateLocationTournament(locations, input) {
  let checked = false;

  let locationPlace;
  for (let i = 0; i < locations.length; i++) {
    let location = locations[i];
    if (location.checked) {
      checked = true;
      locationPlace = location.value;
    }
  }
  if (!checked) {
    let message = `Le lieu du tournoi n'est pas indiqué`;
    insertErrorMessage(message, input.name);
    inserterrorInput(input);
    throw new Error(message);
  } else {
    eraseErrorInput(input);
    eraseErrorMessage(input.name);
    return locationPlace;
  }
}

function validateConditionAgree(input) {
  if (!input.checked) {
    let message = 'Vous devez accepter les conditions pour continuer';
    insertErrorMessage(message, input.id);
    inserterrorInput(input);
    throw new Error(message);
  } else {
    eraseErrorInput(input);
    eraseErrorMessage(input.id);
    return true;
  }
}

function validateNotificationAgree(notification) {
  if (notification.checked) {
    return true;
  } else {
    return false;
  }
}
