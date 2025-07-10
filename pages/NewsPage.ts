import { WebDriver, By, until } from "selenium-webdriver"
import { BasePage } from "./BasePage"

export class NewsPage extends BasePage {
    private readonly url: string;

    constructor(driver: WebDriver) {
        super(driver);
        this.url = "https://www.onliner.by/";
    }

    async visitPage(){
        await this.driver.get(this.url);
    }

    async openArticle(){
        const article = await this.driver.wait(
            until.elementLocated(By.id('widget-1-1')),
            5000
        );
        const articleTitle = await this.driver.findElement(By.css('#widget-1-1 .line-clamp-4'));
        const articleTitleNewsPage = await articleTitle.getText();        
        await article.click();
        return articleTitleNewsPage;

    }
}