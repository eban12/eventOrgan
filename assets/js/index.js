import "./Event-Card.js";
const eventsContainer = document.querySelector('.events_container');


const events = db.events;
const demoArray = {
    "username": "username",
    "events": 'events',
    'tickets':'tickets',
    'orders':'orders'
}
const demoEvent = {
    'title':'title',
    'category':'category',
    'venue':'venue',
    'startDate':'startDate',
    'endDate':'endDate',
    'startTime':'startTime',
    'endTime':'endTime',
    'image':'https://total-event.com/wp-content/uploads/2018/01/event-planning-microsoft-ignite.jpg',
    'description':'description',
    'agentId':'agentId',
    'isPublished': true
}
const demoEvent2 = {
    'title':'title',
    'category':'category',
    'venue':'venue',
    'startDate':'startDate',
    'endDate':'endDate',
    'startTime':'startTime',
    'endTime':'endTime',
    'image':'https://learn.g2crowd.com/hubfs/action-adults-celebration-433452.jpg',
    'description':'description',
    'agentId':'agentId',
    'isPublished': true
}

function addEvent(demoEvent) {
    events.put(demoEvent).then(function () {
        console.log('Event added succesfully.');
    }).catch(function (error) {
        alert("Error: " + error);
    });
}
addEvent(demoEvent);
// addEvent(demoEvent2);

if (eventsContainer) {
    for (let i = 0; i < 20; i++) {
        const card = document.createElement('event-card');
        card.cardDetail = {
            id: i,
            image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F121266491%2F432371562%2F1%2Foriginal.20201218-151931?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C39%2C638%2C319&s=0fc256519813a21445e49e8287923839",
            name: "A Matter of Death and Life - Irvin Yalom",
            date: "Tue, 9 March 2021"
        }
        eventsContainer.appendChild(card);
    }
}
