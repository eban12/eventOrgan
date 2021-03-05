const singleEvent = db.events;
console.log(singleEvent);
const link = window.location.href.split('?');
const linked = link[1].split('=');
const id = linked[1];

var singEv = {
};


console.log(singEv);

const background = document.querySelector('.event__detail-background');
const img = document.querySelector('.detail__side-1 img');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const title = document.querySelector('.detail__event-title');
const organizer = document.querySelector('.detail__organizer');
const price = document.querySelector('.detail__price');
const datTime = document.querySelector('.date-time');
const eventLocation = document.querySelector('.detail__location');
const footer = document.querySelector('.detail__footer');
const content = document.querySelector('.detail__body-side-1');

//background.style.background = `url(https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125073173%2F485586024857%2F1%2Foriginal.20210203-193029?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C58%2C5000%2C2500&s=66104b87a58c2572cab3b1cc16c5928e)`
//img.setAttribute('src', "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125073173%2F485586024857%2F1%2Foriginal.20210203-193029?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C58%2C5000%2C2500&s=66104b87a58c2572cab3b1cc16c5928e")
// month.textContent = "Mar"
// day.textContent = "05"
title.textContent = "MIT Sloan FinTech Conference 2021"
organizer.textContent = `by MIT FinTech Conference`
price.textContent = "$30 - $175"
// datTime.textContent = "Fri, Mar 5, 2021, 4:00 PM EAT"
eventLocation.textContent = "Online event"

// content.innerHTML = `
// <p style="text-align: center;"><span style="font-size: 60px; color: rgb(235, 107, 86);">Demo title</span></p>
// <p style="text-align: left;"><span style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">We&apos;re here to say that we don&apos;t always find the right way to study and get things done. How many times have we pulled all-nighters to hand in that paper/project or crammed last minute for that important maths exam? We thought so...</span><br style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><br style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">So this is for&nbsp;</span><b style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">you</b><span style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">! We post&nbsp;</span><a href="http://studying-hard.tumblr.com/tagged/pros" style="text-decoration: none; color: rgb(120, 120, 120); border-bottom: 1px solid rgb(120, 120, 120); padding-bottom: 1px; transition: all 150ms ease 0s; font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);">pro tips</a><span style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">&nbsp;whenever time allows us, as well as inspirational and helpful tips for your benefit. This blog is dedicated to learning the best way to learn and encouraging you all to&nbsp;</span><b style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">always move forward</b><span style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: -webkit-center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">. Please feel free to drop by the inbox anytime! Happy studying! :-)</span>&nbsp;</p>
// <p style="text-align: left;"><span style="color: rgb(120, 120, 120); font-family: Raleway, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: 0.666667px; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">life is just so much more fun when you let go of the things stopping you from LIVING! whether it be people, your own inner critic, your stress, life gets better when you let go of things/people that are bad for you. You can do this by physically removing yourself from bad situations or people or if it&rsquo;s an internal struggle, work on combatting it through therapy and positive self talk, one step at a time. I&rsquo;ve let go of family, friends, my own inner demons through years of practice to let go of dead weight. Convincing yourself to remain in a toxic situation because of convenience leads to years of regret and sadness. Self care is not only the superficial moisturising and face masks, self care is also recognising that you deserve better.</span> </p>
// `

footer.innerHTML = `
    <p>MIT FinTech Conference</p>
    <p>Organizer of MIT Sloan FinTech Conference 2021</p>
`
db.events.each(event =>{
    if(event["id"] == id){

        const a = event['startDate'].toString().split(' ');
        const b = a[0];
        const c = a[2]
        console.log(event);
        console.log(event['image']);
        singEv['image'] = event['image'];
        background.style.background = `url(${event['image']})`;
        img.setAttribute('src', `${event['image']}`);
        content.innerHTML = `
            <p style="text-align: center;"><span style="font-size: 60px; color: rgb(235, 107, 86);">${event['title']}</span></p><br>
            <p>
                ${event['description']}
            </p>`;
        month.textContent = `${b}`;
        day.textContent = `${c}`;
        datTime.textContent =  `${event['startDate']}`;
    }
});