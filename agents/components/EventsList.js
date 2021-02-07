import './Event-component.js';

const template = document.createElement("template");
template.innerHTML = `
    <head>
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    </head>
    <style>
        .title-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #1d2636;
        }

        .title-section button {
            padding: 10px 25px;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: 500;
            background: #db1634;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        .title-section button:hover {
            background: #db304a;
        }

        .title-section button:focus {
            outline: none;
        }

        .filter-section {
            display: flex;
            width: 100%;
            margin-top: 15px;
        }

        .search-bar {
            width: 45%;
            border: solid 1px #d0d0d0;
            border-radius: 3px;
            padding: 5px 15px;
            color: #0f1e38;
            font-size: 18px;
            display: flex;
            align-items: center;
        }

        #search-input {
            width: 90%;
            margin-left: 10px;
            padding: 10px;
            border: none;
            font-size: 15px;
        }

        #search-input:focus {
            outline: none;
        }

        .option-bar {
            width: 30%;
            border: solid 1px #d0d0d0;
            border-radius: 3px;
            margin-left: 15px;
            padding: 5px 15px;
            color: gray;
        }

        .option-bar h3 {
            font-size: 14px;
            font-weight: 400;
            margin: 0;
            padding: 0;
        }

        .option-input {
            width: 100%;
            color: gray;
            padding: 3px 0;
            border: none;
        }

        .table-header {
            display: flex;
            list-style: none;
            font-size: 15px;
            font-weight: 500;
            background: #f2f3f5;
            color: #38465e;
            padding: 20px;
            margin-top: 40px;
            margin-bottom: 0;
        }

        li {
            margin-left: 10%;
        }
        .event {
            width: 40%;
            margin: 0;
        }
    </style>

    <div>
        <section class="title-section">
            <h1>Events</h1>
            <button>Create Event</button>
        </section>
        
        <section class="filter-section">
            <div class="search-bar">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search events" id="search-input"/>
            </div>
            <div class="option-bar">
                <h3>Filter by</h3>
                <select class="option-input">
                    <option>All</option>
                    <option>Published</option>
                    <option>Draft</option>
                </select>
            </div>
        </section>

        <section class="table">
            <ul class="table-header">
                <li class="event">Event</li>
                <li>Sold</li>
                <li>Gross</li>
                <li>Status</li>
            </ul>
            <div class="table-body"></div>
        </section>
    </div>
`

class Events extends HTMLElement {
    constructor() {
        super();
        
        const tableBody = template.content.querySelector('.table-body');
        const event = document.createElement('event-component');
        event.event = {
            title: "Test",
            date: new Date(),
            type: "Multiple dates",
            venue: "Online event",
            status: "Draft",
            img: "assets/img/no-event-image-placeholder-2x.png"
        }

        tableBody.appendChild(event);
        const event2 = document.createElement('event-component');
        event2.event = {
            title: "Test",
            date: new Date(),
            type: "Multiple dates",
            venue: "Online event",
            status: "Draft",
            img: "assets/img/no-event-image-placeholder-2x.png"
        }

        tableBody.appendChild(event2);
    }

    connectedCallback() {
        const root = this.attachShadow({mode: "closed"});
        root.appendChild(template.content);
    }
}

customElements.define("events-list", Events);
export default Events;