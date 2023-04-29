function photographerFactory (data) {
  const { name, portrait, id, city, country, price, tagline } = data
  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM () {
    const article = document.createElement('article')
    const url = document.createElement('a')
    url.href = 'photographer.html?id=' + id
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.ariaLabel = 'Photo de profil de ' + name
    const h2 = document.createElement('h2')
    h2.textContent = name
    const h3 = document.createElement('h3')
    h3.textContent = city + ', ' + country
    const p1 = document.createElement('p')
    p1.textContent = tagline
    const p2 = document.createElement('p')
    p2.textContent = price + '€/jour'
    p2.classList.add('price')
    article.appendChild(url)
    url.append(img, h2, h3, p1, p2)
    return (article)
  }

  function getPhotographerHeader () {
    const header = document.getElementsByClassName('photograph-header')[0]
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    h1.textContent = name
    const h2 = document.createElement('h2')
    h2.textContent = city + ', ' + country
    const p1 = document.createElement('p')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.ariaLabel = 'Photo de profil de ' + name
    p1.textContent = tagline
    div.append(h1, h2, p1)
    header.prepend(div)
    header.append(img)
  }

  return { name, picture, getUserCardDOM, getPhotographerHeader }
}
