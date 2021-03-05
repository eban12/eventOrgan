const userId = localStorage.getItem("userId")
const userType = localStorage.getItem("userType")

if (userId) {
    if (userType === 'u') {
        location.href = '../index.html'
    }
} else {
    location.href = '../index.html'
}