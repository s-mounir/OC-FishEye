// Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers () {
  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
  const response = await fetch('/data/photographers.json')
  const photographers = await response.json()
  // et bien retourner le tableau photographers seulement une fois récupéré
  return photographers
}

const params = (new URL(document.location)).searchParams
const idPhotograph = params.get('id')

async function init () {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers()
  const photographerData = photographers.filter(({ id }) => id == idPhotograph)
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
  mainSection.append(filter, btn, mediaSection)
  main.append(mainSection)

  const mediaPhotographer = media.filter(({ photographerId }) => photographerId == idPhotograph)
  mediaPhotographer.forEach((media) => {
    const mediaModel = mediaFactory(photographerModel.name, media)
    const mediaCardDOM = mediaModel.getMediaCardDOM()
    mediaSection.appendChild(mediaCardDOM)
  })
};

init()

// Close modal when escape key is pressed
document.addEventListener('keydown', e => {
  const modal = document.getElementById('contact_modal')
  if (modal.ariaHidden === 'false' && e.key === 'Escape') {
    closeModal()
  }
})

// Submit form event
const submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', sendForm)
