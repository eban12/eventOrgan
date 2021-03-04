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

background.style.background = `url(https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125073173%2F485586024857%2F1%2Foriginal.20210203-193029?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C58%2C5000%2C2500&s=66104b87a58c2572cab3b1cc16c5928e)`
img.setAttribute('src', "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125073173%2F485586024857%2F1%2Foriginal.20210203-193029?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C58%2C5000%2C2500&s=66104b87a58c2572cab3b1cc16c5928e")
month.textContent = "Mar"
day.textContent = "05"
title.textContent = "MIT Sloan FinTech Conference 2021"
organizer.textContent = `by MIT FinTech Conference`
price.textContent = "$30 - $175"
datTime.textContent = "Fri, Mar 5, 2021, 4:00 PM EAT"
eventLocation.textContent = "Online event"

footer.innerHTML = `
    <p>MIT FinTech Conference</p>
    <p>Organizer of MIT Sloan FinTech Conference 2021</p>
`
