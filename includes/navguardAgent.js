const userId = Number(localStorage.getItem("userId"))
const userType = localStorage.getItem("userType")

if (userId > 0) {
    if (userType === 'u') {
        location.href = '../index.html'
    }
} else {
    location.href = '../index.html'
}