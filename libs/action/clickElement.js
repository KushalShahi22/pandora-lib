/**
* Perform a click action on the given element using Playwright
* @param {import('playwright').Page} page - Playwright Page instance
* @param {String} action - The action to perform ('click', 'doubleClick', 'triggerClick')
* @param {String} type - Type of the element ('link' or 'selector') [not used here, but kept for parity]
* @param {String} element - Element selector
* @param {String} iframe - Frame in which element is present (use CSS selector for both iframe and element)
* @param {Boolean} forceClick - Used to click on an element even if it is not visible or disabled
*/
async function performClick(page, action, type, element, iframe, forceClick) {
  // Helper to get the frame or page context
  const getContext = async () => {
    if (iframe) {
      const frameElementHandle = await page.$(iframe);
      if (!frameElementHandle) throw new Error(`Iframe not found: ${iframe}`);
      const frame = await frameElementHandle.contentFrame();
      if (!frame) throw new Error(`Could not get frame from element: ${iframe}`);
      return frame;
    }
    return page;
  };
 
  const context = await getContext();
 
  // Set click options
  const clickOptions = forceClick ? { force: true } : {};
 
  if (action === 'doubleclick' || action === 'doubleClick') {
    await context.dblclick(element, clickOptions);
  } else if (action === 'triggerclick' || action === 'triggerClick') {
    // Simulate a click via dispatchEvent
    await context.$eval(element, el => el.dispatchEvent(new MouseEvent('click', { bubbles: true })));
  } else {
    await context.click(element, clickOptions);
  }
  console.log(`Element ${element} clicked with action: ${action}`);
}
 
module.exports = performClick;