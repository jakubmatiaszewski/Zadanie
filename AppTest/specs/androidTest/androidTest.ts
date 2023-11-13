import { LoginPage } from '../../../../Screens/loginPage';
import { getLogin } from '../../../../login-data/login';

describe('Login test', () => {
    it('should log in successfully', async () => {
        const loginPage = new LoginPage();
        await loginPage.login(getLogin.email, getLogin.password);

   
    it("checks whether the given text is correct" , async () =>{
       const actualText = await loginPage.getSomeText();
       expect(actualText).toEqual('Boli ste úspešne prihlásený/á.')
        })
   
   
    });
});
