import './css/styles.css';
import steganography from './js/steganography.min';
import toggleButtons from './js/toggleButtons';
import Swal from 'sweetalert2';

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
  const imgData = steganography.encode(hiddenMessage.value, selectedImage);
  selectedImage = imgData;

  Swal.fire({
    title: 'Save the Encode Image.',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then(result => {
    if (result.isConfirmed) {
      const link = document.createElement('a');
      link.href = selectedImage;
      link.download = 'encoded_image.jpg';

      // Trigger the download
      link.click();

      Swal.fire('Saved!', '', 'success');
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info');
    }
  });
});

//btn Decode
btnDecode.addEventListener('click', () => {
  const secretMessage = steganography.decode(selectedImage);

  if (secretMessage === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nothing found!',
    });
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Success.',
      text: `Decoded Message:  ${secretMessage}`,
    });
  }
});
