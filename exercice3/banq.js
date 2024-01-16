const { retrieveBalance } = require('./banqDAO');
const { transfer } = require('./bankTransfer');
const { debitAccount } = require('./banqDAO');

function getBalance(accountId) {
    retrieveBalance(accountId);
    return retrieveBalance(accountId);
}


async function transferMoney(accountId, amount) {
    try {
        const transferredAmount = await transfer(accountId, amount);

        debitAccount(accountId, transferredAmount);


    } catch (error) {
        console.error(`Transfer failed: ${error.message}`);
 
        throw error;
    }
}

module.exports = {
    getBalance,
    transferMoney,
};
    