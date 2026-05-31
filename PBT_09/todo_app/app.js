const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const countEl = document.querySelector("#count");
const clearCompletedBtn =
    document.querySelector("#clearCompleted");

let todos =
    JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

function saveTodos() {
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function updateCount() {
    const activeCount =
        todos.filter(todo => !todo.completed).length;

    countEl.textContent =
        `${activeCount} items left`;
}

function renderTodos() {
    todoList.innerHTML = "";

    let filtered = [...todos];

    if (currentFilter === "active") {
        filtered = todos.filter(
            todo => !todo.completed
        );
    }

    if (currentFilter === "completed") {
        filtered = todos.filter(
            todo => todo.completed
        );
    }

    filtered.forEach(todo => {
        const li =
            document.createElement("li");

        li.className =
            "todo-item" +
            (todo.completed
                ? " completed"
                : "");

        li.dataset.id = todo.id;

        const text =
            document.createElement("span");

        text.textContent = todo.text;

        const deleteBtn =
            document.createElement("button");

        deleteBtn.textContent = "❌";

        li.append(text, deleteBtn);

        todoList.appendChild(li);
    });

    updateCount();
}

todoForm.addEventListener(
    "submit",
    e => {
        e.preventDefault();

        const text =
            todoInput.value.trim();

        if (!text) return;

        todos.push({
            id: Date.now(),
            text,
            completed: false
        });

        saveTodos();
        renderTodos();

        todoInput.value = "";
    }
);

todoList.addEventListener(
    "click",
    e => {
        const li =
            e.target.closest(".todo-item");

        if (!li) return;

        const id =
            Number(li.dataset.id);

        const todo =
            todos.find(
                t => t.id === id
            );

        if (
            e.target.tagName === "BUTTON"
        ) {
            todos = todos.filter(
                t => t.id !== id
            );
        } else if (
            e.target.tagName === "SPAN"
        ) {
            todo.completed =
                !todo.completed;
        }

        saveTodos();
        renderTodos();
    }
);

todoList.addEventListener(
    "dblclick",
    e => {
        if (
            e.target.tagName !== "SPAN"
        ) return;

        const span = e.target;

        const li =
            span.closest(".todo-item");

        const id =
            Number(li.dataset.id);

        const input =
            document.createElement(
                "input"
            );

        input.value =
            span.textContent;

        span.replaceWith(input);

        input.focus();

        input.addEventListener(
            "keydown",
            event => {
                if (
                    event.key === "Enter"
                ) {
                    const todo =
                        todos.find(
                            t =>
                                t.id === id
                        );

                    todo.text =
                        input.value;

                    saveTodos();
                    renderTodos();
                }
            }
        );
    }
);

document
    .querySelectorAll(
        ".filters button"
    )
    .forEach(btn => {
        btn.addEventListener(
            "click",
            () => {
                currentFilter =
                    btn.dataset.filter;

                renderTodos();
            }
        );
    });

clearCompletedBtn.addEventListener(
    "click",
    () => {
        todos = todos.filter(
            todo => !todo.completed
        );

        saveTodos();
        renderTodos();
    }
);

renderTodos();