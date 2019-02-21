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
    const starNode = document.createElement('div');
    const star = document.createTextNode('*');
    starNode.appendChild(star);
    tree.appendChild(starNode);

    let count = 0;
    const whiteSpaces = [];

    while( count < levels ) {
        if ( count % levelCapacity !== 0) {
            whiteSpaces.push(' ');
        }

        const branchNode = document.createElement('div'); 
        const branch = document.createTextNode('/' + whiteSpaces + '\\');
        branchNode.appendChild(branch);
        tree.appendChild(branchNode);

        count++;
    }
}

function displayTree() {
    initTree();
}