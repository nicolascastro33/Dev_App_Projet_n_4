const modalWrapper = document.querySelector('.bground');
const openModalButton = document.querySelectorAll('.modal-btn');
const closeModalButton = document.querySelector('.close');

let onModalCloseCallback;

export function onModalClose(callback) {
  // callback sera généralement une fonction passée en paramètre
  onModalCloseCallback = callback;
}
// Montre la modal
export function launchModal() {
  modalWrapper.style.display = 'block';
}

// Ferme la modal
export function closeModal() {
  if (typeof onModalCloseCallback === 'function') {
    onModalCloseCallback();
  }

  modalWrapper.style.display = 'none';
}

// Va insérer les fonctions d'ouverture et de fermeture de modal
export function initModal() {
  openModalButton.forEach((btn) => btn.addEventListener('click', launchModal));
  closeModalButton.addEventListener('click', closeModal);
}
