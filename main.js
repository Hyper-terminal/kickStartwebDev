let ul = document.querySelector("#items");
let deleteButton = document.querySelector(".delButton");

// delete function

deleteButton.addEventListener("click", () => {
  if (ul.children.length === 0) {
    alert("Nothing to delete");
  } else {
    ul.lastElementChild.remove();
  }
});
