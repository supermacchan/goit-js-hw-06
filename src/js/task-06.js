const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onBlur);

function onBlur(event) {
    const requiredLength = Number(event.currentTarget.dataset.length);
    if (event.currentTarget.value.length === requiredLength) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');

    } else {
        event.currentTarget.classList.add('invalid');
    }
}