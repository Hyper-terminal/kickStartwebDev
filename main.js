let li = document.querySelectorAll('.list-group-item');


li[1].style.background = 'green';
// li[2].style.display = 'none';


for(let i=1; i<li.length; i+=2){
    li[i].style.background = 'gray';
}


// queryselectorall will give us the array of objects 
/// queryselector will select only one ele