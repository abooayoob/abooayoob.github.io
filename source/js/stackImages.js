
let imageNumbers = []
let documentNode = document.getElementById('filter-1')
let topPosition = documentNode.offsetTop

let container = document.createElement('div')

for (let i = 2; i < 18; i++) {
  imageNumbers.push(i)
}

imageNumbers.forEach(number => {
  let newImage = document.createElement('div')

  newImage.style.backgroundImage = `url(../images/ali_${number}.jpg)`
  newImage.style.position = 'absolute'
  newImage.style.top = topPosition

  newImage.classList.add('image-circular', 'animates')

  container.appendChild(newImage)
})

documentNode.appendChild(container)

let addDisappear = function (element) {
  element.classList.add('disappear')
}

let vanishingImages = document.getElementsByClassName('animates')
let vanishingImagesArray = Array.from(vanishingImages)
let delay = 1000

let reversed = vanishingImagesArray.reverse()

reversed.forEach(image => {
  window.setTimeout(function () {
    addDisappear(image)
  }, delay)
  delay += 900
})
