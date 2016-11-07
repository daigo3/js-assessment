exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(resolve => resolve(value));
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
        if(xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.send();
    }).then((res) => {
      let data = JSON.parse(res);
      return data.people.map((item) => { return item.name; }).sort();
    });
  }
};
