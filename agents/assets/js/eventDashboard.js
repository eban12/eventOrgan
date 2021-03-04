(function () {
    const addTicketForm = document.querySelector('#add-ticket-form')
    const eventEditForm = document.querySelector('#even-edit-form')
    const address = document.querySelector('.address-form')
    const modal = document.querySelector('#add-ticket-modal')
    const imagePreview = document.querySelector("#event-image-preview")
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

      addTicketForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          let unit = addTicketForm["ticket-sell-end-timeunit"].value;
          const ticketVals = {
            id: 2,
            name: addTicketForm["ticket-name"].value,
            sellEnd: addTicketForm["ticket-sell-end"].value ,
            timeUnit: unit,
            amount: Number(addTicketForm["ticket-quantity"].value),
            price: Number(addTicketForm["ticket-price"].value),
          }
          addTicket(ticketVals);
          addTicketForm.reset();
          modal.style.display = 'none';
        })
    }
  
    async function loadEvent() {
      const urlParams = new URLSearchParams(window.location.search);
      const id = Number(urlParams.get("id"));

      const event = await db.events.get(id)
      console.log(event);

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
      }

      eventEditForm["start-date"].value = event.startDate
      eventEditForm["end-date"].value = event.endDate

      // setup details 
      eventEditForm["event-image"].value = event.image
      imagePreview.setAttribute('src', event.image || "https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg")
    
      // setup ckeditor
      editor.setData(event.description)
    }
  
    function addTicket(ticketObj) {
      const ticketList = document.querySelector('.tickets-list');
      const ticket = document.createElement('ticket-component');
      ticket.ticketVals = ticketObj;
      ticketList.appendChild(ticket);
    }
  
    init()
    
  })();