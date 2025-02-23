
const form = document.getElementById("add-todo"); // declare my var of the form search for the id
const input = form.querySelector("input"); // choose to target input
const todoList = document.getElementById("todo-list"); // get todo list target

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoText = input.value.trim(); //pressing/extra space handler checklist 2 
    if (todoText === "") return;

    const li = document.createElement("li");

    const todoBtn = document.createElement("button");
    todoBtn.textContent = todoText;
    let clickCount = 0;

    //strike through handling
    todoBtn.addEventListener("click", function () {
        clickCount++;
        if (clickCount === 1) {
            todoBtn.style.textDecoration = "line-through";
        } else if (clickCount === 2) {
            li.remove();
        }
    });

    li.appendChild(todoBtn);
    todoList.appendChild(li);
    input.value = "";
});

