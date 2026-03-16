var a0_0x33894a = __DECODE_0__;
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
  var _0x2f1753 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x2f1753(0x144)) / 0x1 + parseInt(_0x2f1753(0x141)) / 0x2 * (-parseInt(_0x2f1753(0x146)) / 0x3) + -parseInt(_0x2f1753(0x140)) / 0x4 + -parseInt(_0x2f1753(0x143)) / 0x5 + -parseInt(_0x2f1753(0x148)) / 0x6 * (parseInt(_0x2f1753(0x14a)) / 0x7) + parseInt(_0x2f1753(0x13f)) / 0x8 * (-parseInt(_0x2f1753(0x14b)) / 0x9) + parseInt(_0x2f1753(0x145)) / 0xa;
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
  var _0x4bc689 = __DECODE_0__;
  input = input[_0x4bc689(0x149)]('\x0a');
  var inputs = input[0x1][_0x4bc689(0x149)]('\x20');
  function avg(args) {
    var num = 0x0;
    for (var n of args) {
      num += Number(n);
    }
    return num / args['length'];
  }
  var average = Math[_0x4bc689(0x13d)](avg(inputs));
  var useStamina = 0x0;
  for (var point of inputs) {
    useStamina += Math['pow'](average - point, 0x2);
  }
  console[_0x4bc689(0x147)](useStamina);
}
Main(require('fs')['readFileSync'](a0_0x33894a(0x142), a0_0x33894a(0x13e)));
function __STRING_ARRAY__() {
  var _0x2c39c2 = ['utf8', '248656GBfAvq', '1669780SltnGA', '2XnNFEh', '/dev/stdin', '3097355AhKTCY', '337488mexBLW', '27732590pTNiQL', '464301IKUWWU', 'log', '127770IdsoOo', 'split', '231kpKAsC', '45fuEIOO', 'round'];
  __STRING_ARRAY__ = function () {
    return _0x2c39c2;
  };
  return __STRING_ARRAY__();
}
