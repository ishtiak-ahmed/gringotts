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
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    AccountStatus.deposit += depositAmount;
    AccountStatus.balance += depositAmount;
    // console.log(AccountStatus.deposit);
    // Update Deposit
    depositUI.innerHTML = `$ ${AccountStatus.deposit}`;
    // Update balance
    balanceUI.innerHTML = `$ ${AccountStatus.balance}`;
})
// Withdraw Function
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    AccountStatus.withdraw += withdrawAmount;
    AccountStatus.balance -= withdrawAmount;
    // console.log(AccountStatus.deposit);
    // Update Deposit
    withdrawUI.innerHTML = `$ ${AccountStatus.withdraw}`;
    // Update balance
    balanceUI.innerHTML = `$ ${AccountStatus.balance}`;
})