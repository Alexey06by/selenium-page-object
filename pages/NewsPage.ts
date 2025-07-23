import { WebDriver, By, until } from "selenium-webdriver"
import { BasePage } from "./BasePage"
import dotenv from 'dotenv';
dotenv.config();

export class NewsPage extends BasePage {
    private readonly url: string;

    constructor(driver: WebDriver) {
        super(driver);
        this.url = process.env.BASE_URL;
    }

    async visitPage(){
        await this.driver.get(this.url);
    }

    async openArticle(){
        const article = await this.driver.wait(
            until.elementLocated(By.css(
                '.b-main-page-grid-4:nth-child(7) .b-teasers-2__teaser:first-child'
            )),
            5000
        );
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', article);
        await article.click();
    }

    async openCatalogItem(){
        const catalogItem = await this.driver.wait(
            until.elementLocated(By.css('.catalog-offers__item:first-child .catalog-offers__image')),
            5000
        );
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', catalogItem);
        await catalogItem.click();
    }

}