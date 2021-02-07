const filter = document.getElementById('searchBar');             //the task filter text field
const allLi = document.getElementsByTagName('li'); //I've used by TagName method to identify every collection-item

filter.addEventListener('keyup', filterTasks);

function filterTasks() {
    let key = document.getElementById('searchBar').value; //key now has the filtered value
    for(let i = 0; i<allLi.length; i++){
        if((new RegExp(key)).test(allLi[i].textContent)){
            allLi[i].style.display = "";
        }else{
            allLi[i].style.display = "none";
        }
    }
}