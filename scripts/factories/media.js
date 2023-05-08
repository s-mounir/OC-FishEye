function mediaFactory (name, data) {
  const { id, title, image, video, likes } = data
  // console.log('id:' + id + ', photographerId:' + photographerId + ', title:' + title + ', image:' + image + ', likes :' + likes)
  const firstName = name.split(' ')[0]

  function getMediaDOM () {
    const media = image !== undefined ? image : video
    const link = `assets/photographers/${firstName}/${media}`
    let elemMedia

    if (image !== undefined) {
      elemMedia = document.createElement('img')
      elemMedia.setAttribute('src', link)
      elemMedia.ariaLabel = 'Photo ' + title
    } else {
      elemMedia = document.createElement('video')
      elemMedia.src = link
      elemMedia.controls = true
      elemMedia.muted = false
      elemMedia.ariaLabel = 'Video ' + title
    }
    return (elemMedia)
  }

  function getMediaCardDOM () {
    const elemMedia = getMediaDOM()

    const article = document.createElement('article')
    article.id = id
    article.tabIndex = "0"
    const articleText = document.createElement('div')
    articleText.classList.add('articleText')
    const h3 = document.createElement('h3')
    h3.textContent = title
    h3.setAttribute('lang', 'en')
    const p1 = document.createElement('p')
    p1.innerHTML = likes + ' <i class="fa-regular fa-heart"></i>'
    p1.tabIndex = '0'
    p1.addEventListener('click', () => getLikes(id))
    p1.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        getLikes(id)
      }
    })
    articleText.append(h3, p1)
    article.append(elemMedia, articleText)
    elemMedia.tabIndex = '0'
    elemMedia.addEventListener('click', () => displayLightBox(id))
    elemMedia.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        displayLightBox(id)
      }
    })
    return (article)
  }

  function getCarouselItem () {
    const list = document.createElement('li')
    list.id = 'carouselItem-' + id
    list.classList.add('carouselItem')
    list.ariaHidden = 'true'
    list.style = 'display: none'

    const elemMedia = getMediaDOM()
    const h3 = document.createElement('h3')
    h3.textContent = title
    h3.setAttribute('lang', 'en')
    list.append(elemMedia, h3)

    return (list)
  }

  return { getMediaCardDOM, getCarouselItem, likes }
}
