exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove: function(arr, item) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== item) {
        result.push(arr[i]); 
      }
    }

    return result;
  },

  removeWithoutCopy: function(arr, item) {
    let i;
    let len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((acc, el) => {
      if(el === item) {
        acc += 1;
      }

      return acc;
    }, 0);
  },

  duplicates: function(arr) {
    let all = arr.reduce((acc, item) => {
      if(!acc[item]) {
        acc[item] = 1;
      } else {
        acc[item] += 1;
      }
      return acc;
    }, {});

    let dups = [];

    for(let key in all) {
      if(all.hasOwnProperty(key) && all[key] > 1) {
        // 微妙
        if(typeof parseInt(key) === 'number') {
          key = parseInt(key);
        }
        dups.push(key);
      }
    }

    return dups;

  },

  square: function(arr) {
    return arr.map((item) => {
      return Math.pow(item, 2);
    });
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((acc, item, index) => {
      if(item === target) {
        acc.push(index);
      }
      return acc;
    }, []);
  }
};
