var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {

  listElement.innerHTML = ''

  for (todo of todos) {
    var todoElement = document.createElement('li')
    var todoText = document.createTextNode(todo)
    
    var excluir = document.createElement('a')
    excluir.setAttribute('href', '#')

    var position = todos.indexOf(todo)

    excluir.setAttribute('onclick', 'deleteTodo('+position+')')

    var excluirText = document.createTextNode('excluir') 

    todoElement.appendChild(todoText)
    todoElement.appendChild(excluir)

    listElement.appendChild(todoElement)

    excluir.appendChild(excluirText)
  
  }
}
renderTodos();

function addTodo() {
  var todoText = inputElement.value

  todos.push(todoText)
  inputElement.value = ''
  renderTodos()
  saveToStorage()

}

buttonElement.onclick = addTodo

function deleteTodo(position) {
  todos.splice(position, 1)
  renderTodos()
  saveToStorage()
}

function saveToStorage() {
  
  localStorage.setItem('list_todos', JSON.stringify(todos))
}