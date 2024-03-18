const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!')
        await expect($('#flash')).toMatchElementSnapshot('flashAlert')
    })

    it('should not login with invalid name', async () => {
      await browser.url(`https://the-internet.herokuapp.com/login`)

      await $('#username').setValue('jondoe')
      await $('#password').setValue('SuperSecretPassword!')
      await $('button[type="submit"]').click()

      await expect($('#flash')).toBeExisting()
      await expect($('#flash')).toHaveTextContaining(
          'Your username is invalid!')
    })

    it ('should not log in with invalid password', async () => {
      await browser.url(`https://the-internet.herokuapp.com/login`)

      await $('//input[@id="username"]').setValue('tomsmith')
      await $('//input[@id="password"]').setValue('tomsmith')
      await $('//button[@type="submit"]').click()

      await expect($('#flash')).toBeExisting()
      await expect($('#flash')).toHaveTextContaining(
        'Your password is invalid!')
    })

    it('username input should have id of username', async () => {
      await expect($('#username')).toHaveId('username')
    })

    it('passwrod input should have id of password', async () => {
      await expect($('#password')).toHaveId('password')
    })

    it('flash message should have id of flash', async () => {
      await expect($('//button[@class="radius"]')).toBeClickable()
    })

  })

