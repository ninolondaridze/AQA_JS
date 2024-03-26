const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {
    it('should logout when clicked logout button', async () => {
      await browser.url(`https://the-internet.herokuapp.com/login`)

      await $('#username').setValue('tomsmith')
      await $('#password').setValue('SuperSecretPassword!')
      await $('button[type="submit"]').click()

      await $('.radius').click()
      await expect($('#flash')).toBeExisting()
      await expect($('#flash')).toHaveTextContaining(
        'You logged out of the secure area!')
    })

    it('should change input element style', async () => {
      await browser.url(`https://the-internet.herokuapp.com/login`)
      const inputElement = await $('#username')
      await browser.execute(function(inputElement) {
        inputElement.style.border = 'red solid 5px';
      }, inputElement);
      await browser.pause(5000);
    })

    it('should check if notification is loaded in 1 sec', async () => {
      await browser.url(`https://the-internet.herokuapp.com/login`)
      await $('#username').setValue('tomsmith')
      await $('#password').setValue('SuperSecretPassword!')
      await $('button[type="submit"]').click()
  
      await browser.waitUntil (
        async () => (await $('#flash')).isDisplayed(),
        { timeout: 5000, interval: 1000, timeoutMsg: "not loaded"}
      );
    })

    it ('mouse move', async () => {
      await browser.url(`https://the-internet.herokuapp.com/login`)
      await $('button[class="radius:]').moveTo;
      await browser.pause(5000);
    })
})


describe("My financial website", () => {
    it("should change text when Mission clicked", async () => {
      await browser.url('https://ninolondaridze.github.io/Final-Project/')

      await $('#mission').click()
      await expect($('#section-one')).toHaveTextContaining(
        'We aim to be the most respected financial services firm in the world.')

      await expect($('#section-two')).toHaveTextContaining(
        'We save people money so they can live better.')  
    })

    it("should return an error when mail format is not provided", async () => {
      await browser.url('https://ninolondaridze.github.io/Final-Project/')

      await $('#email-input').setValue('John Smith')
      await expect($('#email-error')).toBeDisplayed()
      await expect($('#email-error')).toHaveTextContaining('Please Enter Valid Email.')
    })

    it("should not return an error when mail format is provided", async () => {
      await browser.url('https://ninolondaridze.github.io/Final-Project/')

      await $('#email-input').setValue('johnsmith@gmail.com')
      await expect ($('#email-error')).not.toBeDisplayed()

})
})