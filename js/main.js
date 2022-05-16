let form = document.getElementById('addForm')
let notesList = document.getElementById('notesList')
let crossOff = document.querySelectorAll('.complete')

//events for functionality 




form.addEventListener('submit', addNotes)

notesList.addEventListener('click', delNote)


function crossNote(e) {
    e.preventDefault()
    if (e.target.classList[4] === 'complete') {
        let li = e.target.parentElement
        li.classList.toggle('crossed')
    }
    console.log(e)
}


function delNote(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement
        notesList.removeChild(li)
    }
}




function addNotes(e) {
    e.preventDefault()
    for (let i = 0; i < crossOff.length; i++) {
        crossOff[i].addEventListener('click', crossNote)

    }

    let notes = document.getElementById('notes').value

    let li = document.createElement('li')

    li.appendChild(document.createTextNode(notes))

    li.className = 'list-group-item'

    let deleteBtn = document.createElement('button')
    let completedBtn = document.createElement('button')

    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    completedBtn.className = 'btn btn-success btn-sm float-end complete'

    deleteBtn.appendChild(document.createTextNode('X'))
    completedBtn.appendChild(document.createTextNode('Done'))

    li.appendChild(deleteBtn)
    li.appendChild(completedBtn)

    notesList.appendChild(li)
}




