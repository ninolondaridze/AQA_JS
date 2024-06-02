function displayCheck (firstText, compareOption) {
  switch ((compareOption)) {
    case "be displayed":
      return expect(firstText).toEqual(true);
    case "not be displayed":
      return expect(firstText).toEqual(false);
    default:
      throw Error (`"${compareOption}" is not a valid option!`);
  }
} 

async function isAlertDisplayed (compareOption) {
  const alertCheck = await browser.isAlertOpen();
  return displayCheck(alertCheck, compareOption );
}

module.exports = isAlertDisplayed;