import {test, expect, type Page} from "@playwright/test";
import HomePage from "../pages/home.page";
import TopMenuPage from "../pages/top.menu.page";

const url = 'https://playwright.dev/';
let homePage: HomePage;
let topMenuPage: TopMenuPage;

test.beforeEach(async ({page}) => {
    await page.goto(url);
    homePage = new HomePage(page);
})

async function clickGetStarted(page: Page) {
    await homePage.clickGetStartLink();
    topMenuPage = new TopMenuPage(page);
}

test.describe('Tests Set', () => {
    test('Check displayed text', async ({page}) => {
        await test.step("When", async () => {
            await clickGetStarted(page);
            await topMenuPage.hoverDropDownNode();
            await topMenuPage.clickDropDownJava();
        });
        await test.step("Then", async () => {
            await topMenuPage.assertUrlJava();
            await topMenuPage.assertNotVisibleText();
            await topMenuPage.assertBeVisibleText();
        });
    });

    test('Check title page', async ({page}) => {
        await homePage.assertPageTitle();
    });
});