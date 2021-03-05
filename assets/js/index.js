import "./Event-Card.js";
const eventsContainer = document.querySelector('.events_container');

const events = db.events;

//just demo events you can add
const demoEvent = {
    'title':'title',
    'category':'category',
    'venue':'venue',
    'startDate': new Date(),
    'endDate':'endDate',
    'startTime':'startTime',
    'endTime':'endTime',
    'image':'https://total-event.com/wp-content/uploads/2018/01/event-planning-microsoft-ignite.jpg',
    'description':'We&apos;re here to say that we don&apos;t always find the right way to study and get things done. How many times have we pulled all-nighters to hand in that paper/project or crammed last minute for that important maths exam? We thought so...</span><br style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><br style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">So this is for&nbsp;</span><b style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">you</b><span style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">! We post&nbsp;</span><a href="http://studying-hard.tumblr.com/tagged/pros" style="text-decoration: none; color: rgb(120, 120, 120); border-bottom: 1px solid rgb(120, 120, 120); padding-bottom: 1px; transition: all 150ms ease 0s; font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);">pro tips</a><span style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">&nbsp;whenever time allows us, as well as inspirational and helpful tips for your benefit. This blog is dedicated to learning the best way to learn and encouraging you all to&nbsp;</span><b style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">always move forward</b><span style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">. Please feel free to drop by the inbox anytime! Happy studying! :-) <br><br>life is just so much more fun when you let go of the things stopping you from LIVING! whether it be people, your own inner critic, your stress, life gets better when you let go of things/people that are bad for you. You can do this by physically removing yourself from bad situations or people or if it&rsquo;s an internal struggle, work on combatting it through therapy and positive self talk, one step at a time. I&rsquo;ve let go of family, friends, my own inner demons through years of practice to let go of dead weight. Convincing yourself to remain in a toxic situation because of convenience leads to years of regret and sadness. Self care is not only the superficial moisturising and face masks, self care is also recognising that you deserve better.',
    'agentId':'agentId',
    'isPublished': true
}

function addEvent(dem) {
    events.put(dem).then(function () {
        console.log('Event added succesfully.');
    }).catch(function (error) {
        alert("Error: " + error);
    });
}

// adding demo events to display
addEvent(demoEvent);

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
