import "./Event-Card.js";
const eventsContainer = document.querySelector('.events_container');

const events = db.events;

//just demo events you can add
const demoEvent = {
    demoEvent1 : {
        'title':'title',
        'category':'category',
        'venue':'venue',
        'startDate': new Date(),
        'endDate':'endDate',
        'startTime':'startTime',
        'endTime':'endTime',
        'image':'https://total-event.com/wp-content/uploads/2018/01/event-planning-microsoft-ignite.jpg',
        'description':'description',
        'agentId':'agentId',
        'isPublished': true
    },
    demoEvent2 : {
        'title':'title',
        'category':'category',
        'venue':'venue',
        'startDate': new Date(),
        'endDate':'endDate',
        'startTime':'startTime',
        'endTime':'endTime',
        'image':'https://learn.g2crowd.com/hubfs/action-adults-celebration-433452.jpg',
        'description':'description',
        'agentId':'agentId',
        'isPublished': true
    },
    demoEvent3 : {
        'title':'title',
        'category':'category',
        'venue':'venue',
        'startDate': new Date(),
        'endDate':'endDate',
        'startTime':'startTime',
        'endTime':'endTime',
        'image':'https://zongo.io/blog/wp-content/uploads/2018/11/ev.jpg',
        'description':'description',
        'agentId':'agentId',
        'isPublished': true
    },
    demoEvent4 : {
        'title':'title',
        'category':'category',
        'venue':'venue',
        'startDate': new Date(),
        'endDate':'endDate',
        'startTime':'startTime',
        'endTime':'endTime',
        'image':'https://www.umthunzi.co.za/2016/wp-content/uploads/2017/10/fotolia_169065284.jpg',
        'description':'description',
        'agentId':'agentId',
        'isPublished': true
    }
}

function addEvent(demoEvent) {
    events.put(demoEvent).then(function () {
        console.log('Event added succesfully.');
    }).catch(function (error) {
        alert("Error: " + error);
    });
}

// adding demo events to display
addEvent(demoEvent.demoEvent1);
addEvent(demoEvent.demoEvent2);
addEvent(demoEvent.demoEvent3);
addEvent(demoEvent.demoEvent4);

if (eventsContainer) {
    db.events.each(event =>{
        const card = document.createElement('event-card');
        card.cardDetail = {
            id: event["id"],
            image: event["image"],
            name: event["title"],
            date: event["startDate"]
        }
        eventsContainer.appendChild(card);
    });
}
