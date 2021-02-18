(function () {
    const addTicketForm = document.querySelector('#add-ticket-form');
    const modal = document.querySelector('#add-ticket-modal')
    // intializer: sets up everything that needs intialization including adding event listners
    function init() {
      ClassicEditor.create(document.querySelector("#editor")).catch((error) => {
          console.error(error);
        });

      addTicketForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          let unit = addTicketForm.elements["ticket-sell-end-timeunit"].value;
          const ticketVals = {
            id: 2,
            name: addTicketForm.elements["ticket-name"].value,
            sellEnd: addTicketForm.elements["ticket-sell-end"].value ,
            timeUnit: unit,
            amount: Number(addTicketForm.elements["ticket-quantity"].value),
            price: Number(addTicketForm.elements["ticket-price"].value),
          }
          addTicket(ticketVals);
          addTicketForm.reset();
          modal.style.display = 'none';
        })
    }
  
  
    function addTicket(ticketObj) {
      const ticketList = document.querySelector('.tickets-list');
      const ticket = document.createElement('ticket-component');
      ticket.ticketVals = ticketObj;
      ticketList.appendChild(ticket);
    }
  
    init()
  
    // for (let i = 0; i < 3; i++) {  
    //   ticketVals = {
    //     id: i,
    //     name: "General Admission",
    //     sellEnd: "Ends 1 hour before event end",
    //     amount: 78,
    //     price: 12.0,
    //   };
    //   ts.appendChild(a);
    // }
    
  })();