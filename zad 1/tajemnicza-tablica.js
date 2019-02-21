console.log("tajemnicza-tablica.js")

let letters = document.getElementsByTagName('tbody');

document.getElementById('givePass')
    .addEventListener("click", findPassword);
document.getElementById('showPass')
    .addEventListener("click", showPassword);

const findHiddenLetters = (elements) => {
    const password = [];

    const rows = elements[0].children;
    for (let row of rows) {
        for (let letter of row.children) {
            if (letter.style.backgroundColor === letter.style.color) {
                password.push(letter.textContent);
            }
        }
    }

    return password;
}

const showHiddenLetters = (elements) => {
    const rows = elements[0].children;

    for (let row of rows) {
        for (let letter of row.children) {
            if (letter.style.backgroundColor === letter.style.color) {
                letter.style.backgroundColor = '#000000';
                letter.style.color = '#FFFFFF';
            } else {
                letter.style.backgroundColor = '#FFFFFF';
                letter.style.color = '#FFFFFF';
            }
        }
    }
}

function getPassword(Letters) {
    const password = findHiddenLetters(Letters);
    return password.join().replace(/,/g, '');
}

function findPassword() {
    const passToString = getPassword(letters);
    const passwordField = document.getElementById('result');
    passwordField.style.color = "red";
    passwordField.innerHTML = passToString;
}

function showPassword() {
    showHiddenLetters(letters);
}
