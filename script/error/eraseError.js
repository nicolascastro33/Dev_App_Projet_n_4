export function eraseErrorInput(input){
    input.classList.remove("errorInput");
    input.classList.add("goodInput");
}

export function eraseErrorMessage(id) {
    const spanErreurMessage = document.getElementById(`errorMessage${id}`)
    spanErreurMessage?.remove() // comme if (null) return; si null il ne fera pas le chainage
  }