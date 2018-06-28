const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js")

const Country = function() {};

Country.prototype.bindEvents = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((json) => {
    this.countries = json;
    const countryNames = json.map((country) => country.name);
    PubSub.publish("Country:all-country-names", countryNames);
  });
};

module.exports = Country;
