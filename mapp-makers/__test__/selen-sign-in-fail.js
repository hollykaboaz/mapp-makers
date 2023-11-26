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
        
        // Find the input field with the id "email-input" and enter an email
        const emailInput = await driver.findElement(By.id('email-input'));
        await emailInput.sendKeys('random@ggc.edu');

        // Find the input field for password and enter the password
        const passwordInput = await driver.findElement(By.id('password-input'));
        await passwordInput.sendKeys('passwrod');

        const button = await driver.findElement(By.css('.bg-stone-800'));
        await button.click();


        // Check if an alert containing "User has been logged in" appears
        await driver.wait(until.alertIsPresent(), 5000); // Wait for an alert for up to 5 seconds

        const alert = await driver.switchTo().alert();
        const alertText = await alert.getText();

        if (alertText.includes('Sign-in error')) {
            console.log('Test Passed! Alert contains "Sign-in error".');
        } else {
            console.error('Test Failed! Alert does not contain the expected text.');
        }

    }
    catch (error) {
        console.error('An error occurred:', error);
      } finally {
        await driver.quit();
      }
}

runTest();
