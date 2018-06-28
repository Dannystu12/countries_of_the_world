const Request = function(url) {
  this.url = url;
};

Request.prototype.get = function (callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.addEventListener('load', () => {
    if(xhr.status !== 200){
      console.err(xhr.status);
      return;
    }
    const json = JSON.parse(xhr.responseText);
    callback(json);
  });

  xhr.send();
};

module.exports = Request;
