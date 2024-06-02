class CallBackForm{

  item (param) {
    const selectors = {
      email: '[id="email-input"]',
      name: '[id="name-input"]',
      phone: '[id="phone-input"]',
      subject: '[id="subject-input"]',
      submitButton: '[id="submit-button"]'
    }

    return $(selectors[param]);
  }
}

module.exports = CallBackForm;