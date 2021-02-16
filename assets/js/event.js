const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
console.log(id);

let eventTitle = document.querySelector('#title');
let eventDescription = document.querySelector('#description');
let eventImage = document.getElementById('imageSource');
let eventImg = document.getElementById('event');
let frontImage = document.getElementById('frontImage');
let eventDetail = document.querySelector('#eventDetail');
let eventDate = document.querySelector('#eventDate');
let dateAndTime = document.querySelector('#dateAndTime');
let eventLocation = document.querySelector('#eventLocation');

var DB;
//Event listener on load
document.addEventListener('DOMContentLoaded', () =>{

    let eventDB = indexedDB.open('eventOrganizer', 1);

    eventDB.onerror = function(event){
        console.log('Error Opening Database.');
    }
    eventDB.onsuccess = function(event){
        console.log('Databse ready.');

        DB = eventDB.result;
        displayTask();
    }

    function displayTask() {
        console.log(DB);
        var transaction = DB.transaction(['events']);
        var objectStore = transaction.objectStore('events');
        console.log(typeof (id));
        console.log(id);
        var request = objectStore.get(id);

        request.onsuccess = function (event) {
            if (request.result) {
                eventTitle.innerHTML = request.result.eventTitle;
                eventDescription.innerHTML = request.result.eventDescription;
                eventImage.src = request.result.imageSource;
                eventImg.style.backgroundImage = `url(${request.result.imageSource})`;
                frontImage.src = request.result.imageSource;
                eventDetail.innerHTML = request.result.eventDetail;
                let dateA = request.result.date.toString().split(' ');
                let dateArr = dateA[0] + ' ' + dateA[1] + ' ' + dateA[2] + ' ' + dateA[3];
                eventDate.innerHTML = dateArr;
                dateAndTime.innerHTML = request.result.date;
                eventLocation.innerHTML = request.result.eventLocation;
                console.log(request.result.date);


            } else {
                console.log('No data record');
            }
        };

        request.onerror = function (event) {
            console.log('Transaction failed');
        };



    }

}) 
console.log(eventImage);