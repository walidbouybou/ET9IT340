function transfer(accountId, amount) {

    console.log(`un montant de  ${amount} a ete transfere au ${accountId}`);
    return amount;
}

module.exports = {
    transfer,
};
