const { transfer } = require('./bankTransfer');
const { transferMoney } = require('./banq');

jest.mock('./bankTransfer', () => ({
    transfer: jest.fn(),
}));

describe('transferMoney', () => {
    it('devrait appeler transfer avec les bons paramètres', () => {
        const accountId = 'testAccountId';
        const amount = 50;

        transferMoney(accountId, amount);

        expect(transfer).toHaveBeenCalledWith(accountId, amount);
    }); 

});
