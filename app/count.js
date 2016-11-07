exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let counter;

    let _count = function _count() {
      console.log(start++);

      if(start <= end) {
        counter = setTimeout(_count, 100);
      }
    }

    _count();

    return {
      cancel: function() {
        counter && clearTimeout(counter);
      }
    }
  }
};
