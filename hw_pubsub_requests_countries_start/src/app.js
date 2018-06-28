const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();
});
