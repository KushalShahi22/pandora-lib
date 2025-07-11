// Import Playwright test library
const { expect } = require('@playwright/test');
const selectorHelper = require('../selectorHelper');

/**
 * Clear a given input field (Playwright version)
 * @param  {object} page            Playwright page object
 * @param  {String} variableName    Variable name to set for selected selector 
 * @param  {String} identifier      Element selector
 */
async function clearInputField(page, variableName, identifier) {
  // Resolve the selector (assuming selectorHelper returns a selector string or locator)
  const elementSelector = await selectorHelper(identifier);

  // Get the element handle
  const elementHandle = await page.$(elementSelector);
  if (!elementHandle) throw new Error(`Element not found: ${elementSelector}`);

  // Clear the input field
  await elementHandle.fill('');

  // Access window and log captured variables (if needed)
  await page.evaluate((variableName) => {
    window.captures = window.captures || {};
    const variable = window.captures[variableName];
    console.log("All captured variables after ", variable);
  }, variableName);
}

module.exports = clearInputField;
