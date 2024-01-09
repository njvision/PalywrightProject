import {chromium, FullConfig} from "@playwright/test";
import LoginPage from "../pages/login.page";
import uiPages from "../../utils/uiPages";

async function globalSetup(config: FullConfig) {
    const userName = process.env.USERNAME!;
    const password = process.env.PASSWORD!;
    const {baseUrl, storageState} = config.projects[0].use;
    const browser = await chromium.launch({headless:true, timeout:10000});
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);

    await page.goto(baseUrl + uiPages.login);
    await loginPage.doLogin(userName, password);
    await loginPage.checkUrl();
    await page.context().storageState({path: storageState as string});
    await browser.close();
}

export default globalSetup;