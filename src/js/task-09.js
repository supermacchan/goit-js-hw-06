function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChangingBtn = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');

colorChangingBtn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorRef.textContent = newColor;
}