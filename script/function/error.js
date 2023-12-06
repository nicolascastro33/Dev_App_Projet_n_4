// Toutes les fonctions concernant les modification css en qu'à d'erreur ou de réussite du formulaire
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

// Toutes les fonction concernant le message d'erreur 
// Fonction pour afficher un message d'erreur
function showErrorMessage(message, id){
  let spanErreurMessage = document.getElementById(`errorMessage${id}`);
  if(!spanErreurMessage){
    let inputError = document.querySelector(`[name="${id}"]`)
    spanErreurMessage = document.createElement("span");
    spanErreurMessage.id = `errorMessage${id}`;

    inputError.after(spanErreurMessage);
  }
  spanErreurMessage.innerText = message;
}

  // Fonction enlever message d'erreur
   function eraseErrorMessage(id){
    let spanErreurMessage = document.getElementById(`errorMessage${id}`);
    if(spanErreurMessage === null){
      return
    }
    spanErreurMessage.remove();
    return;
   }