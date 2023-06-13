import './css/styles.css';

const fileInput = document.querySelector('.fileInput');
const divElement = document.querySelector('.imageFile');
const btnReset = document.querySelector('.btn-warning');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    let imgElement = `<img src=${e.target.result} class="img" >`;
    let btnReset = `<btn class="btn btn-warning" style.margin = "50px">Reset</btn>`;

    divElement.innerHTML = '';
    divElement.innerHTML += imgElement;
    divElement.insertAdjacentHTML('afterend', btnReset);
  };

  reader.readAsDataURL(file);
});
