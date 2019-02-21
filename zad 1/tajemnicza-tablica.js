console.log("tajemnicza-tablica.js")

let letters = document.getElementsByTagName('tbody');
let password = [];

document.getElementById('givePass')
    .addEventListener("click", findPassword);
document.getElementById('showPass')
    .addEventListener("click", showPassword);
document.getElementById('toOneRow')
    .addEventListener("click", setOneRow);

const findHiddenLetters = (elements) => {
    const newPass = [];

    const rows = elements[0].children;
    for (let row of rows) {
        for (let letter of row.children) {
            if (letter.style.backgroundColor === letter.style.color) {
                newPass.push(letter.textContent);
            }
        }
    }

    return newPass;
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

const removeRows = (elements) => {
    const cNode = elements[0].cloneNode(false);
    elements[0].parentNode.replaceChild(cNode ,elements[0]);
}

const writePassword = (elements,writtenPass) => {
    writtenPass.forEach(letter => {
        const letterNode = document.createElement('td');
        const letterText = document.createTextNode(letter);
        letterNode.appendChild(letterText);
        letterNode.style.backgroundColor = "000000"
        letterNode.style.color = "#FFFFFF"
        elements[0].appendChild(letterNode);
    });
}

function getPassword(Letters) {
    password = findHiddenLetters(Letters);
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

function setOneRow() {
    removeRows(letters);
    writePassword(letters,password);
    disableButtons();
}

function disableButtons() {
    document.getElementById('givePass').disabled = true;
    document.getElementById('showPass').disabled = true;
}
