const taskForm = document.getElementById("taskForm")
const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

function addTask(event) {
    event.preventDefault()

    const task = document.createElement("input")
    task.classList.add("task")

    const taskCheckbox = document.createElement("input")
    taskCheckbox.type = "checkbox"

    const taskContent = document.createElement("input")
    taskContent.type = "text"
    taskContent.value = taskInput.value
    function removeTask() {
        taskList.removeChild(task)
    }

    const taskDeletBottun = document.createElement("button")
    taskDeletBottun.textContent = "x"
    taskDeletBottun.addEventListener("click", removeTask)

    task.appendChild(taskCheckbox)
    task.appendChild(taskContent)
    task.appendChild(taskDeletBottun)

    taskList.appendChild(task)

    taskForm.reset()
}

taskForm.addEventListener("submit", addTask)