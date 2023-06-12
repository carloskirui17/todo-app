const ul = document.querySelector('.ul');
const addBtn = document.getElementById('add_todo');
const input = document.querySelectorAll('input');

const addTodo = () => {
    if (input[0] !== "") {
        input[0].focus()
        let todo = input[0].value;
        let li = document.createElement('li');
        let xBtn = document.createElement('button');
        xBtn.classList.add('delete');
        xBtn.textContent = "X";
        li.textContent = todo;
        ul.appendChild(li);
        li.appendChild(xBtn);
        input[0].value = "";
    }

}

addBtn.addEventListener('click', addTodo)

document.querySelector('.delete').addEventListener('click', (e) => e.target.parentElement.remove())
