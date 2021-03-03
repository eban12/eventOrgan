class Event extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'closed'});
    }

    set event(eventObj) {
        this.root.innerHTML = `

            <style>
                .event-container {
                    display: flex;
                    list-style: none;
                    padding: 20px;
                    margin: 0;
                    align-items: center;
                    border-bottom: solid 1px #eee;
                }

                .event-container:hover {
                    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1);
                }

                li {
                    margin-left: 11%;
                }

                .event-li {
                    display: flex;
                    width: 40%;
                    align-items: center;
                    margin: 0;
                }

                img {
                    width: 60px;
                    height: 60px;
                    margin: 0 10px;
                }

                p {
                    margin: 0;
                    font-size: 13px;
                    color: #6e7b91;
                }

                .date {
                    padding-right: 10px;
                    text-align: center;
                }

                .date p {
                    font-size: 15px;
                }

                .month {
                    color: #db304a;
                    margin-bottom: 3px;
                }

                .date .day {
                    font-weight: 700;
                    font-size: 18px;
                }

                .detail {
                    margin-left: 10px;
                }


                .detail p {
                    margin-bottom: 3px;
                }

                .darker {
                    color: #38465e;
                    font-size: 14px;
                    padding: 5px 0;
                }

                .status {
                    font-size: 15px;
                }
            </style>

            <ul class="event-container">
                <li class="event-li">
                    <div class="date">
                        <p class="month">${eventObj.date.toLocaleString('default', { month: 'short' })}</p>
                        <p class="day">${eventObj.date.getDate()}</p>
                    </div>

                    <img src=${eventObj.img}>
                    <div class="detail">
                        <p class="darker">${eventObj.title}</p>
                        <p class="venue">${eventObj.venue}</p>
                        <p class="event-date">${eventObj.date}</p>
                        <p class="darker">${eventObj.type}</p>
                    </div>
                </li>
                <li><p>${eventObj.sold ? eventObj.sold: '----'}</p></li>
                <li><p>${eventObj.gross ? eventObj.gross: '----'}</p></li>
                <li><p class="status">${eventObj.status}</p></li>
            </ul>
        `
    }
}


customElements.define('event-component', Event);
