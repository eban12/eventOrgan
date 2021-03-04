class Event extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'closed'});
    }

    getMonthName(month) {
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
                        <p class="month">${this.getMonthName(eventObj.startDate.split('-')[1])}</p>
                        <p class="day">${eventObj.startDate.split('-')[2]}</p>
                    </div>

                    <img src=${eventObj.image || "https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg"}>
                    <div class="detail">
                        <p class="darker">${eventObj.title}</p>
                        <p class="venue">${eventObj.venue}</p>
                        <p class="event-date">${eventObj.startDate}</p>
                        <p class="darker">${eventObj.category}</p>
                    </div>
                </li>
                <li><p>${eventObj.sold ? eventObj.sold: '----'}</p></li>
                <li><p>${eventObj.gross ? eventObj.gross: '----'}</p></li>
                <li><p class="status">${eventObj.isPublished ? "Published": "Draft"}</p></li>
            </ul>
        `
    }
}


customElements.define('event-component', Event);
