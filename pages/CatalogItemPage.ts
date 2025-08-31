import { WebDriver, By, until } from "selenium-webdriver"
import { BasePage } from "./BasePage"

export class CatalogItemPage extends BasePage {

    constructor(driver: WebDriver) {
        super(driver);
    }

    async isItemTitleVisible(){
        const itemTitle = await this.driver.wait(
            until.elementLocated(By.className('catalog-masthead__title')),
            5000
        );
        const itemTitleVisible = await itemTitle.isDisplayed();        
        return itemTitleVisible;
    }
}