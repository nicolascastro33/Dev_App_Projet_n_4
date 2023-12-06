// launch modal form
function launchModal() {
    modalbg.style.display = "block";
  }

// fonction pour fermer la modal 
function closeModal(){
    for(let i = 0; i < allInputForm.length; i++){
      input = allInputForm[i];
      input.value = "";
      input.classList.remove("goodInput", "errorInput")
    }
      modalbg.style.display = "none";
  }