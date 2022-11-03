
// by class name
// let liList = document.getElementsByClassName('list-group-item');

// for (let index = 0; index < liList.length; index++) {
//     liList[index].style.backgroundColor = "lightgrey";
//     liList[index].style.fontWeight = "bold";
// }


// by tag name
let liList = document.getElementsByTagName('li');

for (let index = 0; index < liList.length; index++) {
    liList[index].style.backgroundColor = "lightgrey";
    liList[index].style.fontWeight = "bold";
    liList[index].style.color = 'green';
}
