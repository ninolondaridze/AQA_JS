const BaseComponent = require('../common/base.component')

class CallBackForm extends BaseComponent {
  constructor () {
    super('[class="input-item email"]')
  } 

  item (param) {
    const selectors = {
      input: '[id="email-input"]',
      error: '[id="email-error"]'
    }

    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}

module.exports = CallBackForm;