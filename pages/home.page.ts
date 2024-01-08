import {expect, type Locator, type Page} from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly getStartedButton: Locator;
    readonly pageTitle: RegExp;

    constructor(page:Page) {
        this.page = page;
        this.getStartedButton = page.getByRole('link', {name: 'Get start'});
        this.pageTitle = /Playwright/;
    }

    async clickGetStartLink() {
        await this.getStartedButton.click();
    }
    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
    }
}

export default HomePage;