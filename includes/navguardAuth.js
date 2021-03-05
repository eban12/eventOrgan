const userId = localStorage.getItem("userId")
const userType = localStorage.getItem("userType")

if (Number(userId) > 0) {
    if (userType == "a") {
        window.location.href = "agents/index.html"
    } else {
        window.location.href = "index.html"
    }
} else if (! (location.pathname === "/index.html" || location.pathname === "/login.html" || location.pathname === "/signup.html")) {
    console.log(location.href)
    window.location.href = "index.html"
}