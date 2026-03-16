function __STRING_ARRAY__() {
  var _0x1f4dc6 = ['1XjFjMN', 'Wednesday', '6961240mLQyVP', 'utf8', '7420lxlGWl', 'Tuesday', '715714pLvoNi', '20744OOCgKd', 'Friday', '2904156UTUmuq', '/dev/stdin', 'map', 'split', 'Saturday', 'getDay', '2634058pYbjto', '479040XeJTII', 'replace', 'shift', '6NozxqP', 'readFileSync', '3072GdjTao'];
  __STRING_ARRAY__ = function () {
    return _0x1f4dc6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x181)) / 0x1 * (-parseInt(__DECODE_0__(0x187)) / 0x2) + -parseInt(__DECODE_0__(0x17e)) / 0x3 * (-parseInt(__DECODE_0__(0x172)) / 0x4) + -parseInt(__DECODE_0__(0x185)) / 0x5 * (parseInt(__DECODE_0__(0x180)) / 0x6) + parseInt(__DECODE_0__(0x17a)) / 0x7 + parseInt(__DECODE_0__(0x17b)) / 0x8 + -parseInt(__DECODE_0__(0x174)) / 0x9 + parseInt(__DECODE_0__(0x183)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x660f3);
(function (input) {
  var p = input[__DECODE_0__(0x17c)](/\n$/, '')[__DECODE_0__(0x177)]('\x0a');
  while (!![]) {
    var a = p[__DECODE_0__(0x17d)]()[__DECODE_0__(0x177)]('\x20')[__DECODE_0__(0x176)](Number);
    var m = a[__DECODE_0__(0x17d)]();
    var d = a[__DECODE_0__(0x17d)]();
    if (m === 0x0 && d === 0x0) {
      return;
    }
    var date = new Date(0x7d4, m - 0x1, d);
    console['log'](getWeekDay(date[__DECODE_0__(0x179)]()));
  }
})(require('fs')[__DECODE_0__(0x17f)](__DECODE_0__(0x175), __DECODE_0__(0x184)));
function __DECODE_0__(xTcRqB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x172;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xTcRqB, key);
}
function getWeekDay(d) {
  var week = ['Sunday', 'Monday', __DECODE_0__(0x186), __DECODE_0__(0x182), 'Thursday', __DECODE_0__(0x173), __DECODE_0__(0x178)];
  return week[d];
}
