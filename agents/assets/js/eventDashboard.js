(function () {
    const addTicketForm = document.querySelector('#add-ticket-form')
    const eventEditForm = document.querySelector('#even-edit-form')
    const address = document.querySelector('.address-form')
    const modal = document.querySelector('#add-ticket-modal')
    const imagePreview = document.querySelector("#event-image-preview")
    const ticketList = document.querySelector('.tickets-list');
    const ticketBtn = addTicketForm.querySelector('button')
    const dashboardTitle = document.querySelector('.event-dashboard__event-title')
    const publishBtn = document.querySelector('#publish')
    const addTicketButton = document.querySelector('#addTicket')
    const DEFAULT_IMAGE = "https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg"
    let EVENT;
    let editor;
    // intializer: sets up everything that needs intialization including adding event listners
    function init() {
      ClassicEditor.create(document.querySelector("#editor"))
        .then(ed => {
          editor = ed
          console.log(ed.setData)
        })
        .catch((error) => {
          console.error(error);
        });

      loadEvent()  

      addTicketForm.addEventListener('submit', async (e) => {
          e.preventDefault();

          let unit = addTicketForm["ticket-sell-end-timeunit"].value;
          const ticketVals = {
            title: addTicketForm["ticket-name"].value,
            eventId: EVENT.id,
            endTime: addTicketForm["ticket-sell-end"].value,
            timeUnit: unit,
            quantity: Number(addTicketForm["ticket-quantity"].value),
            price: Number(addTicketForm["ticket-price"].value),
          }


          if (ticketBtn.getAttribute('data-ticketId') === "0") {
            const res = await db.tickets.add(ticketVals)
          } else {
            ticketVals.id = Number(ticketBtn.getAttribute('data-ticketId'))
            await db.tickets.put(ticketVals)
          }
          loadTickets()
          ticketBtn.innerHTML = "Add"
          ticketBtn.setAttribute('data-ticketId', "")

          addTicketForm.reset();
          modal.style.display = 'none';
        })

        eventEditForm["event-image"].addEventListener('change', (e) => {
          imagePreview.setAttribute('src', e.target.value || DEFAULT_IMAGE)
        })

        eventEditForm.addEventListener('submit', (e) => {
          e.preventDefault()
          saveEvent()
          location.reload()
        })

        eventEditForm.addEventListener('reset', (e) => {
          loadEvent()
        })

        publishBtn.addEventListener('click', async () => {
          if (EVENT.isPublished) {
            EVENT.isPublished = false
            let a = await db.events.put(EVENT)
            console.log(publishBtn, EVENT.isPublished)
            publishBtn.innerHTML = "Publish"
          } else {
            EVENT.isPublished = true
            let a = await db.events.put(EVENT)
            console.log(publishBtn)
            publishBtn.innerHTML = "Unpublish"
          }
        })

        addTicketButton.addEventListener('click', (e) => {
          ticketBtn.setAttribute('data-ticketId', "0")
        }) 
    }
  
    async function loadEvent() {
      const urlParams = new URLSearchParams(window.location.search);
      const id = Number(urlParams.get("id"));

      const event = await db.events.get(id)

      // published 
      EVENT = event

      // event title setup
      dashboardTitle.innerHTML = `
        ${EVENT.title}
        <div class="event-dashboard__event-type">
            ${EVENT.endDate === "" ? 'Single event': '<i class="fa fa-repeat" aria-hidden="true"></i> Recurring event'}
        </div>
      `

      // publishe or not
      if (!EVENT.isPublished) {
        publishBtn.innerHTML = "Publish"
      } else {
        publishBtn.innerHTML = "Unpublish"
      }

      // setup title and category
      eventEditForm["event-title"].value = event.title
      eventEditForm["event-category"].value = event.category

      // setup the venue
      if (event.venue === "Online event") {
        eventEditForm["online"].checked = true
        eventEditForm["online"].parentElement.classList.add('active-radio')
        eventEditForm["venue"].parentElement.classList.remove('active-radio')
        eventEditForm["announce"].parentElement.classList.remove('active-radio')
        address.style.display = "none"
      } else if (event.venue === "Venue to be announced") {
        eventEditForm["announce"].checked = true
        eventEditForm["announce"].parentElement.classList.add('active-radio')
        eventEditForm["online"].parentElement.classList.remove('active-radio')
        eventEditForm["venue"].parentElement.classList.remove('active-radio')
        address.style.display = "none"
      } else {
        eventEditForm["venue"].checked = true
        eventEditForm["venue"].parentElement.classList.add('active-radio')
        eventEditForm["online"].parentElement.classList.remove('active-radio')
        eventEditForm["announce"].parentElement.classList.remove('active-radio')

        let ad = event.venue.split(',')
        eventEditForm["address-street"].value = ad[0]
        eventEditForm["address-city"].value = ad[1]
        eventEditForm["address-state"].value = ad[2]
        eventEditForm["address-country"].value = ad[3]
      }

      // setup date 
      if (event.endDate === "") {
        eventEditForm["single"].checked = true
        eventEditForm["single"].parentElement.classList.add('active-radio')
        eventEditForm["multiple"].parentElement.classList.remove('active-radio')
      } else {
        eventEditForm["multiple"].checked = true
        eventEditForm["multiple"].parentElement.classList.add('active-radio')
        eventEditForm["single"].parentElement.classList.remove('active-radio')
        eventEditForm["end-date"].disabled = false
      }

      eventEditForm["start-date"].value = event.startDate
      eventEditForm["end-date"].value = event.endDate
      eventEditForm["start-time"].value = event.startTime
      eventEditForm["end-time"].value = event.endTime

      // setup details 
      eventEditForm["event-image"].value = event.image
      imagePreview.setAttribute('src', event.image || DEFAULT_IMAGE)
    
      // setup ckeditor
      editor.setData(event.description)

      // setup tickets
      loadTickets()
    }
  
    async function loadTickets() {
      ticketList.innerHTML = ""
      let tickets = await db.tickets.where({eventId: EVENT.id}).toArray()
      tickets.forEach(ticket => {
        addTicket(ticket)
      });
    }

    function addTicket(ticketObj) {
      const ticket = document.createElement('ticket-component');
      ticket.setAttribute('data-id', ticketObj.id)
      ticket.addEventListener('click', () => {
        addTicketForm["ticket-name"].value = ticketObj.title
        addTicketForm["ticket-sell-end-timeunit"].value = ticketObj.timeUnit 
        addTicketForm["ticket-sell-end"].value = ticketObj.endTime
        addTicketForm["ticket-quantity"].value = ticketObj.quantity
        addTicketForm["ticket-price"].value = ticketObj.price

        ticketBtn.innerHTML = "Save"
        ticketBtn.setAttribute('data-ticketId', ticketObj.id)

        modal.style.display = "flex"
      })
      ticket.ticketVals = ticketObj;
      ticketList.appendChild(ticket);
    }

    async function saveEvent() {
          EVENT.title = eventEditForm["event-title"].value
          EVENT.category = eventEditForm["event-category"].value
          EVENT.venue = getVenue()
          EVENT.startDate = eventEditForm["start-date"].value
          EVENT.endDate = eventEditForm["end-date"].value
          EVENT.startTime = eventEditForm["start-time"].value
          EVENT.endTime = eventEditForm["end-time"].value
          EVENT.image = eventEditForm["event-image"].value
          EVENT.description = editor.getData()

          const k = await db.events.put(EVENT)
          console.log(k);
    }
  
      function getVenue() {
        if (eventEditForm["venue"].checked) {
            return `${eventEditForm["address-street"].value}, ${eventEditForm["address-city"].value}, ${eventEditForm["address-state"].value}, ${eventEditForm["address-country"].value}`
        }
        
        if (eventEditForm["online"].checked) {
            return "Online event"
        }

        return "Venue to be announced"
      }

    init()
    
  })();