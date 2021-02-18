import "../../components/Header.js";
import "../../components/EventsList.js";
import "../../components/Select-component.js";
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
              prev.classList.remove('active-radio');
              el.parentElement.classList.add('active-radio');
            })
          })
    }

    init();
})();
