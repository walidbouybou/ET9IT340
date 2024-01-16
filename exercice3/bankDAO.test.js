// bankDAO.test.js
const { transferMoney } = require('./banq');
const { debitAccount } = require('./banqDAO');
const { transfer } = require('./bankTransfer');

jest.mock('./banqDAO', () => ({
    debitAccount: jest.fn(),
}));

jest.mock('./bankTransfer', () => ({
    transfer: jest.fn(),
}));

describe('transferMoney', () => {
    it('ne devrait pas appeler debitAccount si le transfert échoue', async () => {
        const accountId = 'testAccountId';
        const amount = 50;

        transfer.mockRejectedValue(new Error('Transfer failed'));

        await expect(transferMoney(accountId, amount)).rejects.toThrowError('Transfer failed');
        expect(debitAccount).not.toHaveBeenCalled();
    });

    it('devrait appeler debitAccount si le transfert réussit', async () => {
        const accountId = 'testAccountId';
        const amount = 50;

        transfer.mockResolvedValue(amount);

        await transferMoney(accountId, amount);

        expect(debitAccount).toHaveBeenCalledWith(accountId, amount);
    });
});
