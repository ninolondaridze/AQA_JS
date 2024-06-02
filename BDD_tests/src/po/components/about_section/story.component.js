const BaseComponent = require('../common/base.component')

class StoryComponent extends BaseComponent {
  constructor() {
    super('[id="story-container"]');
  }

  item (param) {
    const selectors = {
      sectionOne: '[id="section-one"]',
      sectionTwo: '[id="section-two"]'
    }

    return this.rootEl.$(selectors[param]);
  }
}

module.exports = StoryComponent;