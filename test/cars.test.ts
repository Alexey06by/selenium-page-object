import { WebDriver } from "selenium-webdriver";
import { describe, before, after, it } from "mocha"
import { expect } from "chai"
import { DriverSingleton } from "../core/DriverSingleton";
import { PageFactory } from "../pages/PageFactory";

let driver: WebDriver;

describe("Cars", async function(){

    before(async function(){
        driver = await DriverSingleton.getInstance();
    });

    after(async function() {
        await DriverSingleton.quit();        
    });

    it("Should open an offer from Cars section", async function(){
        const carsPage = await PageFactory.getCarsPage(driver);
        await carsPage.visitPage();
        await carsPage.openOffer();
        const offerPage = await PageFactory.getOfferPage(driver);

        const offerTitleVisible = await offerPage.isOfferTitleVisible();
        expect(offerTitleVisible).to.be.true;

        const offerPriceVisible = await offerPage.isOfferPriceVisible();
        expect(offerPriceVisible).to.be.true;
        
        const offerPhotoVisible = await offerPage.isOfferPhotoVisible();
        expect(offerPhotoVisible).to.be.true;        
    });
    
    it("Should open a news article from Cars section", async function(){
        const carsPage = await PageFactory.getCarsPage(driver);
        await carsPage.visitPage();
        const originalWindow = await carsPage.getOriginalWindow();
        await carsPage.openArticle();
        await carsPage.switchToNewWindow(originalWindow);
        const articlePage = await PageFactory.getArticlePage(driver);

        const articleTitleVisible = await articlePage.isArticleTitleVisible();
        expect(articleTitleVisible).to.be.true; 
    }); 

    it("Should filter offers from Cars section", async function(){
        const carsPage = await PageFactory.getCarsPage(driver);
        await carsPage.visitPage();
        await carsPage.setFilterBrand();
        await carsPage.setFilterModel();
        await carsPage.setFilterBodyType();

        const offerTitle = await carsPage.getOfferTitle();
        expect(offerTitle).to.contain('Audi'); 
        expect(offerTitle).to.contain('A6');
        
        const offerCarBodyType = await carsPage.getOfferCarBodyType();
        expect(offerCarBodyType).to.contain('Седан');        
    });     
});
