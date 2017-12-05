const {Builder,By,Key,until}=require('selenium-webdriver');
let driver=new Builder()
	.forBrowser('chrome')
	.build();
driver.get('http://localhost:3001/index/index');
driver.findElement(By.id('fingerBig')).click();
const ele=driver.findElement(By.id('fingerBig'));
driver.wait(ele.isDisplayed(),1000);
driver.quit();