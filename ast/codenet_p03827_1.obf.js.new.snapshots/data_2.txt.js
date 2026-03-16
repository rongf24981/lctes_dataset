function __STRING_ARRAY__() {
  var _0x26b2d9 = ['240wevOip', 'log', '7368OReleV', '655715iCGmFf', '46960TcnowB', '/dev/stdin', '1204zTfBVk', '246650FklFKO', '276282yuBaaw', '217WNjwdZ', '36BNILRH', '6TQAzvq', 'split', '5660864WzjbwO'];
  __STRING_ARRAY__ = function () {
    return _0x26b2d9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(HjlCVz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HjlCVz, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1e1)) / 0x1 + -parseInt(__DECODE_0__(0x1e3)) / 0x2 + parseInt(__DECODE_0__(0x1eb)) / 0x3 * (parseInt(__DECODE_0__(0x1e9)) / 0x4) + parseInt(__DECODE_0__(0x1ec)) / 0x5 * (-parseInt(__DECODE_0__(0x1e6)) / 0x6) + parseInt(__DECODE_0__(0x1e4)) / 0x7 * (-parseInt(__DECODE_0__(0x1ed)) / 0x8) + parseInt(__DECODE_0__(0x1e5)) / 0x9 * (-parseInt(__DECODE_0__(0x1e2)) / 0xa) + parseInt(__DECODE_0__(0x1e8)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1ba7a);
function Main(input) {
  input = input[__DECODE_0__(0x1e7)]('\x0a');
  var num = input[0x0];
  var character = input[0x1];
  var max = 0x0;
  var x = 0x0;
  for (var i = 0x0; i < character['length']; i++) {
    if (character[i] === 'I') {
      x++;
    } else {
      x--;
    }
    if (max < x) {
      max = x;
    }
  }
  console[__DECODE_0__(0x1ea)](max);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1ee), 'utf8'));
