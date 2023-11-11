import { Element } from 'webdriverio';

export class LoginPage {
    get inputEmail() {
        return $('input[name="email"]');
    }

    get inputPassword() {
        return $('input[name="password"]');
    }

    get loginBtn() {
        return $('button[name="login"]');
    }

    get info(): Element {
        return $("~text z info");
    }

    /**funkcia na prihlasovavnie */
    async login(email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }
    /**vytiahnutie textu */
    async getSomeText(): Promise<string> {
        return (await this.info).getText();
    }
}

