const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');
const Country = require('./models/country.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#countries');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const country = new Country();
  country.bindEvents();

  const container = document.querySelector('#country');
  const resultView = new ResultView(container);
  resultView.bindEvents();
});
