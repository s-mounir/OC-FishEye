function mediaFactory (name, data) {
  const { id, photographerId, title, image, video, likes } = data
  // console.log('id:' + id + ', photographerId:' + photographerId + ', title:' + title + ', image:' + image + ', likes :' + likes)
  const firstName = name.split(' ')[0]

  function getMediaCardDOM () {
    const media = image !== undefined ? image : video
    const link = `assets/photographers/${firstName}/${media}`
    let elemMedia

    const article = document.createElement('article')
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
    
    const articleText = document.createElement('div')
    articleText.classList.add('articleText')
    const h3 = document.createElement('h3')
    h3.textContent = title
    const p1 = document.createElement('p')
    p1.innerHTML = likes + '<i class="fa-solid fa-heart"></i>'
    articleText.append(h3, p1)
    article.append(elemMedia, articleText)
    return (article)
  }

  return { getMediaCardDOM }
}
