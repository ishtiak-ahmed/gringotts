console.log('app started');
const loginArea = document.querySelector('.login-area')
const transArea = document.querySelector('#transaction-area')
function loggedIn() {
    loginArea.style.display = 'none';
    transArea.style.display = 'block';
}
const login = document.getElementById('login');

login.addEventListener('click', loggedIn);
loginArea.addEventListener('submit', loggedIn);
window.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        event.preventDefault();
        loggedIn();
    }
});
