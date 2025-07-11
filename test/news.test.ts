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
        await newsPage.openArticle();
        const articlePage = await PageFactory.getArticlePage(driver);
        const articleTitleVisible = await articlePage.isArticleTitleVisible();

        expect(articleTitleVisible).to.be.true;
    });

    it("Should open catalog item from News section", async function(){
        const newsPage = await PageFactory.getNewsPage(driver);
        await newsPage.visitPage();
        await newsPage.openCatalogItem();
        const catalogItemPage = await PageFactory.getCatalogItemPage(driver);
        const catalogItemTitleVisible = await catalogItemPage.isItemTitleVisible();

        expect(catalogItemTitleVisible).to.be.true;

        const catalogItemUrl = await catalogItemPage.getCurrentUrlValue();
        expect(catalogItemUrl).to.contain('catalog.onliner.by');
    });    

});
