// Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers () {
  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
  const response = await fetch('./data/photographers.json')
  const photographers = await response.json()
  // et bien retourner le tableau photographers seulement une fois récupéré
  return photographers
}

const params = (new URL(document.location)).searchParams
const idPhotograph = params.get('id')

async function init () {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  const photographerData = photographers.filter(({ id }) => id === Number(idPhotograph))
  const photographer = photographerData[0]
  const photographerModel = photographerFactory(photographer)
  photographerModel.getPhotographerHeader()

  const main = document.querySelector('#main')
  const modalHeader = document.querySelector('#modalHeader')
  modalHeader.innerHTML = 'Contactez-moi <br/>' + photographerModel.name

  const mainSection = document.createElement('div')
  mainSection.classList.add('mainSection')
  const mediaSection = document.createElement('div')
  mediaSection.classList.add('mediaSection')
  const filter = document.createElement('p')
  filter.textContent = 'Trier par'
  filter.classList.add('filterTxt')
  const btn = document.createElement('button')
  btn.innerHTML = 'Popularité <i class="fa-solid fa-chevron-down"></i>'
  btn.id = 'filterBtn'
  btn.addEventListener('click', dropdown)
  mainSection.append(filter, btn)
  main.append(mainSection)

  sort('Popularité')
};

init()

// Close lightBox
const lightBoxCloseBtn = document.getElementById('lightBoxCloseBtn')
lightBoxCloseBtn.addEventListener('click', closeLightBox)

// Next element in carousel
const chevronRight = document.getElementById('chevronRight')
chevronRight.addEventListener('click', nextItem)

document.addEventListener('keydown', e => {
  const lightBox = document.getElementById('lightBox')
  if (lightBox.ariaHidden === 'false' && e.key === 'ArrowRight') {
    nextItem()
  }
})

// Previous element in carousel
const chevronLeft = document.getElementById('chevronLeft')
chevronLeft.addEventListener('click', previousItem)

document.addEventListener('keydown', e => {
  const lightBox = document.getElementById('lightBox')
  if (lightBox.ariaHidden === 'false' && e.key === 'ArrowLeft') {
    previousItem()
  }
})

// Close modal when escape key is pressed
document.addEventListener('keydown', e => {
  const modal = document.getElementById('contact_modal')
  const lightBox = document.getElementById('lightBox')
  if (modal.ariaHidden === 'false' && e.key === 'Escape') {
    closeModal()
  } else if (lightBox.ariaHidden === 'false' && e.key === 'Escape') {
    closeLightBox()
  }
})

// Submit form event
const submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', sendForm)