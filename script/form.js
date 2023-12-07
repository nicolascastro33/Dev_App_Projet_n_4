const allInputForm = document.querySelectorAll('.formData input')

export function clearForm () {
  for (let i = 0; i < allInputForm.length; i++) {
    const input = allInputForm[i]
    input.value = ''
    input.classList.remove('goodInput', 'errorInput')
    eraseErrorMessage(input.name)
  }
}

function eraseErrorMessage(id) {
  const spanErreurMessage = document.getElementById(`errorMessage${id}`)
  spanErreurMessage?.remove() // comme if (null) return; si null il ne fera pas le chainage
}
