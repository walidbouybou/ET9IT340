const { retrieveBalance } = require('./banqDAO');

function getBalance(accountId) {
    retrieveBalance(accountId);
    return retrieveBalance(accountId);
}

module.exports = {
    getBalance,
};
    