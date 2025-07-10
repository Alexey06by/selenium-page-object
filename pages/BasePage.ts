import { WebDriver } from "selenium-webdriver"

export class BasePage {
    constructor(protected driver: WebDriver){}

    async getCurrentUrlValue() {
        return this.driver.getCurrentUrl();
    }
}