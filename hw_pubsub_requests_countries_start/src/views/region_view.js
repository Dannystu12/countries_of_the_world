const RegionView = function(container) {
  this.container = container;
};

RegionView.prototype.render = function (region) {
  this.container.innerHTML = '';
  const heading = document.createElement('h2');
  heading.textContent = 'Region';
  this.container.appendChild(heading);

  const regionTag = document.createElement('p');
  regionTag.textContent = region;
  this.container.appendChild(regionTag);
};

module.exports = RegionView;
