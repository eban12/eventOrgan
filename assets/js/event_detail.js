const singleEvent = db.events;


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
const DEFAULT_IMAGE = "https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg"
const modalBody = document.querySelector('.modal-body');

function getMonthName(month) {
    switch(month) {
        case "01": 
            return'Jan'
        case "02":
            return 'Feb'
        case "03":
           return'Mar'
        case "04":
           return'Apr'
        case "05":
           return'May'
        case "06":
           return'Jun'
        case "07":
           return'Jul'
        case "08":
           return'Aug'
        case "09":
           return'Sep'
        case "10":
           return'Oct'
        case "11":
           return'Nov'
        default:
           return 'Dec'
    }
}

function loadTickets(tickets) {
    console.log(tickets)
    tickets.forEach(ticket => {
        if (ticket.quantity > 0) {
            let div = document.createElement('div')
            div.classList.add('form-check')
            div.innerHTML =`
                <input class="form-check-input" type="checkbox" value="${ticket.id}" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    ${ticket.title}, price: ${ticket.price}$, ${ticket.endTime} 
                </label>
            `
        }
    })
}

async function loadEvent() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = Number(urlParams.get("id"));
        const event = await db.events.get(id);
        let [y, m, d] = event.startDate.split("-");
        const agent = await db.users.get(event.agentId)

        background.style.background = `url(${event.image || DEFAULT_IMAGE})`
        img.setAttribute('src', event.image || DEFAULT_IMAGE)
        month.textContent = getMonthName(month)
        day.textContent = d
        title.textContent = event.title
        organizer.textContent = `by ${agent.username}`
        price.textContent = "$30 - $175"
        datTime.textContent = `${event.startDate}, ${event.startTime}`
        eventLocation.textContent = event.venue
    
        content.innerHTML = event.description || '<h1 style="text-align: center">No Description</h1>'
        footer.innerHTML = `
            <p>${agent.username}</p>
            <p>Organizer of ${event.title}</p>
        `


        const tickets = await db.tickets.where({eventId: event.id}).toArray()
        modalBody.innerHTML = tickets.length != 0 ? loadTickets(tickets): '<p style="text-align: center">No tickets available</p>'
    }

loadEvent()
