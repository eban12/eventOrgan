const headerTemplate = document.querySelector('.main');
headerTemplate.innerHTML = `
  <style>
    body{
        background: #eee;

    }
  #bodycontainer {
    background: #eee;
}

#ticketcontainer {
    width: 80%;
    height: 10rem;
    box-shadow: 0 0 8px o rgba(50, 50, 50, 0.2);
    transition: 0.3s;
    margin-bottom: 2%;
    margin-top: 0%;
    background: white;
}

#ticketcontainer {
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.18);
    transition: 0.4s;
    align-self: center;
}

#ticket-img {
    width: 15rem;
    height: 10rem;
    margin-left: -14px;
}

h6 {
    margin-top: -20;
    color: #ff4d28;
}

#addtcurt {
    background: #ff4d28;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.18);
    transition: 0.4s;
    margin-left: 26rem;
    margin-top: 4rem;
}

#icon {
    background: rgb(177, 175, 175);
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    margin-left: 30rem;
    margin-top: -2rem;
}

#fd {
    color: #ff4d28;
    /* margin-bottom: -2rem; */
    /* margin-left: 1rem; */
    /* margin-top: -5rem; */
}

#FormControlSelect {
    width: 4rem;
    height: 2rem;
}


@media (max-width: 320px) {
    #ticketcontainer {
        width: 100%;
        height: 10rem;
       
        background: white;
    }
    #ticket-img {
        width: 9rem;
        height: 10rem;
    }
    h6 {
        margin-top: 0px;
        color: #ff4d28;
        font-size:10px
    }
    
    #addtcurt {
        background: #ff4d28;
        color: white;
       
    }
    
    #icon {
        background: rgb(177, 175, 175);
        
    }
    
    #fd {
        color: #ff4d28;
       
    }
    
    
    

}





















  </style>
  <div id="bodycontainer">
        <h5>Ticket</h5>
        <div class="container">
            <div class="row" id="ticketcontainer">
                <div class="ticketImage col-md-4 ">
                    <img class="img-responsive" src="./assets/img/timon-klauser-3MAmj1ZKSZA-unsplash.jpg" alt="" id="ticket-img">
                </div>
                <div class="ticketcontent col-md-8 mt-3">
                    <h5>Event Title</h5>
                    <h6>February 16 2021</h6>

                    <!-- <button id="addtcurt"><i class="fa fa-cart-arrow-down"></i> Add to Curt</button> -->
                    <div class="row">
                        <div class="col-md-4 mb-2">Ticket type
                            <div><i class="fa fa-star" id="fd"></i> VIP</div>
                        </div>
                        <div class="col-md-4 mb-2">Price
                            <div><i class="fa fa-dollar" id="fd"></i> Price</div>
                        </div>
                        <div class="col-md-4 mb-2">Amount
                            <div>
                                2
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
`;

class Ticket extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Ticket);