function __DECODE_0__(TVHgYe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ad;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TVHgYe, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1b0)) / 0x1 + parseInt(__DECODE_0__(0x1b6)) / 0x2 + -parseInt(__DECODE_0__(0x1b4)) / 0x3 + -parseInt(__DECODE_0__(0x1ad)) / 0x4 * (-parseInt(__DECODE_0__(0x1b7)) / 0x5) + parseInt(__DECODE_0__(0x1ae)) / 0x6 + parseInt(__DECODE_0__(0x1af)) / 0x7 + -parseInt(__DECODE_0__(0x1b8)) / 0x8 * (parseInt(__DECODE_0__(0x1b1)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe0d4e);
function __STRING_ARRAY__() {
  var _0x107564 = ['/dev/stdin', '3388004NSFdSb', '251214dXWkEM', '3641337jKpjnt', '243649AzetXh', '9JEqaNy', 'split', 'utf8', '277863gdBApg', 'floor', '650874RzRLkC', '10xSVWDm', '10594552XpSlrA'];
  __STRING_ARRAY__ = function () {
    return _0x107564;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input['split']('\x0a');
  N = parseInt(input[0x0][__DECODE_0__(0x1b2)]('\x20'));
  var result = 0x0;
  for (var i = 0x1; i < N; i++) {
    result += Math[__DECODE_0__(0x1b5)]((N - 0x1) / i);
  }
  console['log']('%d', result);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1b9), __DECODE_0__(0x1b3)));
