const MainPage = require("./main.page");

/**
 * 
 * @param {'main'} name 
 * @returns {MainPage}
 */

function pages(name) {
  const items = {
    main: new MainPage()
  };
  return items[name];
}

module.exports = {
  MainPage,
  pages,
};