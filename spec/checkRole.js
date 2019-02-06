const { Builder } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Check Example', () => {
  const driver = new Builder().forBrowser('chrome').build();
  it('Check Title', async () => {
    await driver.get('https://www.google.com/');
    const title = await driver.getTitle();
    expect(title).to.equal('Google', 'El nombre no es correcto');
  });
});
