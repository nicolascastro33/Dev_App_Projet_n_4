//Fonction qui va vérifier nos résultats pendant quand on change un input du form
function updateForm(input){
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
        }
      }catch(error){
        console.log("Une erreur est survenue: " + error.message)
      }
    })
  
}

//Fonction qui va vérifier nos résultats quand on submit le form
function submitForm(event){
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
         allInformation.conditionAgree = checkConditionAgree(input);
       }else{
         allInformation.notificationAgree = checkNotificationAgree(input);
       }
     }
    console.log(allInformation);
    //  eraseInput();
     succeed();
     
   } catch (error){
     console.log("Une erreur est survenue: " + error.message);
   }
}