import { WebDriver, By, until } from "selenium-webdriver"
import { BasePage } from "./BasePage"

export class ArticlePage extends BasePage {

    constructor(driver: WebDriver) {
        super(driver);
    }

    async isArticleTitleVisible(){
        const articleTitle = await this.driver.wait(
            until.elementLocated(By.css('.news-header__title h1')),
            5000
        );
        const articleTitleVisible = await articleTitle.isDisplayed();        
        return articleTitleVisible;
    }
}