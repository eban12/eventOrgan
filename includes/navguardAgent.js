const userId = Number(localStorage.getItem("userId"))
const userType = localStorage.getItem("userType")

if (userId > 0) {
    if (userType === 'u') {
        location.href = '../index.html'
    }
} else if (! (location.pathname === "/index.html")) {
    window.location.href = "index.html"
}