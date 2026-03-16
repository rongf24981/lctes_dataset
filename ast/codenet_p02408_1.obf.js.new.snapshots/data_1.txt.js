'use strict';

var a0_0x173982 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x1af46e = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x1af46e(0x10b)) / 0x1 * (parseInt(_0x1af46e(0x11b)) / 0x2) + -parseInt(_0x1af46e(0x113)) / 0x3 + parseInt(_0x1af46e(0x118)) / 0x4 * (-parseInt(_0x1af46e(0x115)) / 0x5) + -parseInt(_0x1af46e(0x117)) / 0x6 + -parseInt(_0x1af46e(0x110)) / 0x7 + -parseInt(_0x1af46e(0x114)) / 0x8 + parseInt(_0x1af46e(0x119)) / 0x9 * (parseInt(_0x1af46e(0x10c)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x23a0e);
function __STRING_ARRAY__() {
  var _0x3b8325 = ['utf8', 'readFileSync', 'join', '1408428IvByvI', 'slice', 'indexOf', '457959zonpti', '1098544pBdYXZ', '95WwQVia', 'length', '1641510flOTJK', '28820mbyJNF', '2438811zfwjbD', 'push', '234652QSXVEM', '2KBTKWR', '30pwmfNP'];
  __STRING_ARRAY__ = function () {
    return _0x3b8325;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(PGhnMj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PGhnMj, key);
}
(function (stdin) {
  var _0x1955b1 = __DECODE_0__;
  var lines = stdin['toString']()['split']('\x0a');
  var result = function (data) {
    var _0x4c9141 = __DECODE_0__;
    return new Deck()['filter'](function (v) {
      var _0x273849 = __DECODE_0__;
      return this[_0x273849(0x112)](v) === -0x1;
    }, data)[_0x4c9141(0x10f)]('\x0a');
    function Deck() {
      var deck = [];
      ['S', 'H', 'C', 'D']['forEach'](function (v) {
        var _0x7bd97e = __DECODE_0__;
        for (var i = 0x0; i < 0xd; i++) {
          deck[_0x7bd97e(0x11a)]([v, i + 0x1]['join']('\x20'));
        }
      });
      return deck;
    }
  }(lines[_0x1955b1(0x111)](0x0, lines['shift']()));
  if (result[_0x1955b1(0x116)] !== 0x0) {
    console['log'](result);
  }
})(require('fs')[a0_0x173982(0x10e)]('/dev/stdin', a0_0x173982(0x10d)));
