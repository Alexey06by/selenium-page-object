import { WebDriver } from "selenium-webdriver";
import { NewsPage } from "./NewsPage";
import { ArticlePage } from "./ArticlePage";
import { CatalogItemPage } from "./CatalogItemPage";
import { CarsPage } from "./CarsPage";
import { OfferPage } from "./OfferPage";

export class PageFactory {
    static async getNewsPage(driver:WebDriver){
        return new NewsPage(driver);
    }
    static async getArticlePage(driver:WebDriver){
        return new ArticlePage(driver);
    }  
    static async getCatalogItemPage(driver:WebDriver){
        return new CatalogItemPage(driver);
    }  
    static async getCarsPage(driver:WebDriver){
        return new CarsPage(driver);
    }  
    static async getOfferPage(driver:WebDriver){
        return new OfferPage(driver);
    }            
}

