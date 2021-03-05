const template = document.createElement('template');

template.innerHTML = `
    <style>
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

        .card {
            background: #fff;
            cursor: pointer;
            height: 100%;
            width: 100%;
        }
        
        .card:hover {
            box-shadow: -1px 0px 10px 0px rgba(50, 50, 50, 0.2);
        }
        
        .event__image {
            width: 100%;
        }
        
        .card__body {
            padding: 15px;
            position: relative;
            padding-bottom: 20px;
        }
        
        .like__btn {
            background: #fff;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid rgb(192, 190, 190);
            font-size: 18px;
            display: block;
            margin-left: auto;
            z-index: 12;
            margin-top: -40px;
            margin-bottom: 10px;
            cursor: pointer;
        }

        .fa-heart {
            color: #d10707;
        }
        
        .like__btn:focus {
            outline: none;
        }
        
        .event__date {
            font-size: 14px;
            color: #ff4d28;
            padding: 5px 0;
        }
        
        .event__name {
            font-size: 18px;
            color: #06072cd0;
        }
    </style>


    <div class="card">
        <div class="card__header">
            <img src=""
                alt="" class="event__image">
        </div>
        <div class="card__body">
            <button class="like__btn"><i class="fa fa-heart-o" aria-hidden="true"></i></button>
            <h3 class="event__date"></h3>
            <h2 class="event__name" id="eventName"></h2>
        </div>
    </div>

`

class EventCard extends HTMLElement {
    // constructor() {
    //     super();
    //     this = this.attachShadow({mode: 'open'});
    // }

    connectedCallback() {
        const card = this.querySelector('.card');
        const likeBtn = this.querySelector('.like__btn');
        const likeIcon = this.querySelector('i');

        card.addEventListener('click', (e) => {
            if (!likeBtn.contains(e.target)) {
                const id = card.getAttribute('data-id');
                location.href = `/eventDetail.html?id=${id}`
            }
        });

        
        likeBtn.addEventListener('click', () => {
            likeIcon.classList.toggle('fa-heart-o');
            likeIcon.classList.toggle('fa-heart');
        })
    }

    set cardDetail(cardObj) {
        // console.log(cardObj);
        template.content.querySelector('.card').setAttribute('data-id', cardObj.id);
        template.content.querySelector('.event__image').setAttribute('src', cardObj.image || "https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg");
        template.content.querySelector('.event__date').textContent =  cardObj.date;
        template.content.querySelector('.event__name').textContent = cardObj.name;
        this.appendChild(template.content.cloneNode(true));    
    }
} 

customElements.define('event-card', EventCard);