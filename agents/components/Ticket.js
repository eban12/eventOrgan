const template = document.createElement('template');
template.innerHTML = `
<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
<style>
    .card {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #1d2636;
        border-bottom: 1px solid rgba(0,0,0,0.3);
        padding: 20px;
        margin-bottom: 15px;
        cursor: pointer;
    }

    .card:hover {
        box-shadow: -0.5px -0.5px 10px -3px rgba(0,0,0,0.3);
    }

    .info h2 {
        line-height: 10px;
    }

    i {
        font-size: 18px;
    }

    .info p {
        font-size: 13px;
        font-weight: 500;
        padding-left: 10px;
        line-height: 0;
        opacity: 0.7;
    }

    .info2 {
        display: flex;
        width: 30%;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
    }

</style>
<div class="card">
    <div class="info">
        <h2 id="name">ticketObj.name</h2>
        <p id="sellEnd">ticketObj.sellEnd</p>
    </div>
    <div class="info2">
        <div id="amount">ticketObj.amount</div>
        <div id="price">ticketObj.price</div>
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        <!-- <div class="menu">
            <ul>
                <li></li>
            </ul>
        </div> -->
    </div>
</div>
`


class Ticket extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'closed'}); 
    }

    connectedCallback() {
        const card = this.root.querySelector('.card'); 
        card.addEventListener('click', () => {
            console.log(card.getAttribute('data-ticket-id'));
        })
    }

    set ticketVals(ticketObj) {
        template.content.querySelector('#name').textContent = ticketObj.name;
        template.content.querySelector('#sellEnd').textContent = `Ends ${ticketObj.sellEnd} ${ticketObj.timeUnit} before event starts.`;
        template.content.querySelector('#amount').textContent = ticketObj.amount;
        template.content.querySelector('#price').textContent = ticketObj.price;
        template.content.querySelector('.card').setAttribute('data-ticket-id', ticketObj.id)
        this.root.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('ticket-component', Ticket);
