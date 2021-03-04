(function() {

    const form = document.querySelector('#create-event-form');
    function init () {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const event = {
                title: form["event-title"].value,
                category: form["event-category"].value,
                venue: getVenu(),
                startDate: form["start-date"].value,
                endDate: form["end-date"].value,
                startTime: form["start-time"].value,
                endTime: form["end-time"].value,
                image: "",
                description: "",
                agentId: 1,
                isPublished: false
            }

            let id = await db.events.add(event)
            location.href = `event-dashboard.html?id=${id}`
        })
        
        form.addEventListener('reset', () => {
            history.back()
        })
    }

    function getVenu() {
        if (form["venue"].checked) {
            return `${form["address-street"].value}, ${form["address-city"].value}, ${form["address-state"].value}, ${form["address-country"].value}`
        }
        
        if (form["online"].checked) {
            return "Online event"
        }

        return "Venue to be announced"
    }

    init();
})();