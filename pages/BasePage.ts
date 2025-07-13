import { WebDriver } from "selenium-webdriver"

export class BasePage {
    constructor(protected driver: WebDriver){}

    async getCurrentUrlValue() {
        return this.driver.getCurrentUrl();
    }

    async getOriginalWindow() {
        return this.driver.getWindowHandle();
    }  
    
    async switchToNewWindow(originalWindow:string) {
        await this.driver.wait(
            async() => (await this.driver.getAllWindowHandles()).length ===2,
            5000
        );
        const windows = await this.driver.getAllWindowHandles();
        windows.forEach(async handle => {
            if (handle !== originalWindow){
                await this.driver.switchTo().window(handle);
            }
        });        
    }   
}