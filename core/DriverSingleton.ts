import {Builder, WebDriver} from "selenium-webdriver"

export class DriverSingleton {
    private static driverInstance: WebDriver | null = null;

    static async getInstance(): Promise<WebDriver> {
        if(!this.driverInstance) {
            this.driverInstance = await new Builder().forBrowser('firefox').build();
            await this.driverInstance.manage().window().maximize();              
        }
        return this.driverInstance;
    }

    static async close(): Promise<void> {
        if (this.driverInstance) {
            await this.driverInstance.close();
            this.driverInstance = null;
        }
    }
}