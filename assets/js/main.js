import './Event-Card.js';

// const main = document.querySelector('.event__list');
// const cards = [
//     {
//         id: 1,
//         date: "Fri, Mar 5, 2021 4:00 PM EAT",
//         name: "MIT Sloan FinTech Conference 2021",
//         image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125073173%2F485586024857%2F1%2Foriginal.20210203-193029?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C58%2C5000%2C2500&s=66104b87a58c2572cab3b1cc16c5928e"
//     },
//     {
//         id: 2,
//         date: "Wed, Feb 24, 2021 8:00 PM EAT",
//         name: "Dame Judi Dench in Conversation",
//         image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F123802871%2F89753492095%2F1%2Foriginal.20210121-154211?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1040%2C2248%2C1124&s=1cb52af192705fd3c1db51b6a4079283"
//     },
//     {
//         id: 3,
//         date: "Sat, Feb 20, 2021 7:00 PM EAT",
//         name: "Daybreaker LIVE // A Joy Supreme: Dancing to Motown Magic",
//         image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F123821549%2F162648120486%2F1%2Foriginal.20210121-181029?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C5444%2C2722&s=45019de2d67c2f3fcb9e3fbbd5731c6c"
//     },
//     {
//         id: 4,
//         date: "Sat, Mar 6, 2021 6:00 AM EAT + 3 more events",
//         name: "Comedy Crossing: The Animal Crossing Standup Comedy Show",
//         image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102937900%2F34743739568%2F1%2Foriginal.20200608-063252?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C91%2C400%2C200&s=547fad629624025e15ca0b9c18762f57"
//     }

// ]
// for (let card of cards) {
//     const card_el = document.createElement('event-card');
//     card_el.cardDetail = card;
//     main.appendChild(card_el);
// }

document.querySelectorAll('.intersets__card .btn__checkbox').forEach(el => {
    el.addEventListener('click', (e) => {
        console.log(e.target.parentElement.firstElementChild.checked);
        el.classList.toggle('interest__selected')
    })
});
