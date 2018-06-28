const PubSub = require("../helpers/pub_sub.js");

const SelectView = function(selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  this.selectElement.addEventListener("change", (event) => {
    PubSub.publish("SelectView:selection", event.target.value);
  });
  PubSub.subscribe("Country:all-country-names", (names) => this.populateNames(names));
};

SelectView.prototype.populateNames = function (names) {
  names.detail.forEach((name, index) => {
    const option = document.createElement('option');
    option.textContent = name;
    option.value = index;
    this.selectElement.appendChild(option);
  });
};

module.exports = SelectView;
