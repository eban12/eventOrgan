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

        button a {
            color: #fff;
            text-decoration: none;
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

        select-component {
            width: 30%;
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
            <button><a href="create-event.html">Create Event</a></button>
        </section>
        
        <section class="filter-section">
            <div class="search-bar">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search events" id="search-input"/>
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

        const opts = document.createElement('select-component');
        opts.options = [{value: 1, name: "All"}, {value: 2, name: "Published"}, {value: 3, name: "Draft"}]
        template.content.querySelector('.filter-section').appendChild(opts);
    }

    connectedCallback() {
        const root = this.attachShadow({mode: "closed"});
        root.appendChild(template.content);
    }
}

customElements.define("events-list", Events);
export default Events;