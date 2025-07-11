const selectorHelper = require('../selectorHelper');

/**
 * Returns the text content of an element using Playwright.
 * @param {import('playwright').Page} page - Playwright page object
 * @param {string} identifier - Element selector or identifier
 * @returns {Promise<string|null>} The text content of the element, or null if not found
 */
async function getElementText(page, identifier) {
  // Resolve the selector using your helper
  const selector = await selectorHelper(identifier);

  // Wait for the element to be present in the DOM
  await page.waitForSelector(selector);

  // Get the text content of the element
  return page.textContent(selector);
}

module.exports = getElementText;