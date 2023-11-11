import { LoginPage } from 'C:\\Users\\Jakub Matiaszewski\\OneDrive\\Plocha\\Zadanie\\Screens\\loginPage';
import { getLogin } from 'C:\Users\\Jakub Matiaszewski\\OneDrive\\Plocha\\Zadanie\\login-data\\login';

describe('Login test', () => {
    it('should log in successfully', async () => {
        const loginPage = new LoginPage();
        await loginPage.login(getLogin.email, getLogin.password);

        const actualText = await loginPage.getSomeText();
        const expectedText = 'uspesne prihlaseny';

        expect(actualText).toEqual(expectedText);
    });
});
