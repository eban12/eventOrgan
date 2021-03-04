const userId = localStorage.getItem("userId")
const userType = localStorage.getItem("userType")

if (userId) {
    if (userType == "a") {
        window.location.href = "agents/index.html"
    } else {
        window.location.href = "index.html"
    }
}