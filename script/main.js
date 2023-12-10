import { initModal, onModalClose } from './modal/modal.js';
import { clearForm, updateForm, submitForm } from './form.js';
import { validateSubmitForm, validateUpdateForm } from './validate.js';
import { initModalSucceed } from './modal/modalSucceed.js';

//Ouverture et fermeture de la modale
initModal();
onModalClose(clearForm);

// Modification du form
updateForm(validateUpdateForm);

// Envoie et vérification du form
submitForm(validateSubmitForm);

initModalSucceed();
