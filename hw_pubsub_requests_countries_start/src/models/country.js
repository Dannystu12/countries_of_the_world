const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js")

const Country = function() {
  this.countries = [];
};

Country.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:selection', (event) => {
    PubSub.publish('Country:selected-country-data', this.countries[event.detail]);
  });
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((json) => {
    this.countries = json;
    const countryNames = json.map((country) => country.name);
    PubSub.publish("Country:all-country-names", countryNames);
  });
};

Country.prototype.getCountries = function () {
  return this.countries;
};

module.exports = Country;
