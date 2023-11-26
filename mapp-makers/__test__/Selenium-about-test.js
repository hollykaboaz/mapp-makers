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
        
        // Find the button using the provided CSS selector
        const button = await driver.findElement(By.css('.flex-row > a:nth-child(3) > button:nth-child(1)'));

        // Click the button
        await button.click();

        // Explicitly wait for 5 seconds after clicking the button
        await driver.sleep(5000); // 5000 milliseconds (5 seconds)

        // Check if "About Section" text appears on the page
        const aboutSection = await driver.findElement(By.xpath("//*[contains(text(), 'About Section')]"));
        const aboutSectionText = await aboutSection.getText();

        if (aboutSectionText === 'About Section') {
            console.log('Test Passed! "About Section" text is present on the page.');
        } else {
            console.error('Test Failed! "About Section" text is not found on the page.');
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
      } finally {
        await driver.quit();
      }
}

runTest();
