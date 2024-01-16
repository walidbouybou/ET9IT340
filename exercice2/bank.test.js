const { getBalance } = require('./banq');
const { retrieveBalance } = require('./banqDAO');

jest.mock('./banqDAO', () => ({
    retrieveBalance: jest.fn(),
}));

describe('getBalance', () => {
    it("devrait appeler retrieveBalance sans l'exécuter", () => {
        getBalance("testAccountId");
        expect(retrieveBalance).toHaveBeenCalledWith("testAccountId");
    });

    it("devrait transmettre le paramètre accountId à retrieveBalance", () => {
        getBalance("testAccountId");
        expect(retrieveBalance).toHaveBeenCalledWith("testAccountId");
    });

    it("devrait retourner le solde récupéré par retrieveBalance", () => {
        retrieveBalance.mockReturnValue(100);
        const solde = getBalance("testAccountId");
        expect(solde).toBe(100);
    });
});
