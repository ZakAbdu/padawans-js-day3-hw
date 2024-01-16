function addToDo() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value

    if (title && description) {
        const toDoList = document.getElementById('to-do-list')
        const li = document.createElement('li')
        li.innerHTML = `${title}: ${description}`

        li.addEventListener('click', () => {
            if (li.classList.contains('done')) {
                toDoList.removeChild(li)
            } else {
                li.classList.add('done')
            }
        });

        toDoList.appendChild(li);

        document.getElementById('title').value = ''
        document.getElementById('description').value = ''
    }
}