let listItem = [];
let listItems = document.getElementById(`list-items`);
let listInput = document.getElementById(`list-input`);
let addBtn = document.getElementById(`add-item`);
let clearBtn = document.getElementById(`clear-btn`);

addBtn.addEventListener(`click`, function add() {
    if (listInput.value.length > 0) {
      listItem.push(listInput.value);
      renderList();
      listItem = [];
    } else {
    }
    listInput.value = "";
  });

function renderList() {
  for (let i = 0; i < listItem.length; i++) {
    listItems.innerHTML += "<li>" + listItem[i] + "</li>";
  }
}

clearBtn.addEventListener(`click`, () => {
  if (listItems.textContent != "") {
    confirm(`You really want to clear your list?`);
    if (confirm) {
      listItems.textContent = "";
    }
  } else {
    return null
  }
});