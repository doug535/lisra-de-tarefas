const input = document.querySelector("input")
const ul = document.querySelector("ul")
const tarefas = []

function add(){
    if(input.value != "")
    tarefas.push(input.value) 
    input.value = ""
    render()
}
function render(){
    ul.innerHTML = null
    tarefas.forEach(function(tarefa) {
        const li = document.createElement("li")
        li.innerText = tarefa
        ul.appendChild(li)
    })
}
