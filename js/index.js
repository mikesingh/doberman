var Application = {};
window.Application = Application;

function UserInterface(assets, imageId, buttonClass) {
  this.assets = assets;
  this.imageId = imageId;
  this.imageNode = document.getElementById(this.imageId);
  this.count = 0;
  this.buttons = document.getElementsByClassName(buttonClass);
}

UserInterface.prototype.selectImage = function (imageSrc) {
  this.imageNode.src = imageSrc;
};

var assets = [
  './assets/phone-gray-select.png',
  './assets/phone-silver-select.png'
];
Application.ui = new UserInterface(assets, 'iphone-display', 'color-choice');

Application.ui.buttons[0].addEventListener("click", function () {
  Application.ui.selectImage(Application.ui.assets[0]);
});

Application.ui.buttons[1].addEventListener("click", function () {
  Application.ui.selectImage(Application.ui.assets[1]);
});
