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

button.addEventListener("click", trocarModo);



/*------------------LISTA DE TAREFAS--------------------*/


const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const validateInput = () => inputElement.value.trim().length > 0;
const handleAddTask = () => {
    const inputIsValid = validateInput();
console.log(inputIsValid);
    if (!inputIsValid) {
        return inputElement.classList.add("error");
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
