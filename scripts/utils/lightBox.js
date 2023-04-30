function displayLightBox (id) {
  console.log('coucou')
  const lightBox = document.getElementById('lightBox')
  const body = document.getElementById('main')
  const lightBoxCloseBtn = document.getElementById('lightBoxCloseBtn')

  lightBox.style.display = 'block'
  lightBox.ariaHidden = 'false'
  body.ariaHidden = 'true'
  lightBoxCloseBtn.focus()

  const carouselItem = document.getElementById('carouselItem-' + id)
  carouselItem.style = 'display: block'
  carouselItem.classList.add('currentItem')
}

function closeLightBox () {
  const lightBox = document.getElementById('lightBox')
  const body = document.getElementById('main')

  lightBox.style.display = 'none'
  lightBox.ariaHidden = 'true'
  body.ariaHidden = 'false'

  const currentItem = document.getElementsByClassName('currentItem')[0]
  currentItem.style = 'display: none'
  currentItem.classList.remove('currentItem')
}

function nextItem () {
  const carouselItems = Array.from(document.getElementsByClassName('carouselItem'))
  const currentItem = document.getElementsByClassName('currentItem')[0]
  const currentItemIndex = carouselItems.indexOf(currentItem)

  const nextItemIndex = currentItemIndex + 1 >= carouselItems.length ? 0 : currentItemIndex + 1
  const nextItem = carouselItems[nextItemIndex]

  currentItem.style = 'display: none'
  currentItem.classList.remove('currentItem')
  nextItem.style = 'display: block'
  nextItem.classList.add('currentItem')
}

function previousItem () {
  const carouselItems = Array.from(document.getElementsByClassName('carouselItem'))
  const currentItem = document.getElementsByClassName('currentItem')[0]
  const currentItemIndex = carouselItems.indexOf(currentItem)

  const nextItemIndex = currentItemIndex - 1 < 0 ? carouselItems.length - 1 : currentItemIndex - 1
  const nextItem = carouselItems[nextItemIndex]

  currentItem.style = 'display: none'
  currentItem.classList.remove('currentItem')
  nextItem.style = 'display: block'
  nextItem.classList.add('currentItem')
}
