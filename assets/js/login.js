const form = document.querySelector("#loginForm")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const message = document.querySelector("#message")

form.addEventListener("submit", login)
async function login(e) {
    e.preventDefault()
    db.table("users")
        .toArray()
        .then((users) => {
            users.forEach((user) => {
                if (user.email == email.value) {
                    if (user.password == password.value) {
                        localStorage.setItem("userId", user.id)
                        localStorage.setItem("userType", user.userType)
                        if (user.userType == "a") {
                            location.href = "agents/index.html";
                        } else {
                            location.href = "index.html";
                        }
                    } else {
                        message.textContent = "Incorrect password."
                        message.style.display = "block"
                    }
                } else {
                    message.textContent = "email doesn't exist"
                    message.style.display = "block"
                }
            });
        });
}

$(document).ready(function() {
    $("#basic-addon2").click(function() {
        let passwordField = $("#password");
        let passwordFieldAttr = passwordField.attr("type");

        if (passwordFieldAttr == "password") {
            passwordField.attr("type", "text");
            $(this).html('<i class="fa fa-eye-slash" aria-hidden="true"></i>');
        } else {
            passwordField.attr("type", "password");
            $(this).html('<i class="fa fa-eye" aria-hidden="true"></i>');
        }
    });
});