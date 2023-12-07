const modalWrapper = document.querySelector('.bground')
const modalBody = document.querySelector('.modal-body')
const openModalButton = document.querySelectorAll('.modal-btn')
const closeModalButton = document.querySelector('.close')

let onModalCloseCallback

export function onModalClose (callback) {
  // callback sera généralement une fonction passée en paramètre
  onModalCloseCallback = callback
}

export function launchModal () {
  modalWrapper.style.display = 'block'
}

export function closeModal () {
    
  if (typeof onModalCloseCallback === 'function') {
    onModalCloseCallback()
  }

  modalWrapper.style.display = 'none'
}

export function initModal () {
  openModalButton.forEach(btn => btn.addEventListener('click', launchModal))
  closeModalButton.addEventListener('click', closeModal)
}
