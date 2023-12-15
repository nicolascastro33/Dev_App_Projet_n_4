import { eraseErrorMessage } from './error/eraseError.js';
import { closeModal } from './modal/modal.js';
import { initModalSucceed } from './modal/modalSucceed.js';

export const allInputForm = document.querySelectorAll('.formData input');
const form = document.querySelector('form');

export function clearForm() {
  // On efface toutes les données des inputs, leurs class css, ainsi que leurs message d'erreur
  for (let i = 0; i < allInputForm.length; i++) {
    const input = allInputForm[i];
    input.value = '';
    input.classList.remove('goodInput', 'errorInput');
    eraseErrorMessage(input.name);
  }
}

export function updateForm(validateUpdateForm) {
  try {
    for (let i = 0; i < allInputForm.length; i++) {
      let input = allInputForm[i];
      input.addEventListener('change', (event) => {
        event.preventDefault();
        validateUpdateForm(input);
      });
    }
  } catch (error) {
    console.log('Une erreur est survenue: ' + error.message);
  }
}

export function submitForm(validateSubmitForm) {
  try {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let allInformation = {};
      for (let i = 0; i < allInputForm.length; i++) {
        let input = allInputForm[i];
        validateSubmitForm(input, allInformation);
      }
      console.log(allInformation);
      clearForm();
      closeModal();
      initModalSucceed();
    });
  } catch (error) {
    console.log('Une erreur est survenue: ' + error.message);
  }
  return true;
}
