export function revealMessage() {
  var image = document.getElementById('image').files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var imageData = e.target.result;
    var stegCloak = new StegCloak();
    var decodedMessage = stegCloak.reveal(imageData);
    // Виводимо приховане повідомлення
    alert('Decoded Message: ' + decodedMessage);
  };

  reader.readAsDataURL(image);
}
