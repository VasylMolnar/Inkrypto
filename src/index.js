import './css/styles.css';
import steg from './steganography.min';
import toggleButtons from './js/toggleButtons';

import { hideMessage } from './js/hideMessage';

const divElement = document.querySelector('.divElement');
const fileInput = document.querySelector('.fileInput');
const hiddenMessage = document.querySelector('.hiddenMessage');
const btnEncode = document.querySelector('.btnEncode');
const btnDecode = document.querySelector('.btnDecode');
const btnReset = document.querySelector('.btnReset');

let selectedImage = null;

// Handle file selection
fileInput.addEventListener('change', () => {
  const reader = new FileReader();

  reader.onload = function (e) {
    selectedImage = e.target.result;

    let imgElement = `<img src=${e.target.result} class="img" >`;

    divElement.innerHTML = '';
    divElement.innerHTML += imgElement;
    toggleButtons(selectedImage);
  };

  reader.readAsDataURL(fileInput.files[0]);
});

// Handle input changes
hiddenMessage.addEventListener('input', toggleButtons);

//btn  reset
btnReset.addEventListener('click', () => {
  window.location.reload();
});

//btn Encode
btnEncode.addEventListener('click', () => {
  // hideMessage(hiddenMessage.value, selectedImage);
  console.log(steg.encode(hiddenMessage.value, selectedImage));
});
