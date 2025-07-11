/**
 * Pandora Cypress libs entry point
 */

const selectByVisibleText = require('./libs/action/selectByVisibleText');

module.exports =  {
    checks : {
         //isVisible : require('./libs/check/isVisible'),
         isExisting : require('./libs/check/isExisting'),
         isEnabled : require('./libs/check/isEnabled'),
         compareText : require('./libs/check/compareText'),
         checkWithinViewport : require('./libs/check/checkWithinViewport'),
         checkSelected : require('./libs/check/checkSelected'),
         checkOffset : require('./libs/check/checkOffset'),
         checkNewWindow : require('./libs/check/checkNewWindow'),
         checkModalText : require('./libs/check/checkModalText'),
         checkModal : require('./libs/check/checkModal'),
         checkIsOpenedInNewWindow : require('./libs/check/checkIsOpenedInNewWindow'),
         checkIsEmpty : require('./libs/check/checkIsEmpty'),
         checkFocus : require('./libs/check/checkFocus'),
         checkEqualsText : require('./libs/check/checkEqualsText'),
         checkElementExists : require('./libs/check/checkElementExists'),
         checkDimension : require('./libs/check/checkDimension'),
         checkContainsText : require('./libs/check/checkContainsText'),
         checkContainsAnyText : require('./libs/check/checkContainsAnyText'),
         checkClass : require('./libs/check/checkClass'),
         checkWithinViewport : require('./libs/check/checkWithinViewport'),
         checkDateFormat : require('./libs/check/checkDateFormat'),
         compareTextFromDatafile : require('./libs/check/compareTextFromDatafile'),
         verifySpecialCharsNotPresent: require('./libs/check/verifySpecialCharsNotPresent'),
         verifyElementTextNotPresent: require('./libs/check/verifyElementTextNotPresent'),
         isDisplayed : require('./libs/check/isDisplayed'),
         checkPrice : require('./libs/check/checkPrice'),
         checkAttributeValue : require('./libs/check/checkAttributeValue'),
         
    },
    actions : {
        clearInputField : require('./libs/action/clearInputField'),
        clickElement : require('./libs/action/clickElement'),
        closeLastOpenedWindow : require('./libs/action/closeLastOpenedWindow'),
        deleteCookie : require('./libs/action/deleteCookie'),
        dragElement : require('./libs/action/dragElement'),
        executeCommand : require('./libs/action/executeCommand'),
        focusLastOpenedWindow : require('./libs/action/focusLastOpenedWindow'),
        handleModal : require('./libs/action/handleModal'),
        moveToElement : require('./libs/action/moveToElement'),
        openWebsite : require('./libs/action/openWebsite'),
        pause : require('./libs/action/pause'),
        pressButton : require('./libs/action/pressButton'),
        scroll : require('./libs/action/scroll'),
        scrollSlowly : require('./libs/action/scrollSlowly'),
        selectOption : require('./libs/action/selectOption'),
        //selectOptionByIndex : require('./libs/action/selectOptionByIndex'),
        setCookie : require('./libs/action/setCookie'),
        setInputField : require('./libs/action/setInputField'),
        setPromptText : require('./libs/action/setPromptText'),
        submitForm : require('./libs/action/submitForm'),
        waitFor : require('./libs/action/waitFor'),
        waitForVisible : require('./libs/action/waitForVisible'),
        writeOn : require('./libs/action/writeOn'),
        selectByVisibleText : require('./libs/action/selectByVisibleText'),
        enterButtonKeys: require('./libs/action/enterButtonKeys'),
        switchToiframe: require('./libs/action/switchToiframe'),
        captureText : require('./libs/action/captureText'),
        capturedText: require('./libs/action/capturedText'),
        mouseoverElement:require('./libs/action/mouseoverElement'),
        checkbox:require('./libs/action/checkbox'),
        entertextOnFocusedElement:require('./libs/action/enterTextOnFocusedElement')
    },
    lib : {
        checkIfElementExists : require('./libs/lib/checkIfElementExists')

    },
    helpers : {
        selectorHelper : require('./libs/selectorHelper'),
        pageGenerator : require('./libs/pageGenerator'),
        commandHelper : require('./libs/commandHelper'),
        pageWrapper : require('./libs/pageWrapper')

    }

}