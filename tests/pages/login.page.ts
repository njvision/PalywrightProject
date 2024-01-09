import {expect, type Locator, type Page} from "@playwright/test";
import messages from "../../utils/messages";

export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly message: Locator;

    constructor(page:Page) {
        this.page = page;
        this.username = page.getByPlaceholder("UserName", {exact: true});
        this.password = page.getByPlaceholder("Password", {exact: true});
        this.loginButton = page.getByRole("button", {name: 'Login'});
        this.message = page.locator('#output');
    }

    async fillUserName(userName: string) {
        await this.username.fill(userName);
    }

    async fillPassword(password: string) {
        await this.password.fill(password);
    }

    async doLogin(userName: string, password: string) {
        await this.fillUserName(userName);
        await this.fillPassword(password);
        await this.loginButton.click();
    }

    async checkUrl() {
        await expect(this.page).toHaveURL(/.*profile/)
    }

    async checkInvalidDataMessage() {
        await expect(this.message).toHaveText(messages.login.invalid);
    }
}

export default LoginPage;