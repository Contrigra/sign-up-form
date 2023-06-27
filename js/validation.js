const form = document.querySelector('form')


form.addEventListener("submit", (event) => {
    if (!isPasswordCorrect()) {
        event.preventDefault()
    }
});


function isPasswordCorrect(event) {
    const password1 = document.querySelector('.password1').value
    const password2 = document.querySelector('.password2').value

    return password1 === password2;


}

