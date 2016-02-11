var Application = {};
window.Application = Application;

function UserInterface(assets, imageId, buttonClass, fullScreenButtonId) {
  this.assets = assets;
  this.imageId = imageId;
  this.imageNode = document.getElementById(this.imageId);
  this.count = 0;
  this.buttonClass = buttonClass;
  this.buttons = document.getElementsByClassName(buttonClass);
  this.isFullscreen = false;
  this.fullScreenButton = document.getElementById(fullScreenButtonId);
  this.cancelButton = document.getElementsByClassName('cancel-fullscreen')[0];
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
  var fullScreenHeader = document.getElementsByClassName('full-screen-header')[0];
  var phoneInfo = document.getElementsByClassName('phone-info')[0];
  var mainHeader = document.getElementsByClassName('main-header')[0];
  var cancelButton = document.getElementsByClassName('cancel-fullscreen')[0];
  var phoneDisplay = document.getElementsByClassName('phone-display')[0];
  //components to hide when full screen  link is clicked
  var uiComponents = [
    mainHeader,
    phoneInfo,
    logo,
    Application.ui.fullScreenButton
  ];

  this.isFullscreen = !this.isFullscreen;

  if (this.isFullscreen) {
    fullScreenHeader.style.display = 'block';
    uiComponents.forEach(function(component) {
        component.style.display = 'none';
        phoneDisplay.style.width = '100%';
    });
  } else {
    fullScreenHeader.style.display = 'none';
    uiComponents.forEach(function(component) {
        component.style.display = 'block';
        phoneDisplay.style.width = '50%';
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
