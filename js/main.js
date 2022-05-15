let form = document.getElementById('addForm')
let notesList = document.getElementById('notesList')


//events for functionality 
form.addEventListener('submit', addNotes)



function addNotes(e) {
    e.preventDefault()

    let notes = document.getElementById('notes').value

    let li = document.createElement('li')

    li.appendChild(document.createTextNode(notes))

    li.className = 'list-group-item'

    let deleteBtn = document.createElement('button')
    let completedBtn = document.createElement('button')

    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    completedBtn.className = 'btn btn-success btn-sm float-end complete'

    deleteBtn.appendChild(document.createTextNode('X'))
    completedBtn.appendChild(document.createTextNode('&#10003'))

    li.appendChild(deleteBtn)
    li.appendChild(completedBtn)

    notesList.appendChild(li)



}




