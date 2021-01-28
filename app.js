let AccountStatus = {
    deposit: 0,
    withdraw: 0,
    balance: 0
}


// console.log('app started');
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
// Deposit Function
let depositUI = document.querySelector('.deposit h4');
let balanceUI = document.querySelector('.balance h4');
let withdrawUI = document.querySelector('.withdraw h4');


const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function () {

    transaction('deposit', 'depositAmount')
})

function transaction(type, id) {
    let amount = parseFloat(document.getElementById(id).value);
    if (type == 'deposit') {
        AccountStatus.deposit += amount;
    }
    if (type == 'withdraw') {
        AccountStatus.withdraw += amount;
        amount = amount * (-1);
    }
    AccountStatus.balance += amount;

    // Update Interface
    withdrawUI.innerHTML = `$ ${AccountStatus.withdraw}`;
    // Update balance
    balanceUI.innerHTML = `$ ${AccountStatus.balance}`;
    depositUI.innerHTML = `$ ${AccountStatus.deposit}`;

    // Reset withdraw field
    document.getElementById(id).value = '';

}

// Withdraw Function
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
    transaction('withdraw', 'withdrawAmount');
})
