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

    const button = await driver.findElement(By.css('button.flex'));
    await button.click();
    await driver.sleep(3000);


    //div.flex:nth-child(3) > button:nth-child(2)
    const addStudent = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div[1]/div[3]/div/h2"));
        const addStudentText = await addStudent.getText();

        if (addStudentText === 'Add Student') 
        {
            console.log('Add Student Opened');
            
            
            const firstNameInput = await driver.findElement(By.id('firstName'));
            await firstNameInput.sendKeys('testFirst');

            const lastNameInput = await driver.findElement(By.id('lastName'));
            await lastNameInput.sendKeys('testLast');

            const emailInput = await driver.findElement(By.id('email'));
            await emailInput.sendKeys('test@fake.com');

            const checkboxes = await driver.findElements(By.css('input[type="checkbox"]'));

            if (checkboxes.length > 0) {
            // Wait for any obscuring element to disappear
            await driver.wait(until.stalenessOf(driver.findElement(By.css('.bg-black.bg-opacity-70'))), 10000);

            // Clicking the first checkbox
            await checkboxes[0].click();
            console.log('Checkbox selected.');
            } else {
            console.error('No checkboxes found.');
            }

            
            const button = await driver.findElement(By.css('.bg-blue-500'));
            await button.click();


            await driver.wait(until.alertIsPresent(), 10000); // Wait for an alert for up to 5 seconds

            const alert = await driver.switchTo().alert();
            const alertText = await alert.getText();

            if (alertText.includes('Student successfully created!')) {
                console.log('Test Passed! Alert contains "Student successfully created!".');
            } else {
                console.error('Test Failed! Alert does not contain the expected text.');
            }

        } else {
            console.error('Test Failed! Add Student Form not opened.');
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
      } finally {
        await driver.quit();
      }
}

runTest();
