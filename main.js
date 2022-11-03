let ul = document.querySelector("#items");
let deleteButton = document.querySelector(".delButton");
let lilist = document.querySelectorAll(".list-group-item");
let filtersearch = document.querySelector("#itemsearcher");
let submitButton = document.querySelector("#submitButton");
let inputfield1 = document.querySelector("#inputField1");
let inputfield2 = document.querySelector("#inputField2");

// delete function

deleteButton.addEventListener("click", () => {
  if (ul.children.length === 0) {
    alert("Nothing to delete");
  } else {
    ul.lastElementChild.remove();
  }
});

// filter search
filtersearch.addEventListener("keyup", (e) => {
  const { value } = e.target;
  let searchValue = value.toString().toLowerCase().trim();

  lilist.forEach((element) => {
    let eleText = element.textContent.toString().toLowerCase().trim();

    if (eleText.indexOf(searchValue) > -1) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
});

// add items
let inputfieldValue1 = "";
let inputfieldValue2 = "";

// get input field1 value
inputfield1.addEventListener("keyup", (e) => {
  inputfieldValue1 = e.target.value;
});

// get input field2 value
inputfield2.addEventListener("keyup", (e) => {
  inputfieldValue2 = e.target.value;
});

// add functionality to submit button
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // create and append child to ul ele
  let lii = document.createElement("li");
  lii.textContent = `Name: ${inputfieldValue1} and Description: ${inputfieldValue2}`;
  lii.className = "list-group-item";
  ul.appendChild(lii);
});
