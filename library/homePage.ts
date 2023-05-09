// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class homePage {
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly installationSection: Locator;
    readonly installPlaywright: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedLink = page.locator('text=Get started');
        this.installationSection = page.locator("text=How to install Playwright");
        this.installPlaywright = page.locator('#installing-playwright');
    }

    async goto() {
        await this.page.goto('https://playwright.dev');
    }

    async getStarted() {
        await this.getStartedLink.click();
        await expect(this.installationSection).toBeVisible();
    }

}