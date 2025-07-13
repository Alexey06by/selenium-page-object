import { WebDriver, By, until } from "selenium-webdriver"
import { BasePage } from "./BasePage"

export class CarsPage extends BasePage {
    private readonly url: string;

    constructor(driver: WebDriver) {
        super(driver);
        this.url = "https://ab.onliner.by/";
    }

    async visitPage(){
        await this.driver.get(this.url);
    }

    async openArticle(){
        const article = await this.driver.wait(
            until.elementLocated(By.css('.vehicle-form__slider-item:first-child picture')),
            5000
        );
        await article.click();
    }

    async openOffer(){
        const offer = await this.driver.wait(
            until.elementLocated(By.css(
                '.vehicle-form__offers-unit:first-child .vehicle-form__panorama-item_primary:first-child'
            )),
            5000
        );
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', offer);
        await offer.click();
    }

    async setFilterBrand(){
        const brand = await this.driver.wait(
            until.elementLocated(By.css(
                '.vehicle-form__row:nth-child(2) .vehicle-form__line_condensed-other:first-child .input-style__real'
            )),
            5000
        );
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', brand);
        await brand.click();
        const brandAudi = await this.driver.wait(
            until.elementLocated(By.xpath(
                "//div[@class='dropdown-style__checkbox-sign'][text()='Audi']"
            )),
            5000
        );
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', brandAudi);
        await brandAudi.click();
    } 

    async setFilterModel(){
        const model = await this.driver.wait(
            until.elementLocated(By.css(
                '.vehicle-form__row:nth-child(2) .vehicle-form__line_condensed-other:nth-child(2) .input-style__real'
            )),
            5000
        );
        await model.click();
        const modelA6 = await this.driver.wait(
            until.elementLocated(By.xpath(
                "//div[@class='dropdown-style__checkbox-sign'][text()='A6']"
            )),
            5000
        );
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', modelA6);
        await modelA6.click();
    } 

    async setFilterBodyType(){
        const bodyType = await this.driver.wait(
            until.elementLocated(By.xpath(
                "//div[@class='vehicle-form__checkbox-sign'][contains(text(), 'Седан')]"
            )),
            5000
        );
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', bodyType);
        await bodyType.click();
    }     
    
    async getOfferTitle(){
        const offerTitle = await this.driver.wait(
            until.elementLocated(By.css(
                '.vehicle-form__offers-unit:first-child .vehicle-form__link_noreflex'
            )),
            5000
        );
        return offerTitle.getText();
    }

    async getOfferCarBodyType(){
        const offerCarBodyType = await this.driver.wait(
            until.elementLocated(By.css(
                '.vehicle-form__offers-unit:first-child .vehicle-form__description_car'
            )),
            5000
        );
        return offerCarBodyType.getText();
    }    

}