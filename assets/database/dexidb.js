//to check the add event we have to create an event object here
var demoEvent = {
    'eventTitle': 'Demo Event One',
    'eventOrganizer': 'Jorka',
    'eventType': 'Event Type',
    'eventCategory': 'Some Event Category',
    'eventTags': 'An event Tag',
    'eventLocation': 'Online Event', 
    'eventStarts': 'starting date',
    'eventTime': 'starting time',
    'eventEnds': 'ending date',
    'endTime': 'end time',
    'mainEventImage': 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    'summery': 'a required summery',
    'description': 'event\'s description goes here'    
}
//to check for the update we have to create another object
var demoEvent2 = {
    'eventTitle': 'Demo Event Two',
    'eventOrganizer': 'Jorka 2',
    'eventType': 'Event Type 2',
    'eventCategory': 'Some Event Category',
    'eventTags': 'An event Tag',
    'eventLocation': 'Online Event', 
    'eventStarts': 'starting date',
    'eventTime': 'starting time',
    'eventEnds': 'ending date',
    'endTime': 'end time',
    'mainEventImage': 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    'summery': 'a required summery',
    'description': 'event\'s description goes here'    
}

//this is the ticket's demo
var demoTicket = {
    'ticketName': 'Demo Ticket',
    'availableQuantity': '2',
    'price': '45', //in dollars ;)
    'startDate': 'any day',
    'startTime': 'any time',
    'salesEnd': 'any date',
    'endTime': 'any time'
}

//another ticket
var VIP = {
    'ticketName': 'VIP Demo Ticket',
    'availableQuantity': '5',
    'price': '70', //in dollars ;)
    'startDate': 'any day',
    'startTime': 'any time',
    'salesEnd': 'any date',
    'endTime': 'any time'
}


//creating the database
var db = new Dexie("eventOrganizer");
db.version(1).stores({
    events: '++id, eventTitle',//this is the event objectStore
    tickets: 'ticketName, ticketName'//this is the tickets objectStore
});

//This is the function to add event
function addEvent(demoArray) {
    db.events.put({
        eventTitle: demoArray['eventTitle'],
        eventOrganizer: demoArray['eventOrganizer'],
        eventType: demoArray['eventType'],
        eventCategory: demoArray['eventCategory'],
        eventTags: demoArray['eventTags'],
        eventLocation: demoArray['eventLocation'],
        eventStarts: demoArray['eventStarts'],
        startTime: demoArray['startTime'],
        eventEnds: demoArray['eventEnds'],
        endTime: demoArray['endTime'],
        mainEventImage: demoArray['mainEventImage'],
        summery: demoArray['summery'],
        description: demoArray['description']

    }).then(function () {
        console.log('Event added succesfully.');
    }).catch(function (error) {
        alert("Error: " + error);
    });
}

//This is a function for updating the event
function updateEvent(key, change) {
    db.events.update(key, change).then(function (updated) {
        if (updated) {
            console.log('Updated succesfully.');
        } else {
            console.log(`There was no event with primary key: ${key}.`);
        }
    })
}

//this function will delete whole database
function deleteDatabase() {
    db.delete().then(() => {
        console.log("Database successfully deleted");
    }).catch((err) => {
        console.error("Could not delete database");
    }).finally(() => {
        // Incase you want to do something here ...
    });
}

//this function will delete a single table by event id
function deleteEvent(eventID){
    db.events.delete(eventID);
    console.log('Event deleted succesfully');
}

//Ticket Table
//An event with same id could have different tickets the primary key is the ticket name
function addTicket(eventID, ticketArray){
    db.tickets.put({
        eventID: eventID,
        ticketName: ticketArray['ticketName'],
        availableQuality: ticketArray['availableQuantity'],
        price: ticketArray['price'],
        startDate: ticketArray['startDate'],
        startTime: ticketArray['startTime'],
        salesEnd: ticketArray['salesEnd'],
        endTime: ticketArray['endTime']
    }).then(function () {
        console.log('Ticket added succesfully.');
    }).catch(function (error) {
        alert("Error: " + error);
    });
}
// //functions
// addEvent(demoEvent);
// addEvent(demoEvent2);
// updateEvent(2, demoEvent);
// deleteEvent(2);
// addTicket(1, demoTicket);
// addTicket(1, VIP);
// deleteDatabase();
