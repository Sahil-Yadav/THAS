const todos = document.querySelector(".listItem");

function getTodos() {
  let todoList = localStorage.getItem("todos");
  todos.innerHTML = todoList;
}

function todo(event) {
  if (event.code === "Enter") {
    const input = document.querySelector(".addTodo");
    let inputValue = input.value;

    if (inputValue === ``) {
      alert("Enter a valid input");
    } else {
      const ul = document.querySelector("ul");
      const listItem = `<li>
  <span>
    <i class="fad fa-trash-alt"></i>
  </span>${inputValue}
</li>`;

      ul.innerHTML += listItem;
      inputValue = input.value = "";
    }
    localStorage.setItem("todos", todos.innerHTML);
  }
}

const listItem = document.querySelector(".listItem");

listItem.addEventListener(`click`, (event) => {
  event.target.classList.toggle("remove");
  localStorage.setItem("todos", todos.innerHTML);
});

const removeItem = document
  .querySelector(".listItem")
  .addEventListener(`click`, (event) => {
    if (event.target.tagName === `I`) {
      event.target.parentElement.parentElement.remove();
    }
    if (event.target.tagName === `SPAN`) {
      event.target.parentElement.remove();
    }
    localStorage.setItem("todos", todos.innerHTML);
  });
