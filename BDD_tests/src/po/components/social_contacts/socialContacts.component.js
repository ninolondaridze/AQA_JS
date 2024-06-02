class SocialContacts {
  item(param) {
    const selectors = {
      telephone: '[class="telephone"]'
    }
    return $(selectors[param]);
  }
}

module.exports = SocialContacts;