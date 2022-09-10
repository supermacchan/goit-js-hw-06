let counterValue = 0;
const counterEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', onBtnClick);
incrementBtn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
    counterValue += Number(event.currentTarget.textContent);
    counterEl.textContent = counterValue;
}