const { Before } = require("@wdio/cucumber-framework");

Before({name: 'console log'}, () => {
  return console.log('test has just begun')
})