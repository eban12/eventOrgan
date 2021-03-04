const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const userType = document.querySelector("#userType")
const createAccount = document.querySelector("#createAccount")

form.addEventListener("submit", signUp)


function signUp(e) {
    e.preventDefault()
    alert("nice")
}