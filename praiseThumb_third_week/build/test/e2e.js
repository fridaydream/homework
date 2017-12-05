'use strict';

var _require = require('selenium-webdriver'),
    Builder = _require.Builder,
    By = _require.By,
    Key = _require.Key,
    until = _require.until;

var driver = new Builder().forBrowser('chrome').build();
driver.get('http://localhost:3001/index/index');
driver.findElement(By.id('fingerBig')).click();
var ele = driver.findElement(By.id('fingerBig'));
driver.wait(ele.isDisplayed(), 1000);
driver.quit();