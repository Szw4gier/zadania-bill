console.log("choinka.js");

let tree = document.getElementById('tree');
const levelCounter = document.getElementById('levelsAmount');

document.getElementById('generate')
    .addEventListener("click", displayTree);

const initTree = () => {
    const levels = document.getElementById('levels').value;
    const levelCapacity = document.getElementById('levelCapacity').value;

    levelCounter.innerHTML = getLevelsAmount(levels,levelCapacity);
    drawTree(levels,levelCapacity);
}

const getLevelsAmount = (levels, levelCapacity) => {
    return Math.ceil(levels/levelCapacity);
}

const drawTree  = (levels, levelCapacity) => {
    drawStar();    

    let count = 1;
    const whiteSpaces = [];

    while( count < levels ) {
        if ( count % levelCapacity !== 0) {
            whiteSpaces.push(' ');
            
        }
        console.log(whiteSpaces);
        drawBranch(whiteSpaces);
        count++;
    }
}

const drawStar = () => {
    const starNode = document.createElement('div');
    const star = document.createTextNode('*');
    starNode.appendChild(star);
    tree.appendChild(starNode);
}

const drawBranch = (whiteSpaces) => {
    const branchNode = document.createElement('div');
    branchNode.innerHTML = '/' + whiteSpaces.join().replace(/,/g, '&nbsp;') + '\\';
    tree.appendChild(branchNode);
}

function displayTree() {
    initTree();
}