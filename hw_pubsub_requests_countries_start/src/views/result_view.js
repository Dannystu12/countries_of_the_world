const PubSub = require('../helpers/pub_sub.js');
const NameView = require('./name_view.js');
const RegionView = require('./region_view.js');
const LanguagesView = require('./languages_view.js');

const ResultView = function(container) {
  this.container = container;

  const nameContainer = document.createElement('div');
  container.appendChild(nameContainer);
  this.nameView = new NameView(nameContainer);

  const regionContainer = document.createElement('div');
  container.appendChild(regionContainer);
  this.regionView = new RegionView(regionContainer);

  const languagesContainer = document.createElement('div');
  container.appendChild(languagesContainer);
  this.languagesView = new LanguagesView(languagesContainer);
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected-country-data', (event) => {
    this.render(event.detail);
  });
};

ResultView.prototype.render = function (country) {
  this.nameView.render(country.name);
  this.regionView.render(country.region);
  this.languagesView.render(country.languages);
};
module.exports = ResultView;
