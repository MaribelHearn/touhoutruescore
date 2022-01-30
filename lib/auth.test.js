const auth = require('./auth');

describe('auth', () => {
    test('checks matching password', async () => {
        await auth.create_account_with_login('test', 'test@example.com', 'a-password');
        const matches = await auth.check_password('test', 'a-password');
        expect(matches).toBeTruthy();
    });

    test('checks wrong password', async () => {
        await auth.create_account_with_login('test2', 'test2@example.com', 'a-password');
        const matches = await auth.check_password('test2', 'a-different-password');
        expect(matches).not.toBeTruthy();
    });
});
