const rangeSlider = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = rangeSlider.value + 'px';

rangeSlider.addEventListener('input', onChangingRangeSlider);

function onChangingRangeSlider(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}