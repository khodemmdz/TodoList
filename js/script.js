let $ = document

let titleTodo = $.getElementById('titleTodos')
let captionTodo = $.getElementById('captionsTodo')
let btnAddTodo = $.getElementById('addTodoBtn')
let todosList = $.getElementById('todoCards')
let listCompelete = $.getElementById('listComplete')

const clearAllTodos = $.getElementById('ojfhrdvk')

let todoArry = []

function todosHandler() {
    let newTodoTitle = titleTodo.value
    let newcaptionTodo = captionTodo.value

    if (newTodoTitle.trim() === '' || newcaptionTodo.trim() === '') {
        alert('مقدار خالی اضافه نمیشه !')
        return
    }

    let newTodoObj = {
        id: todoArry.length + 1,
        title: newTodoTitle,
        caption: newcaptionTodo,
        complete: false
    }

    todoArry.push(newTodoObj)
    setLocalStorage(todoArry)
    generationTodos(todoArry)
    getLocalStorage(todoArry)

    titleTodo.value = ''
    captionTodo.value = ''
    titleTodo.focus()
}

function setLocalStorage(todos) {
    localStorage.setItem('todo', JSON.stringify(todos))
}

function generationTodos(todos) {
    let todoElem, captionElem, titleElem, boxEditorElem, completeElem, deleteElem

    todosList.innerHTML = ''

    todos.forEach(function (todo) {

        todoElem = $.createElement('div')
        todoElem.className = 'cardtodo'

        captionElem = $.createElement('p')
        captionElem.className = 'valueText'
        captionElem.innerHTML = todo.caption

        titleElem = $.createElement('p')
        titleElem.className = 'titleTodo'
        titleElem.innerHTML = todo.title

        boxEditorElem = $.createElement('div')
        boxEditorElem.className = 'boxEditor'

        completeElem = $.createElement('button')
        completeElem.className = 'editTodo'
        completeElem.innerHTML = 'Complete'
        completeElem.setAttribute('onclick', 'completeTodos(' + todo.id + ')')

        deleteElem = $.createElement('button')
        deleteElem.className = 'removeTodo'
        deleteElem.innerHTML = 'Delete'
        deleteElem.setAttribute('onclick', 'removeTodos(' + todo.id + ')')

        if (todo.complete) {
            captionElem.className = 'valueText CompleteTodo'
            titleElem.className = 'titleTodo CompleteTodo'
            completeElem.innerHTML = 'UnComplete'
        }

        boxEditorElem.append(completeElem, deleteElem)
        todoElem.append(captionElem, titleElem, boxEditorElem)
        todosList.append(todoElem)
    })
}

$.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        todosHandler()
    }
})

function clearAllTodolist() {
    
    todoArry = []
    
    setLocalStorage(todoArry)
    generationTodos(todoArry)
}

function completeTodos (todoId) {

    let localStorageTodos = JSON.parse(localStorage.getItem('todo'))
    todoArry = localStorageTodos

    todoArry.forEach(function (todo) {
        if (todo.id === todoId) {
            todo.complete = !todo.complete
        }
    })

    setLocalStorage(todoArry)
    generationTodos(todoArry)
}

function removeTodos (todoId) {
    let localStorageTodos = JSON.parse(localStorage.getItem('todo'))
    todoArry = localStorageTodos

    let removeTodosElem = todoArry.findIndex(function (todo) {
        return todo.id === todoId
    })

    todoArry.splice(removeTodosElem, 1)

    setLocalStorage(todoArry)
    generationTodos(todoArry)
}

function getLocalStorage() {
    let localStorageTodos = JSON.parse(localStorage.getItem('todo'))

    if (localStorageTodos) {
        todoArry = localStorageTodos
        generationTodos(todoArry)
    } else {
        todoArry = []
    }
}

btnAddTodo.addEventListener('click', todosHandler)
clearAllTodos.addEventListener('click', clearAllTodolist)
window.addEventListener('load', getLocalStorage)
clickAddtodoHandler.addEventListener('click', generationTodos)