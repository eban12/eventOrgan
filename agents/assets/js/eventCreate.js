(function() {

    const form = document.querySelector('#create-event-form');
    function init () {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            location.href = "event-dashboard.html"

        })
        
        form.addEventListener('reset', () => {
            history.back();
        })
    }

    init();
})();