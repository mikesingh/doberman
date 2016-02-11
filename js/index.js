var Application = {};
window.Application = Application;

//TODO: make the class more configurable by passing in
function UserInterface(assets, imageId, buttonClass, fullScreenButtonId) {
  this.assets = assets;
  this.imageId = imageId;
  this.count = 0;
  this.buttonClass = buttonClass;
  this.isFullscreen = false;

  //components
  this.imageNode = document.getElementById(this.imageId);
  this.buttons = document.getElementsByClassName(buttonClass);
  this.fullScreenButton = document.getElementById(fullScreenButtonId);
  this.cancelButton = document.getElementsByClassName('cancel-fullscreen')[0];
  this.fullScreenHeader = document.getElementsByClassName('full-screen-header')[0];
  this.phoneInfo = document.getElementsByClassName('phone-info')[0];
  this.mainHeader = document.getElementsByClassName('main-header')[0];
  this.cancelButton = document.getElementsByClassName('cancel-fullscreen')[0];
  this.phoneDisplay = document.getElementsByClassName('phone-display')[0];
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

UserInterface.prototype.toggleFullScreen = function () {
  var self = this;
  var uiComponents = [
    this.mainHeader,
    this.phoneInfo,
    this.fullScreenButton
  ];

  this.isFullscreen = !this.isFullscreen;

  if (this.isFullscreen) {
    this.fullScreenHeader.style.display = 'block';
    uiComponents.forEach(function(component) {
        component.style.display = 'none';
        self.phoneDisplay.style.width = '100%';
    });
  } else {
    this.fullScreenHeader.style.display = 'none';
    uiComponents.forEach(function(component) {
        component.style.display = 'block';
        self.phoneDisplay.style.width = '50%';
    });
  }
};


var assets = [
  './assets/phone-gray-select.png',
  './assets/phone-silver-select.png'
];

Application.ui = new UserInterface(assets, 'iphone-display', 'color-choice', 'toggle-full-screen');

Application.ui.fullScreenButton.addEventListener('click', function () {
  Application.ui.toggleFullScreen();
});

Application.ui.cancelButton.addEventListener('click', function () {
  Application.ui.toggleFullScreen();
});

Application.ui.buttons[0].addEventListener('click', function () {
  Application.ui.selectImage(Application.ui.assets[0], this);
});

Application.ui.buttons[1].addEventListener('click', function () {
  Application.ui.selectImage(Application.ui.assets[1], this);
});
