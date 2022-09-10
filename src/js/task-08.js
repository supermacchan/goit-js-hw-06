const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const emailName = formElements.email.name;
    const emailValue = formElements.email.value;
    const passwordName = formElements.password.name;
    const passwordValue = formElements.password.value;

    if (emailValue !== '' && passwordValue !== '') {
        console.log(`
        ${emailName}: ${emailValue}
        ${passwordName}: ${passwordValue}
        `);

        event.currentTarget.reset();
    } else {
        window.alert('All fields must be filled!');
    }
}