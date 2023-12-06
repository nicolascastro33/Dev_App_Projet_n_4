function eraseInput(){
    for(let i = 0; i < allInputForm.length; i++){
      input = allInputForm[i];
      input.value = "";
      input.classList.remove("goodInput", "errorInput");
      eraseErrorMessage(input.name);
    }
  }