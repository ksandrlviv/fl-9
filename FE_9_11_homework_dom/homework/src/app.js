const rootNode = document.getElementById('root');

const image = document.createElement(`img`);
image.src = `./assets/img/cat.png`;
rootNode.appendChild(image);

let elCounter = 0;

const MAX_ITEMS = 10;
const ENTER_KEY_CODE = 13;

const addButton = rootNode.querySelector(`label i`);
const input = rootNode.querySelector(`label input`);
const list = rootNode.querySelector(`ul`);

const notification = document.createElement(`p`);
notification.innerText = `Maximum item per list are created`;
notification.style.color = `red`;
notification.style.display = `none`;

const label = rootNode.querySelector(`label`);

rootNode.insertBefore(notification, label);

const addTodoHandler = (event) => {
    event.preventDefault();
    if (elCounter >= MAX_ITEMS || !input.value) {
        return;
    }
    createItem(input.value);
    input.value = null;
    addButton.classList.add(`disabled`);
    if (elCounter >= MAX_ITEMS) {
        input.disabled = true;
        notification.style.display = `block`;
    }
};

addButton.addEventListener(`click`, addTodoHandler);

input.addEventListener('keyup', (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
        addTodoHandler(event);
    }
});

input.addEventListener(`input`, () => {
    if (input.value) {
        addButton.classList.remove(`disabled`);
    } else {
        addButton.classList.add(`disabled`);
    }
});

list.addEventListener(`click`, (event) => {
    if (event.target.innerText === `check_box_outline_blank`) {
        event.target.innerText = `check_box`;
    }
    if (event.target.innerText === `delete`) {
        event.target.parentElement.remove();
        elCounter--;
        input.disabled = false;
        notification.style.display = `none`;
    }
});

function createItem(text) {
    const listItem = document.createElement(`li`);
    listItem.classList.add('draggable');
    listItem.draggable = true;
    const checkBoxIcon = document.createElement(`i`);
    checkBoxIcon.classList.add(`material-icons`);
    checkBoxIcon.innerText = `check_box_outline_blank`;
    const deleteIcon = checkBoxIcon.cloneNode(true);
    deleteIcon.innerText = `delete`;
    const textSpan = document.createElement(`span`);
    textSpan.innerText = text;
    listItem.appendChild(checkBoxIcon);
    listItem.appendChild(textSpan);
    listItem.appendChild(deleteIcon);
    list.appendChild(listItem);
    elCounter++;
}

let dragSrcEl = null;

function handleDragStart(e) {
    let target = e.target;
    if (target.classList.contains('draggable')) {
        dragSrcEl = target;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', target.outerHTML);

        target.classList.add('dragging');
    }
}

function handleDragOver(e) {
    let target = e.target;
    if (target.classList.contains('draggable')) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        target.classList.add('dragging-over');

        e.dataTransfer.dropEffect = 'move';

    }
    return false;
}

function handleDragLeave(e) {
    e.target.classList.remove('dragging-over');
}

function handleDrop(e) {
    let target = e.target;
    if (target.classList.contains('draggable')) {
        e.stopPropagation();
        if (dragSrcEl !== target) {
            target.parentNode.removeChild(dragSrcEl);
            let dropHTML = e.dataTransfer.getData('text/html');
            target.insertAdjacentHTML('beforebegin', dropHTML);
            let dropElem = target.previousSibling;
            dropElem.classList.remove('dragging');
        }
    }
    target.classList.remove('dragging-over');
    return false;
}

function handleDragEnd() {
    this.classList.remove('dragging-over');
}

function addDnDHandlers(elem) {
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragover', handleDragOver, false);
    elem.addEventListener('dragleave', handleDragLeave, false);
    elem.addEventListener('drop', handleDrop, false);
    elem.addEventListener('dragend', handleDragEnd, false);
}

addDnDHandlers(list);
