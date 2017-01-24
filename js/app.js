'use strict';

console.log('test');
'use strict';

var imageNumbers = [];
var documentNode = document.getElementById('filter-1');
var topPosition = documentNode.offsetTop;

var container = document.createElement('div');

for (var i = 2; i < 18; i++) {
  imageNumbers.push(i);
}

imageNumbers.forEach(function (number) {
  var newImage = document.createElement('div');

  newImage.style.backgroundImage = 'url(../images/ali_' + number + '.jpg)';
  newImage.style.position = 'absolute';
  newImage.style.top = topPosition;

  newImage.classList.add('image-circular', 'animates');

  container.appendChild(newImage);
});

documentNode.appendChild(container);

var addDisappear = function addDisappear(element) {
  element.classList.add('disappear');
};

var vanishingImages = document.getElementsByClassName('animates');
var vanishingImagesArray = Array.from(vanishingImages);
var delay = 1000;

var reversed = vanishingImagesArray.reverse();

reversed.forEach(function (image) {
  window.setTimeout(function () {
    addDisappear(image);
  }, delay);
  delay += 900;
});