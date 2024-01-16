
function retrieveBalance(accountId) {
    console.log("Retrieve balance"); 
    const balance = 1000;
    return balance;
}

function debitAccount(accountId, amount) {
    console.log(`un montant de ${amount} a ete débité du ce compte numero  ${accountId}`);
    return amount;
}

module.exports = {
    retrieveBalance,
    debitAccount,
}; 
