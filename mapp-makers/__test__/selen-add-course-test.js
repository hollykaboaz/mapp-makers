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

    await driver.sleep(3000);

    const button = await driver.findElement(By.css('div.flex:nth-child(3) > button:nth-child(2)'));
    await button.click();
    await driver.sleep(3000);


    //div.flex:nth-child(3) > button:nth-child(2)
    const addCourse = await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[2]/div/h2"));
        const addCourseText = await addCourse.getText();

        if (addCourseText === 'Add Course') 
        {
            console.log('Add Course Opened');
            const titleInput = await driver.findElement(By.css('#title'));
            await titleInput.sendKeys("Software Dev 1");

            // Find the input field for password and enter the password
            const sectionInput = await driver.findElement(By.css('#section'));
            await sectionInput.sendKeys("1234");
            
            const submitButton = await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/div[2]/div/form/button'));
            await submitButton.click();

            await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[1]/div[2]/div/p')), 10000);

            // Proceed with your success validation logic
            const successMessage = await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/div[2]/div/p')).getText();
            console.log(successMessage);
            if (successMessage.includes('Course information added')) {
                console.log('Test Passed! Course information added successfully.');
            } else {
                console.error('Test Failed! Unexpected success message or course addition failure.');
            }

        } else {
            console.error('Test Failed! Add Course Form not opened.');
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
      } finally {
        await driver.quit();
      }
}

runTest();
