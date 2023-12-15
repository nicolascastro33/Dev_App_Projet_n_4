// Permet de modifier le css d'erreur pour mettre l'input en rouge
export function inserterrorInput(input) {
  input.classList.remove('goodInput');
  input.classList.add('errorInput');
}

// Permet d'introduire un message d'erreur en identifiant 
// si un message est déja présent pour ne pas le reproduire
export function insertErrorMessage(message, id) {
  let spanErreurMessage = document.getElementById(`errorMessage${id}`);
  if (!spanErreurMessage) {
    spanErreurMessage = document.createElement('span');
    spanErreurMessage.id = `errorMessage${id}`;
    spanErreurMessage.className = 'errorMessage';
    if (id === 'location') {
      const inputErrorLocation = document.querySelector('.formDataLocation');
      inputErrorLocation.after(spanErreurMessage);
    } else {
      const inputError = document.querySelector(`[name="${id}"]`);
      inputError.after(spanErreurMessage);
    }
  }
  spanErreurMessage.innerText = message;
}
