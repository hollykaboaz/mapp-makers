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

    const title = await driver.getTitle();

    if (title === 'React SignUpForm') {
      console.log('Test Passed! Page title is correct.');
    } else {
      console.error('Test Failed! Page title does not match.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await driver.quit();
  }
}

runTest();
