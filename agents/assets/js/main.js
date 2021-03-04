import "../../components/Header.js";
import "../../components/EventsList.js";
import "../../components/Ticket.js";

(function () {

    function init() {
        // add click listner to all modal trigers 
        document.querySelectorAll(".modal-triger").forEach((el) => {
            el.addEventListener("click", () => {
              const target = document.querySelector(
                `#${el.getAttribute("data-target")}`
              );
              target.style.display = "flex";
            });
          });
        
          // add click listner to all modals
          document.querySelectorAll(".modal").forEach((modal) => {
            modal.addEventListener("click", (e) => {
              if (!modal.querySelector(".modal__content").contains(e.target)) {
                modal.style.display = "none";
              }
            });
          });


          document.querySelectorAll('.btn-radio').forEach(el => {
            el.addEventListener('change', () => {
              const radios = el.parentElement.parentElement;
              const prev = radios.querySelector('.active-radio');
              const venue = document.querySelector('#venue');
              const addressForm = document.querySelector('.address-form');
              const endDate = document.querySelector('#end-date');
              const singleEvent = document.querySelector('#single');

              prev.classList.remove('active-radio');
              el.parentElement.classList.add('active-radio');

              if (el === venue) {
                addressForm.style.display = 'flex';
              } else if (addressForm.parentElement === radios.parentElement) {
                addressForm.style.display = 'none';
              }

              if (el === singleEvent) {
                endDate.disabled = true;
                endDate.value = "";
              } else if (radios.parentElement.contains(endDate)) {
                endDate.disabled = false;
              }

            });
          });

          document.querySelectorAll('.dashboard-menu__triger').forEach(el => {

            el.addEventListener('click', () => {
              const prev = document.querySelector('.event-dashboard__active');
              const cur = document.querySelector(el.getAttribute('data-target'));
              prev.classList.remove('event-dashboard__active');
              cur.classList.add('event-dashboard__active');
            })

          })
    }

    init();
})();
