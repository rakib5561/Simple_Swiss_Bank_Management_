
const statusDeposit = document.getElementById('status_deposit');
const statusWithdraw = document.getElementById('status_withdraw');
const statusBalance = document.getElementById('status_balance');


// Deposit function
document.getElementById('btn-deposit').addEventListener("click", function(){

    const depositField = document.getElementById('deposit-filed');
    const depositAmount = parseFloat(depositField.value);

    // Update deposit amount in UI
    const updateDeposit = depositAmount + parseFloat(statusDeposit.innerText);
    statusDeposit.innerText = updateDeposit;
    depositField.value = '';
    
    //Update balance
    const balance = parseFloat(statusBalance.innerText);
    const presentDepositAmount = parseFloat( statusDeposit.innerText);
    const totalBalance = balance + presentDepositAmount;

    //update in UI
    statusBalance.innerText = totalBalance;
    
})


// Withdraw function
document.getElementById('btn-withdraw').addEventListener("click", function(){
    const withdrabalance = parseFloat(statusWithdraw.innerText);
    const withdrawFiled = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawFiled.value;
    
    const updataWithdraw = withdrabalance + parseFloat(withdrawAmount);
    statusWithdraw.innerText = updataWithdraw;
    withdrawFiled.value = '';

    // After withdraw new balance
    const balance = parseFloat(withdrawAmount)    
    const presentAmount = parseFloat( statusBalance.innerText);
    const totalNewBalance = presentAmount - balance;
  
    // update balnce in ui
    statusBalance.innerText = totalNewBalance;

})
