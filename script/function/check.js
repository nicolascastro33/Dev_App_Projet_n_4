// Vérif nom et prénom
function checkName(name, nomOuPrénom, input){
    const regexName = new RegExp("^[a-zA-Z-]+$");
    let exactName = name.trim();
    if(!regexName.test(exactName)){
      console.log(input)
      let message = `Le champ ${nomOuPrénom} est invalide`
      showErrorMessage(message, input.name)
      errorInput(input);
      throw new Error(message);
    }else{
      fixErrorInput(input)
      eraseErrorMessage(input.name);
      return name
    }
  }
  
  // Vérif email
  function checkEmail(email, input){
    const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if(!regexEmail.test(email)){
      let message = `Le champ d'email est invalide`
      showErrorMessage(message, input.name)
      errorInput(input);
      throw new Error(message);
    }else{
      fixErrorInput(input);
      eraseErrorMessage(input.name);
      return email;
    }
  }
  
  // Vérif date de naissance
  
  function checkBirthDate(birthDate, input){
    console.log(birthDate)
    const regexBirthDate = new RegExp("^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$")
    if(!regexBirthDate.test(birthDate)){
      let message = `Votre date de naissance est invalide`
      showErrorMessage(message, input.name)
      errorInput(input)
      throw new Error(message);
    }else{
      fixErrorInput(input);
      eraseErrorMessage(input.name);
      return birthDate;
    }
  }
  
  // Vérif nombre de tournois
  function checkNumberOfTournement(numberOfTournement, input){
    const regexNumberOfTournement = new RegExp("^[0-9]+$");
    if(!regexNumberOfTournement.test(numberOfTournement)){
      let message = `Les données sont invalide`
      showErrorMessage(message, input.name)
      errorInput(input);
      throw new Error(message);
    }else{
      fixErrorInput(input);
      eraseErrorMessage(input.name);
      return numberOfTournement;
    }
  }
  
  
// Vérif lieu du tournoi  
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
// Fonction qui vérifie dans la liste de input location récupérer si l'un est checked
// et lequel exactement 
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
      let message = `Le lieu du tournoi n'est pas indiqué`
      showErrorMessage(message, input.name)
      errorInput(input);
      throw new Error(message);
    }else{
      fixErrorInput(input);
      eraseErrorMessage(input.name);
      return locationPlace;
    }
}
  
// Vérif si la condition a été accepté  
function checkConditionAgree(input){
    if(!input.checked){
      let message = "Vous devez accepter les conditions pour continuer";
      showErrorMessage(message, input.name)
      errorInput(input);
      throw new Error(message);
    }else{
      fixErrorInput(input);
      eraseErrorMessage(input.name);
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