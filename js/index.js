var Application = {};
window.Application = Application;

function UserInterface(assets, imageId, buttonClass) {
  this.assets = assets;
  this.imageId = imageId;
  this.imageNode = document.getElementById(this.imageId);
  this.count = 0;
  this.buttonClass = buttonClass;
  this.buttons = document.getElementsByClassName(buttonClass);
}

UserInterface.prototype.selectImage = function (imageSrc, button) {
  this.removeHighlightClasses();
  this.imageNode.src = imageSrc;
  button.className += ' chosen';
};

UserInterface.prototype.removeHighlightClasses = function () {
  for (var index = 0; index < this.buttons.length; index++) {
    var button = this.buttons[index];
    button.className = this.buttonClass;
  }
};


var assets = [
  './assets/phone-gray-select.png',
  './assets/phone-silver-select.png'
];
Application.ui = new UserInterface(assets, 'iphone-display', 'color-choice');

Application.ui.buttons[0].addEventListener("click", function () {
  Application.ui.selectImage(Application.ui.assets[0], this);
});

Application.ui.buttons[1].addEventListener("click", function () {
  Application.ui.selectImage(Application.ui.assets[1], this);
});
