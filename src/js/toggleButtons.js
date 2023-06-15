const fileInput = document.querySelector('.fileInput');
const hiddenMessage = document.querySelector('.hiddenMessage');
const btnEncode = document.querySelector('.btnEncode');
const btnDecode = document.querySelector('.btnDecode');
const btnReset = document.querySelector('.btnReset');

const toggleButtons = selectedImage => {
  if (fileInput.files.length > 0) {
    btnReset.disabled = false;
    btnDecode.disabled = false;
  }

  if (fileInput.files.length > 0 && hiddenMessage.value != '') {
    btnEncode.disabled = false;
    btnReset.disabled = false;
    btnDecode.disabled = false;
  } else {
    btnEncode.disabled = true;
  }
};

export default toggleButtons;
