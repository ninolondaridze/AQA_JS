const {CallBackForm}= require("../components");

const {MotivesComponent, StoryComponent} = require("../components");

const BasePage = require('./base.page')

class MainPage extends BasePage {
  
  constructor () {
    super('https://ninolondaridze.github.io/Final-Project');
    this.motives = new MotivesComponent();
    this.story = new StoryComponent();
    this.emailForm = new CallBackForm();
  } 

}

module.exports = MainPage;