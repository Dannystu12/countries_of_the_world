const LanguagesView = function(container) {
  this.container = container;
};

LanguagesView.prototype.render = function (languages) {
  this.container.innerHTML = '';
  const heading = document.createElement('h2');
  heading.textContent = 'Languages';
  this.container.appendChild(heading);

  const listTag = document.createElement('ul');
  for(const language of languages){
      const listItem = document.createElement('li');
      listTag.appendChild(document.createTextNode(language.name));
  }
  this.container.appendChild(listTag);
};

module.exports = LanguagesView;
