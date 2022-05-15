let form = document.getElementById('addForm')
let notesList = document.getElementById('notesList')


//events for functionality 
form.addEventListener('submit', addNotes)



function addNotes(e) {
    e.preventDefault()
    let newNote = document.querySelector('#notes').value

    //make a new list 
    let li = document.createElement('li')
    li.className = 'list-group-item'

    li.appendChild(document.createTextNode(newNote))

    //adding a new delete button and completed button to each li item 
    let deleteBtn = document.createElement('button')
    let completedBtn = document.createElement('button')

    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    completedBtn.className = 'btn btn-success btn-sm float-end complete'

    deleteBtn.appendChild(document.createTextNode('X'))
    completedBtn.appendChild(document.createTextNode('&#10003'))

    li.appendChild(deleteBtn)
    li.appendChild(completedBtn)


    //append the li to our list 
    notesList.appendChild(li)


}



