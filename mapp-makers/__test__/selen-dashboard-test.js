const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function runTest() {
  let driver = await new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(new firefox.Options().headless()) // Run in headless mode (optional)
    .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\dakot\\Desktop\\Mapp\\mapp-makers\\mapp-makers\\geckodriver\\geckodriver.exe'))
    .build();

  try {
    await driver.get('http://localhost:3000/dashboard');

    await driver.sleep(5000);
    
    const welcomeBack = await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/a[1]/div/div[1]"));
        const welcomeBackText = await welcomeBack.getText();

        if (welcomeBackText === 'Welcome back,') {
            console.log('Test Passed! Dashboard page Reached.');
        } else {
            console.error('Test Failed! Dashboard Page not reached.');
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
      } finally {
        await driver.quit();
      }
}

runTest();
