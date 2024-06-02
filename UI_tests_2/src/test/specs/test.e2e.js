const { expect, browser, $ } = require('@wdio/globals')

const {pages} = require('./../../po')


describe("My financial website", () => {
  beforeEach(async () => {
    await pages('main').open();
  })

    it("should change text when Mission clicked", async () => {
      await pages('main').motives.item('mission').click()
      await expect(pages('main').story.item('sectionOne')).toHaveTextContaining(
        'We aim to be the most respected financial services firm in the world.')

      await expect(pages('main').story.item('sectionTwo')).toHaveTextContaining(
        'We save people money so they can live better.')  
    })

    it("should return an error when mail format is not provided", async () => {

      await pages('main').emailForm.item('input').setValue('John Smith')
      await expect(pages('main').emailForm.item('error')).toBeDisplayed()
      await expect(pages('main').emailForm.item('error')).toHaveTextContaining('Please Enter Valid Email.')
    })

    it("should not return an error when mail format is provided", async () => {
      
      await $('#email-input').setValue('johnsmith@gmail.com')
      await expect (pages('main').emailForm.item('error')).not.toBeDisplayed()
})
})