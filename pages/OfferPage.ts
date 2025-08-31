import { WebDriver, By, until } from "selenium-webdriver"
import { BasePage } from "./BasePage"

export class OfferPage extends BasePage {

    constructor(driver: WebDriver) {
        super(driver);
    }

    async isOfferTitleVisible(){
        const offerTitle = await this.driver.wait(
            until.elementLocated(By.css('h1.vehicle-form__title')),
            5000
        );
        const offerTitleVisible = await offerTitle.isDisplayed();        
        return offerTitleVisible;
    }

    async isOfferPriceVisible(){
        const offerPrice = await this.driver.wait(
            until.elementLocated(By.className('vehicle-form__price_condensed')),
            5000
        );
        const offerPriceVisible = await offerPrice.isDisplayed();        
        return offerPriceVisible;
    }

    async isOfferPhotoVisible(){
        const offerPhoto = await this.driver.wait(
            until.elementLocated(By.xpath("//div[contains(@class, 'fotorama__active')]/img")),
            5000
        );
        await this.driver.wait(until.elementIsVisible(offerPhoto));
        const offerPhotoVisible = await offerPhoto.isDisplayed();        
        return offerPhotoVisible;
    }
}