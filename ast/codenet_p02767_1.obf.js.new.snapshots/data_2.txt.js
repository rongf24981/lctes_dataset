function __DECODE_0__(Rgyqdb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Rgyqdb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x144)) / 0x1 + parseInt(__DECODE_0__(0x141)) / 0x2 * (-parseInt(__DECODE_0__(0x146)) / 0x3) + -parseInt(__DECODE_0__(0x140)) / 0x4 + -parseInt(__DECODE_0__(0x143)) / 0x5 + -parseInt(__DECODE_0__(0x148)) / 0x6 * (parseInt(__DECODE_0__(0x14a)) / 0x7) + parseInt(__DECODE_0__(0x13f)) / 0x8 * (-parseInt(__DECODE_0__(0x14b)) / 0x9) + parseInt(__DECODE_0__(0x145)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5e397);
function Main(input) {
  input = input[__DECODE_0__(0x149)]('\x0a');
  var inputs = input[0x1][__DECODE_0__(0x149)]('\x20');
  function avg(args) {
    var num = 0x0;
    for (var n of args) {
      num += Number(n);
    }
    return num / args['length'];
  }
  var average = Math[__DECODE_0__(0x13d)](avg(inputs));
  var useStamina = 0x0;
  for (var point of inputs) {
    useStamina += Math['pow'](average - point, 0x2);
  }
  console[__DECODE_0__(0x147)](useStamina);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x142), __DECODE_0__(0x13e)));
function __STRING_ARRAY__() {
  var _0x2c39c2 = ['utf8', '248656GBfAvq', '1669780SltnGA', '2XnNFEh', '/dev/stdin', '3097355AhKTCY', '337488mexBLW', '27732590pTNiQL', '464301IKUWWU', 'log', '127770IdsoOo', 'split', '231kpKAsC', '45fuEIOO', 'round'];
  __STRING_ARRAY__ = function () {
    return _0x2c39c2;
  };
  return __STRING_ARRAY__();
}
