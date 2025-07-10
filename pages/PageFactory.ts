import { WebDriver } from "selenium-webdriver";
import { NewsPage } from "./NewsPage";

export class PageFactory {
    static async getNewsPage(driver:WebDriver){
        return new NewsPage(driver);
    }
}