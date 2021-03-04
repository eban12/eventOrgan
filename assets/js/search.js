const card = document.querySelector('.card');
const searchBar = document.querySelector('#search');
const textHere = document.getElementsByTagName('event-card');


searchBar.addEventListener('keyup', () =>{
    // console.log(textHere[0]);
    //console.log(textHere[0].querySelector('.card').querySelector('.card__body').querySelector('.event__name').textContent);

        let key = searchBar.value; //key now has the filtered value
        for (let i = 0; i < textHere.length; i++) {
            if ((new RegExp(key)).test(textHere[0].querySelector('.card').querySelector('.card__body').querySelector('.event__name').textContent.toLowerCase())) {
                textHere[i].style.display = "";
            } else {
                textHere[i].style.display = "none";
            }
    }

});