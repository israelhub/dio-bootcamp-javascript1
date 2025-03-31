var form = document.getElementById("task-form");
var taskList = document.getElementById("task-list")

form.onsubmit = function (e){
    e.preventDefault(); // Impede que a pagina seja recarregada ao enviar o formulário
    var inputField = document.getElementById("task-input") // Pega a tarefa inserida no input
    addTask(inputField.value); // Chama a função addTask passando o valor da tarefa
    form.reset(); // Reseta o formulário
}

function addTask(description) {
    var taskContainer = document.createElement("div");
    var newTask = document.createElement("input");
    var labelTask = document.createElement("label");
    var taskDescriptionNode = document.createTextNode(description)
    
    newTask.setAttribute("type", "checkbox"); // Cria o checkbox
    newTask.setAttribute("id", description); // Cria o id do checkbox
    newTask.setAttribute("name", description); // Cria o name do checkbox

    labelTask.setAttribute("for", description); // Vincula o label ao input
    labelTask.appendChild(taskDescriptionNode); // Coloca o texto da tarefa dentro do label

    taskContainer.classList.add("tasks"); // adiciona uma classe CSS a div
    taskContainer.appendChild(newTask); // Adiciona o input dentro da div
    taskContainer.appendChild(labelTask); // Adiciona o label dentro da div

    taskList.appendChild(taskContainer); // Adiciona a div criada a task-list
}