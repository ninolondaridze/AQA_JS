const BaseComponent = require('../common/base.component')

class MotivesComponent extends BaseComponent {
  constructor() {
    super('.motives-container');
  }

    item (param) {
    const selectors = {
      story: '[id="story"]',
      mission: '[id="mission"]',
      vission: '[id="vission"]'
    };
    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}

module.exports = MotivesComponent;