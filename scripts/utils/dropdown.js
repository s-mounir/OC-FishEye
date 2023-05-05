function closeDropdown () {
  const ul = document.querySelector('#dropdown')
  ul.remove()
}

function changeFilter (newFilter) {
  closeDropdown()
  const filterBtn = document.querySelector('#filterBtn')
  filterBtn.innerHTML = newFilter + ' <i class="fa-solid fa-chevron-down"></i>'
  sort(newFilter)
}

async function sort (sortParam) {
  let totalLikes = 0
  const { photographers, media } = await getPhotographers()
  const photographerData = photographers.filter(({ id }) => id == idPhotograph)
  const photographer = photographerData[0]
  const photographerModel = photographerFactory(photographer)

  const mainSection = document.querySelector('.mainSection')
  const oldMediaSection = document.querySelector('.mediaSection')
  const oldPLikes = document.getElementById('pLikes')
  const oldPPrice = document.getElementById('pPrice')
  if (oldMediaSection) {
    oldMediaSection.remove()
  }
  if (oldPLikes) {
    oldPLikes.remove()
  }
  if (oldPPrice) {
    oldPPrice.remove()
  }
  const newMediaSection = document.createElement('div')
  newMediaSection.classList.add('mediaSection')

  const mediaPhotographer = media.filter(({ photographerId }) => photographerId === Number(idPhotograph))
  if (sortParam === 'Popularité') {
    mediaPhotographer.sort((a, b) => b.likes - a.likes)
  } else if (sortParam === 'Date') {
    mediaPhotographer.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  } else if (sortParam === 'Titre') {
    mediaPhotographer.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
  }
  mediaPhotographer.forEach((media) => {
    const mediaModel = mediaFactory(photographerModel.name, media)
    const carousel = document.getElementById('carousel')
    const listDOM = mediaModel.getCarouselItem()
    carousel.appendChild(listDOM)
    totalLikes += mediaModel.likes
  })
  mediaPhotographer.forEach((media) => {
    const mediaModel = mediaFactory(photographerModel.name, media)
    const mediaCardDOM = mediaModel.getMediaCardDOM()
    newMediaSection.appendChild(mediaCardDOM)
  })

  const likesDiv = document.getElementById('totalLikes')
  const pLikes = document.createElement('p')
  pLikes.id = 'pLikes'
  pLikes.innerHTML = totalLikes + ' <i class="fa-solid fa-heart"></i>'
  const pPrice = document.createElement('p')
  pPrice.id = 'pPrice'
  pPrice.textContent = photographerModel.price + '€ / jour'
  likesDiv.append(pLikes, pPrice)

  mainSection.append(newMediaSection)
}

function dropdown () {
  const mainSection = document.querySelector('.mainSection')
  const filterBtn = document.querySelector('#filterBtn')

  const ul = document.createElement('ul')
  ul.id = 'dropdown'
  const li1 = document.createElement('li')
  const li2 = document.createElement('li')
  const li3 = document.createElement('li')

  if (filterBtn.textContent === 'Popularité ') {
    li1.innerHTML = 'Popularité <i class="fa-solid fa-chevron-up"></i>'
    li2.textContent = 'Date'
    li3.textContent = 'Titre'
  } else if (filterBtn.textContent === 'Date ') {
    li1.innerHTML = 'Date <i class="fa-solid fa-chevron-up"></i>'
    li2.textContent = 'Titre'
    li3.textContent = 'Popularité'
  } else {
    li1.innerHTML = 'Titre <i class="fa-solid fa-chevron-up"></i>'
    li2.textContent = 'Popularité'
    li3.textContent = 'Date'
  }
  li1.addEventListener('click', closeDropdown)
  li2.addEventListener('click', () => changeFilter(li2.textContent))
  li3.addEventListener('click', () => changeFilter(li3.textContent))
  ul.append(li1, li2, li3)
  mainSection.append(ul)
}
