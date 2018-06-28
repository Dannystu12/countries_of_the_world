const NameView = function(container) {
  this.container = container;
};

NameView.prototype.render = function (name) {
  this.container.innerHTML = '';
  const heading = document.createElement('h2');
  heading.textContent = 'Name';
  this.container.appendChild(heading);

  const nameTag = document.createElement('p');
  nameTag.textContent = name;
  this.container.appendChild(nameTag);
};

module.exports = NameView;
