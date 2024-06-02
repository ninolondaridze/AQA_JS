const { Given, When } = require('@wdio/cucumber-framework');
const { pages } = require('../po');

Given('I open {string} page', function(pageName) {
  return pages(pageName).open(); 
}); 

When('I type {string} in Name Input', async function(inputValue) {
  const input = await pages('main').callBackForm.item('name').setValue(inputValue);
})

When('I type {string} in Email Input', async function(inputValue) {
  const email = await pages('main').callBackForm.item('email').setValue(inputValue);
})

When('I type {string} in Phone Input', async function(inputValue) {
  const phone = await pages('main').callBackForm.item('phone').setValue(inputValue);
})

When('I type {string} in Subject Input', async function(inputValue) {
  const subject = await pages('main').callBackForm.item('subject').setValue(inputValue);
})

When('I click Submit button', async function() {
  const button = await pages('main').callBackForm.item('submitButton').click();
})
