const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function runTest() {
    let driver = await new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(new firefox.Options().headless()) // Run in headless mode (optional)
    .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\dakot\\Desktop\\Mapp\\mapp-makers\\mapp-makers\\geckodriver\\geckodriver.exe'))
    .build();


    try {
        await driver.get('http://localhost:3000/');
        await driver.wait(until.titleIs('React SignUpForm'), 10000);
        
        // Find the button using the provided CSS selector
        const signUpButton = await driver.findElement(By.css('.flex-row > a:nth-child(2) > button:nth-child(1)'));

        // Click the button
        await signUpButton.click();

        // Explicitly wait for 5 seconds after clicking the button
        await driver.sleep(5000); // 5000 milliseconds (5 seconds)


        const signUpSection = await driver.findElement(By.xpath("//*[contains(text(), 'Create An Account')]"));
        const signUpSectionText = await signUpSection.getText();

        if(signUpSectionText === 'Create An Account')
        {
            const firstNameInput = await driver.findElement(By.id('firstName'));
            await firstNameInput.sendKeys('testFirst');

            const lastNameInput = await driver.findElement(By.id('lastName'));
            await lastNameInput.sendKeys('testLast');

            const emailInput = await driver.findElement(By.id('email'));
            await emailInput.sendKeys('test@fake.com');
            
            const button = await driver.findElement(By.css('.bg-stone-800'));
            await button.click();
            
            const passwordInput = await driver.findElement(By.id('password-input'));
            await passwordInput.sendKeys('password');

            await button.click();
            await driver.sleep(2500);
            await button.click();

            await driver.wait(until.alertIsPresent(), 5000);
            const alert = await driver.switchTo().alert();
            const alertText = await alert.getText();


            if (alertText.includes('Successful')) {
                console.log('Test Passed! Account was Successfully Created.');
            } else {
                console.error('Test Failed! Account Creation Failed.');
            }
    
        }
        else
        {
            console.error('Test Failed! Page does not contain the expected text. Sign Up Page not reached!');
        }

    }
    catch (error) {
        console.error('An error occurred:', error);
      } finally {
        await driver.quit();
      }
}

runTest();
