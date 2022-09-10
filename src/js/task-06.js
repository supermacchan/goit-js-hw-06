const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onBlur);

function onBlur(event) {
    if (event.currentTarget.value.length === event.currentTarget.dataset.length) {
        event.currentTarget.classList.add('.valid');
    } else {
        event.currentTarget.classList.add('.invalid');
    }
    console.log(event.currentTarget.value.length);
    console.log(inputEl.dataset.length === inputEl.value.length);
}

