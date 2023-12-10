export function inserterrorInput(input){
    input.classList.remove("goodInput");
    input.classList.add("errorInput");
}

export function insertErrorMessage(message, id){
    let spanErreurMessage = document.getElementById(`errorMessage${id}`);
    if(!spanErreurMessage){
      spanErreurMessage = document.createElement("span");
      spanErreurMessage.id = `errorMessage${id}`;
      spanErreurMessage.className = "errorMessage";
       if(id === "location"){
        const inputErrorLocation = document.querySelector(".formDataLocation");
        inputErrorLocation.after(spanErreurMessage);
      }else{
        const inputError = document.querySelector(`[name="${id}"]`);
        inputError.after(spanErreurMessage);
      }
    }
    spanErreurMessage.innerText = message;
}