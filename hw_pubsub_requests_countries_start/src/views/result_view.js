const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected-country-data', (event) => {
    console.log(event.detail)
  });
};

module.exports = ResultView;
