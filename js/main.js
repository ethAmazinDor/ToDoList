let form = document.getElementById('addForm')
let notesList = document.getElementById('notesList')
let crossOff = document.querySelectorAll('.complete')
let filter = document.getElementById('filter')

//events for functionality 

form.addEventListener('submit', addNotes)
notesList.addEventListener('click', delNote)
filter.addEventListener('keyup', filterWords)

//deletes a note
function delNote(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement
        notesList.removeChild(li)
    }
}

function filterWords(e) {
    let text = e.target.value.toLowerCase()

    //get all the li items out of the li
    let allNotes = notesList.getElementsByTagName('li')

    //convert into an array

    Array.from(allNotes).forEach((note) => {
        let noteName = note.firstChild.textContent
        if (noteName.toLowerCase().indexOf(text) != -1) {
            note.style.display = 'block'
        } else {
            note.style.display = 'none'
        }

    })
    console.log(allNotes)
}



function addNotes(e) {
    e.preventDefault()

    if (notes.value === '') {
        // alert('you forgot to write your note!')
        notes.classList.remove('shake');
        setTimeout(() => {
            notes.classList.add('shake')
        }, 50)
    } else {

        let notes = document.getElementById('notes').value

        let li = document.createElement('li')

        li.appendChild(document.createTextNode(notes))

        li.className = 'list-group-item '

        let deleteBtn = document.createElement('button')
        let completedBtn = document.createElement('button')

        deleteBtn.className = 'btn btn-danger btn-sm float-end delete me-2'
        completedBtn.className = 'btn btn-success btn-sm float-end complete me-2'

        deleteBtn.appendChild(document.createTextNode('X'))
        completedBtn.appendChild(document.createTextNode('Done'))

        li.appendChild(deleteBtn)
        li.appendChild(completedBtn)

        notesList.appendChild(li)

        //when "Done" button is pressed it toggles the class of crossed 
        completedBtn.addEventListener('click', (e) => {
            if (e.target.classList[4] === 'complete') {
                let li = e.target.parentElement
                li.classList.toggle('crossed')
            }
        })
    }

}





