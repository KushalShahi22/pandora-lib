const selectorHelper = require('../selectorHelper');

/**
 * Clear a given input field (Playwright version)
 * @param {import('playwright').Page} page - Playwright page object
 * @param {string} element - Element selector or identifier
 * @returns {Promise<void>}
 */
async function clearInputField(page, element) {
    // Resolve the selector using your helper
    const selector = await selectorHelper(element);

    // Wait for the input to be visible and then clear its value
    await page.waitForSelector(selector, { state: 'visible' });
    await page.fill(selector, ''); // This clears the input field
}

module.exports = clearInputField;