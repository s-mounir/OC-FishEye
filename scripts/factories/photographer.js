function photographerFactory (data) {
  const { name, portrait, id, city, country, price, tagline } = data
  console.log(data)
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
    url.appendChild(img)
    url.appendChild(h2)
    url.appendChild(h3)
    url.appendChild(p1)
    url.appendChild(p2)
    return (article)
  }
  return { name, picture, getUserCardDOM }
}