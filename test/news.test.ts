import { By, until, WebDriver } from "selenium-webdriver";
import { describe, before, after, it } from "mocha"
import { expect } from "chai"
import { DriverSingleton } from "../core/DriverSingleton";
import { PageFactory } from "../pages/PageFactory";

let driver: WebDriver;

describe("News", async function(){
    before(async function(){
        driver = await DriverSingleton.getInstance();
    });

    after(async function() {
        await DriverSingleton.close();        
    });

    it("Should open news article from News section", async function(){
        const newsPage = await PageFactory.getNewsPage(driver);
        await newsPage.visitPage();
        const articleTitleNewsPage = await newsPage.openArticle();
        
        const articleTitle = await driver.wait(
            until.elementLocated(By.css('.news-header__title h1')),
            5000
        );
        const articleTitleText = await articleTitle.getText();
        expect(articleTitleText).to.contain(articleTitleNewsPage);
    });


});
