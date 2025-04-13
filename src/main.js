import './style.css'

const colorList = []
const inputColor = document.querySelector('#input-color');
const addButton = document.querySelector('#add-button');
const colorsContainer = document.querySelector('#colors-container');



const createTemplateColor = (color, index) => {
  return `
    <div class="color-container">
      <div class="color-item" id=${index} style="background: ${color}"></div>
      <p class="color-info">${color}</p>
      <input type="button" class="delete-btn" data-color=${index} value="Eliminar">
    </div>
  `;
}

const renderColorList = () => {
  let templatesColorList = colorList.map((color, index) => {
    return createTemplateColor(color, index).trim()
  }).join('');
  colorsContainer.innerHTML = templatesColorList;
}


// para obtener la posicion del color y luego elimando  filtrando
//const info = boton.dataset.color;


addButton.addEventListener('click', () => {
  const color = inputColor.value.trim();

  if (!color) {
    msj.innerHTML = 'Please enter a color';
    inputColor.value = '';
    return;
  }

  if(!colorList.includes(color)) {
    colorList.push(color);
    renderColorList();
    inputColor.value = '';
    return;
  }
})