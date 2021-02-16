const filter = document.getElementById('searchBar'); //the task filter text field
const allLi = document.getElementsByTagName('li'); //I've used by TagName method to identify every collection-item
const form = document.querySelector('.add-event');
const eventTitle = document.querySelector('.event-title');
const eventDescription = document.querySelector('.event-description');
const eventList = document.querySelector('.cards-home');
const eventImage = document.querySelector('#eventImage');
const eventDetail = document.querySelector('.event-detail');
const ShowImageSource = document.getElementById('showImageSrc');
const eventLocation = document.querySelector('#eventLocation');

filter.addEventListener('keyup', filterTasks);

function filterTasks() {
    let key = document.getElementById('searchBar').value; //key now has the filtered value
    for (let i = 0; i < allLi.length; i++) {
        if ((new RegExp(key)).test(allLi[i].textContent)) {
            allLi[i].style.display = "";
        } else {
            allLi[i].style.display = "none";
        }
    }
}
let DB;

document.addEventListener('DOMContentLoaded', () => {
    if (!('indexedDB' in window)) {
        console.log('This browser doesn\'t support IndexedDB');
    }

    function displayEvents() {

        // eventList.innerHTML = "";
        // console.log(eventTitle.value, eventDescription.value);
        while (eventList.firstChild) {
            eventList.removeChild(eventList.firstChild);
        }
        let objectStore = DB.transaction('events').objectStore('events');
        objectStore.openCursor().onsuccess = function (event) {
            let cursor = event.target.result;
            if (cursor) {
                const li = document.createElement('li');
                const h4 = document.createElement('h4');
                const b = document.createElement('b');
                const link = document.createElement('a');
                const img = document.createElement('img');
                const date = document.createElement('p');
                const change = document.createElement('a');

                img.className = 'img-fluid';
                img.setAttribute('src', cursor.value.imageSource);
                // link.textContent = img;
                b.textContent = (eventTitle.value);
                b.style.padding = '0.3rem';
                li.className = 'card';
                li.setAttribute('event-id', cursor.value.id);
                date.appendChild(document.createTextNode(cursor.value.date));
                date.style.color = "#f00";
                date.style.fontSize = "0.9rem";
                date.style.fontWeight = 'bolder';
                date.style.paddingTop = '0.4rem';
                change.className = 'changeEvent';
                change.innerHTML = `<i class="fa fa-remove btn deleteEvent" id="deleteEvent"></i> <a href="edit.html?id=${cursor.value.id}"><i class="fa fa-edit btn"></i> </a>`;

                link.href = `event.html?id=${cursor.value.id}`;
                link.innerHTML = `<img src=${cursor.value.imageSource} class='img-fluid event-image'></img>`;
                li.appendChild(link);
                b.appendChild(document.createTextNode(cursor.value.eventTitle));
                li.appendChild(date);
                h4.appendChild(b);
                li.appendChild(b);
                li.appendChild(document.createTextNode(cursor.value.eventDescription));
                li.appendChild(change);
                li.style.padding = '0.2rem';
                eventList.appendChild(li);


                cursor.continue();
                // createDelete();
            }
        }
    }
    //Creating the Database
    let eventDB = window.indexedDB.open("eventOrganizer", 1);
    eventDB.onerror = function (event) {
        console.log("Error Opening Database.");
    }
    eventDB.onsuccess = function (event) {
        DB = eventDB.result;
        console.log("Database Opened Succesfully!");
        console.log(DB);
        displayEvents();
    }
    eventDB.onupgradeneeded = function (event) {
        DB = event.target.result;
        DB.onerror = function (event) {
            console.log("Error Loading Database.");
        }
        //Creating the objectStore as events (The whole data will be there)
        let store = DB.createObjectStore("events", {
            keyPath: 'id',
            autoIncrement: true
        });
        //Creating Index and allow duplicating Title and Image Source
        store.createIndex('eventTitle', 'imageSource', {
            unique: false
        });
        store.transaction.oncomplete = function (event) {
            console.log('Database is ready and fields are created.');
        }
    }
    form.addEventListener('submit', addNewEvent);


    //Deleting a single entry

    eventList.addEventListener('click', removeEvent);

    function removeEvent(e) {
        Number(e.target.parentElement.parentElement.getAttribute('event-id'));

        if (e.target.parentElement.classList.contains('changeEvent')) {
            if (confirm(`Are you sure you want to delete this event?`)) {
                // get the task id


                let taskID = Number(e.target.parentElement.parentElement.getAttribute('event-id'));
                let transaction = DB.transaction(['events'], 'readwrite');
                // use a transaction
                let objectStore = DB.transaction('events', 'readwrite').objectStore('events');
                objectStore.delete(taskID);

                transaction.oncomplete = () => {
                    e.target.parentElement.parentElement.remove();
                }

            }
        }
    }

    //A function to add new event
    function addNewEvent() {
        let newEvent = {
            eventTitle: eventTitle.value,
            eventDescription: eventDescription.value,
            date: new Date(),
            imageSource: eventImage.value,
            eventDetail: eventDetail.value,
            eventLocation: eventLocation.value
        }

        let transaction = DB.transaction(['events'], 'readwrite');
        let store = transaction.objectStore('events');
        let request = store.add(newEvent);

        request.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log("New Event Added.");
            displayEvents();
        }
        transaction.onerror = () => {
            console.log("Error Adding Event. Try Again.");
        }
    }
});