const userId = Number(localStorage.getItem("userId"))
const userType = localStorage.getItem("userType")

if (userId > 0) {
    if (userType == "a") {
        window.location.href = "agents/index.html"
    }
}