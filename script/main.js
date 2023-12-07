import { initModal, onModalClose } from './modal.js';
import { clearForm } from './form.js';

initModal();
onModalClose(clearForm);

// close modal event 
// closeButton.addEventListener("click", () => {
//     closeModal(allInputForm, modalbg)
//   });

// Modification form
// for(let i=0; i < allInputForm.length; i++){
//   let input = allInputForm[i];
//   updateForm(input);
// } 

// envoie form
// form.addEventListener("submit", (event) => {
//   submitForm(event);
// })