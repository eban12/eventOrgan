const form = document.querySelector("#loginForm")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

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

form.addEventListener("submit", login)

async function login(e) {
    e.preventDefault()
    db.table("users")
        .toArray()
        .then((users) => {
            users.forEach((user) => {
                console.log(user)
                if (user.email == email.value) {
                    if (user.password == password.value) {
                        document.cookie = `userId=${ user.id }`
                        location.href = "index.html";
                    } else {
                        console.log("password not matched.");
                    }
                } else {
                    console.log("email doesn't exist")
                }
            });
        });

}