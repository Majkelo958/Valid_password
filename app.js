const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


const showMessage = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.textContent = 'mocne hasło'
        p.style.color = "#00ffae"
    }
    else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
p.textContent = 'średnie hasło'
p.style.color = "#00d0ff"
    } else {
        p.textContent = 'słabe hasło'
        p.style.color = "orange"
    }
}

const isEmpty = () => {
    if (pass.value !== '') {
        showMessage()
       
    } else {
        p.textContent = 'Nie wpisałeś hasła'
        p.style.color = "tomato"
    }
}

pass.addEventListener('keyup',isEmpty)