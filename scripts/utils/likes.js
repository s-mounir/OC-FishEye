function getLikes (id) {
  const carouselItem = document.getElementById(id)
  const carouselP = carouselItem.querySelector('p')
  let numLikes = Number(carouselP.innerText)
  const heart = carouselItem.querySelector('i')

  const totalLikes = document.getElementById('pLikes')
  let sumLikes = Number(totalLikes.innerText)

  if (heart.classList.contains('fa-regular')) {
    numLikes += 1
    sumLikes += 1
    carouselP.innerHTML = numLikes + '<i class="fa-solid fa-heart"></i>'
  } else {
    numLikes -= 1
    sumLikes -= 1
    carouselP.innerHTML = numLikes + '<i class="fa-regular fa-heart"></i>'
  }
  totalLikes.innerHTML = sumLikes + '<i class="fa-solid fa-heart"></i>'
}
