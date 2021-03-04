const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const userTypeForm = document.querySelector("#userType")
const message = document.querySelector("#message")
const createAccount = document.querySelector("#createAccount")
form.addEventListener("submit", signUp)


async function signUp(e) {
    e.preventDefault()
    const newUser = {
        username: username.value,
        email: email.value,
        password: password.value,
        userType: userTypeForm.value
    }
    const countUser = await db.users.where("email").equals(email.value).count()
    if (countUser == 0) {
        await db.users.put(newUser).then(async(result) => {
            localStorage.setItem("userId", result)
            const user = await db.users.where("userId").equals(parseInt(result)).first()
            localStorage.setItem("userType", user.userType)
            window.location.href = "index.html"
        }).catch(error => console.log(error))
    } else {
        message.textContent = "User already exist please login"
        message.style.display = "block"
    }
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