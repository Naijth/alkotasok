const makeDiv = (className) => {
    const div = document.createElement('div');
    div.className = className;
    return div;
}

const containerDiv = makeDiv('conatiner');
document.body.appendChild(containerDiv);

const tableDiv = makeDiv('table');
containerDiv.appendChild(tableDiv);

const formDiv = makeDiv('form');
containerDiv.appendChild(formDiv);