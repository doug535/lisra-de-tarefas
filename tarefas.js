function add() {
    const ul = document.querySelector("ul")
    const input = document.querySelector("input")
    const tarefa = input.value

    const li = document.createElement("li")
    li.innerText = tarefa
}