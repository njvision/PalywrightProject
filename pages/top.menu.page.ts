import {type Page, type Locator, expect} from "@playwright/test";

export class TopMenuPage {
    readonly page: Page;
    readonly dropDownNode: Locator;
    readonly dropDownJava: Locator;
    readonly url: string;
    readonly notBeVisibleText: string;
    readonly BeVisibleText: string;

    constructor(page:Page) {
        this.page = page;
        this.dropDownNode = page.getByRole('button', {name: 'Node.js'});
        this.dropDownJava =  page.getByText('Java', {exact: true});
        this.url = 'https://playwright.dev/java/docs/intro';
        this.notBeVisibleText = 'Installing Playwright';
        this.BeVisibleText = 'Playwright is distributed as a set of Maven modules.';
    }

    async hoverDropDownNode() {
        await this.dropDownNode.hover();
    }

    async clickDropDownJava() {
        await this.dropDownJava.click();
    }

    async assertUrlJava() {
        await expect(this.page).toHaveURL(this.url);
    }

    async assertNotVisibleText() {
        await expect(this.page.getByText(this.notBeVisibleText, {exact: true})).not.toBeVisible;
    }

    async assertBeVisibleText() {
        await expect(this.page.getByText(this.BeVisibleText, {exact: true})).toBeVisible;
    }

}

export default TopMenuPage;