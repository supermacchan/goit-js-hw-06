function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const creatingBtn = document.querySelector('[data-create]');
const clearingBtn = document.querySelector('[data-destroy]');
const controlsRef = document.querySelector('#controls');
const inputRef = controlsRef.firstElementChild;
const boxesRef = document.querySelector('#boxes');

creatingBtn.addEventListener('click', handleCreatingBtnClick);
clearingBtn.addEventListener('click', handleClearingBtnClick);

let boxesElements = [];

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const newItem = document.createElement('div');
    newItem.style.backgroundColor = getRandomHexColor();
    newItem.classList.add('newBox');
    newItem.style.width = '30px';
    newItem.style.height = '30px';
    boxesElements.push(newItem);
  }
}

function handleCreatingBtnClick(event) {
  const numberOfBoxes = Number(inputRef.value);
  createBoxes(numberOfBoxes);
  boxesRef.append(...boxesElements);
}

function handleClearingBtnClick(event) {
  const boxesToRemove = document.querySelectorAll('.newBox');
  console.log(boxesToRemove);
  boxesToRemove.forEach(box => {
    box.remove();
    boxesElements = [];
  });
}

