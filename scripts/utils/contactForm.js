function displayModal () {
  const modal = document.getElementById('contact_modal')
  const body = document.getElementById('main')
  const modalCloseBtn = document.getElementById('modalCloseBtn')

  modal.style.display = 'block'
  modal.ariaHidden = 'false'
  body.ariaHidden = 'true'
  modalCloseBtn.focus()
}

function closeModal () {
  const modal = document.getElementById('contact_modal')
  const body = document.getElementById('main')

  modal.style.display = 'none'
  modal.ariaHidden = 'true'
  body.ariaHidden = 'false'
}

function sendForm (event) {
  event.preventDefault()

  const first = document.getElementById('first').value
  const last = document.getElementById('last').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  console.log("Le prénom de l'utilisateur est " + first)
  console.log("Le nom de l'utilisateur est " + last)
  console.log("L'email de l'utilisateur est " + email)
  console.log("Le message de l'utilisateur est " + message)

  closeModal()
}
