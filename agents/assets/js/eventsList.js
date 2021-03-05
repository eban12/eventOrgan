(function() {
    const tableBody = document.querySelector('.table-body');

    async function init() {
        let events = await db.events.where({agentId: Number(localStorage.getItem('userId'))}).toArray()
        console.log(events)
        events.forEach(event => {

            const eventCard = document.createElement('event-component');
            eventCard.event = event
            eventCard.style.cursor = "pointer"
            eventCard.addEventListener('click', () => {
                location.href = `event-dashboard.html?id=${event.id}`
            })
            tableBody.appendChild(eventCard)
        })
    }

    init()
})()