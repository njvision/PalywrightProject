import {test} from "@playwright/test";
import LoginPage from "../pages/login.page";
import pages from "../../utils/pages";
import user from "../../utils/user";

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
let loginPage: LoginPage;

test.use({storageState: {cookies:[], origins:[]}});
test.describe.configure({mode: "serial"});

test.beforeEach( async ({page}) => {
await page.goto(pages.loginPage);
loginPage = new LoginPage(page);
});

test.describe.only('Check login', () => {
    test('successfull login', async () => {
    await loginPage.doLogin(username, password);
    await loginPage.checkUrl();
    });

    test('unsuccssfull login - invalid user name', async () => {
        await loginPage.doLogin(user.invalidUserName, password);
        await loginPage.checkInvalidDataMessage();
    })

    test('unsuccssfull login - invalid password', async () => {
        await loginPage.doLogin(username, user.invalidPassword);
        await loginPage.checkInvalidDataMessage();
    })
});