/* ------------------------- DARK MODE ----------------------*/


function trocarModo() {
    changeClasses();
    changeText();
}


function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}


function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
        h1.innerHTML = lightMode + " ON";
        return;
}

const darkModeClass = 'dark-mode';
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("pageLight");
const body = document.getElementsByTagName("body")[0];
//body coloca o index dele, como só tem 1 = 0
const footer = document.getElementsByTagName("footer")[0];
const task = document.getElementsByClassName("tasks-container");

button.addEventListener("click", trocarModo);



/*------------------LISTA DE TAREFAS--------------------*/


const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const tasksContainer = document.querySelector(".tasks-container")
const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();
console.log(inputIsValid);
    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }

    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')

    const taskContent = document.createElement('p');
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener("click", () => handleClick());
    
    const deleteItem = document.createElement('i');
    deleteItem.classList.add("fa-solid");
    deleteItem.classList.add("fa-trash-can");

    deleteItem.addEventListener('click', () => handleDeletClick());
   handleDeletClick(taskItemContainer, taskContent)

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";

};

const handleClick = (taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        const currentTaskIsBeingCliked = task.firstChild.isSameNode(taskContent);
        if (task.firstChild.isSameNode(taskContent)) {
            task.firstChild.classList.toggle('completed');
        }
    }
};

const handleDeletClick = () => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        const currentTaskIsBeingCliked = task.firstChild.isSameNode(taskContent);
        if(task.firstChild.isSameNode()) {
            taskItemContainer.remove();
        }
    }
};


const handleInputChange = () => {
    const inputIsValid = validateInput();

    if(inputIsValid) {
        return inputElement.classList.remove("error");
    }
};

addTaskButton.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", ()=> handleInputChange());
