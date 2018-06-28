const PubSub = require('../helpers/pub_sub.js');
const NameView = require('./name_view.js');
const RegionView = require('./region_view.js');
const LanguagesView = require('./languages_view.js');
const BordersView = require('./borders_view.js');

const ResultView = function(container, country) {
  this.container = container;
  this.country = country;

  const nameContainer = document.createElement('div');
  container.appendChild(nameContainer);
  this.nameView = new NameView(nameContainer);

  const regionContainer = document.createElement('div');
  container.appendChild(regionContainer);
  this.regionView = new RegionView(regionContainer);

  const languagesContainer = document.createElement('div');
  container.appendChild(languagesContainer);
  this.languagesView = new LanguagesView(languagesContainer);

  const bordersContainer = document.createElement('div');
  container.appendChild(bordersContainer);
  this.bordersView = new BordersView(bordersContainer);
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

  const borderCodes = country.borders;
  const borderCountries = [];
  for(const borderCode of borderCodes){
    const borderName = this.country.getCountries().find((country) => country.alpha3Code === borderCode);
    borderCountries.push(borderName);
  }
  this.bordersView.render(borderCountries.map(country => country.name));
};
module.exports = ResultView;
