export function hideMessage(message, image) {
  console.log(message, image);
  var reader = new FileReader();

  reader.onload = function (e) {
    var imageData = e.target.result;
    var stegCloak = new StegCloak();
    var encodedImage = stegCloak.hide(imageData, message);

    // Зберігаємо приховане зображення
    var link = document.createElement('a');
    link.href = encodedImage;
    link.download = 'encoded_image.png';
    link.click();
  };

  reader.readAsDataURL(image);
}
