import {test, expect} from "@playwright/test";

test('@test - check displayed text', async ({page}) => {
    // Given
    await page.goto('https://playwright.dev/');
    const text = 'Playwright is distributed as a set of Maven modules.';

    // When
    await page.getByRole('link', {name: 'Get start'}).click();
    await page.getByRole('button', {name: 'Node.js'}).hover();
    await page.getByText('Java', {exact: true}).click();

    // Then
    await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
    await expect(page.getByText("Installing Playwright", {exact: true})).not.toBeVisible;
    await expect(page.getByText(text, {exact:true})).toBeVisible;
});