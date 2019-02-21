console.log("tajemnicza-tablica.js")

let letters = document.getElementsByTagName('tbody');

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

const password = findHiddenLetters(letters);

const passToString = password.join().replace(/,/g, '');

const passwordField = document.getElementById('result');

function findPassword() {
    passwordField.style.color = "red";
    passwordField.innerHTML = passToString;
}

console.log(passToString);