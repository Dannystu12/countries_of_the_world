const BordersView = function(container) {
  this.container = container;
};

BordersView.prototype.render = function (borders) {
  this.container.innerHTML = '';
  const heading = document.createElement('h2');
  heading.textContent = 'Borders';
  this.container.appendChild(heading);

  const listTag = document.createElement('ul');
  for(const border of borders){
      const listItem = document.createElement('li');
      listItem.appendChild(document.createTextNode(border));
      listTag.appendChild(listItem);
  }
  this.container.appendChild(listTag);
};

module.exports = BordersView;
