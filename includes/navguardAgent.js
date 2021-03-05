const userId = Number(localStorage.getItem("userId"))
const userType = localStorage.getItem("userType")

if (userId > 0) {
    if (userType === 'u') {
        location.href = '../index.html'
    }
} else if (! (location.pathname === "/index.html" || location.pathname === "/login.html" || location.pathname === "/signup.html")) {
    console.log(location.href)
    window.location.href = "index.html"
}