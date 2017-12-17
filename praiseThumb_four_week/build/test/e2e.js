'use strict';

var _require = require('selenium-webdriver'),
    Builder = _require.Builder,
    By = _require.By,
    Key = _require.Key,
    until = _require.until;

var driver = new Builder().forBrowser('chrome').build();
driver.get('http://localhost:3009/index/index');
driver.findElement(By.id('hand')).click();
var _animation = driver.findElement(By.id('animation'));
driver.wait(_animation.isDisplayed(), 1000);
driver.quit();