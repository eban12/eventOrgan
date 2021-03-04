const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const userType = document.querySelector("#userType")
const createAccount = document.querySelector("#createAccount")

form.addEventListener("submit", signUp)


async function signUp(e) {
    e.preventDefault()
    const newUser = {
        username: username.value,
        email: email.value,
        password: password.value,
        userType: userType.value
    }

    await db.users.put(newUser).then((result) => {
        document.cookie = `userId=${result}`
        window.location.href = "index.html"
    }).catch(error => console.log(error))
}