import { WebDriver } from "selenium-webdriver";
import { describe, before, after, it } from "mocha"
import { expect } from "chai"
import { DriverSingleton } from "../core/DriverSingleton";

let driver: WebDriver;

describe("Singleton", async function(){

    before(async function(){
        driver = await DriverSingleton.getInstance();
    });

    after(async function() {
        await DriverSingleton.quit();        
    });

    it("Should use one instance", async function(){
        const driver1 = await DriverSingleton.getInstance();
        const driver2 = await DriverSingleton.getInstance();
        expect(driver1).to.equal(driver2);
    });
    
});
