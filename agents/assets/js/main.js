import "../../components/Header.js";
import "../../components/EventsList.js";
import "../../components/Select-component.js";
import "../../components/Ticket.js";

ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .catch( error => {
        console.error( error );
    } );

let ts = document.querySelector('.tickets-list');
for (let i = 0; i < 3; i++) {
    let a = document.createElement('ticket-component');

    a.ticketVals = {
        id: i,
        name: 'General Admission',
        sellEnd: 'Ends 1 hour before event end',
        amount: 78,
        price: 12.00,
    }
    ts.appendChild(a);
}
