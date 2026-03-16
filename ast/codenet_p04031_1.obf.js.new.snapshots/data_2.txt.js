function __DECODE_0__(KySuAS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KySuAS, key);
}
function __STRING_ARRAY__() {
  var _0x5717a2 = ['trim', '30KnudZW', '/dev/stdin', 'readFileSync', 'round', '88rtlVtu', 'split', 'pow', '4816895ULsPpz', 'length', '1918642MibGhk', '412615mbHiVY', '2472288MVeHbP', '468153omhjxL', '2558985bOMYfp', '787258GtLPTx', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x5717a2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1a6)) / 0x1 + parseInt(__DECODE_0__(0x1a1)) / 0x2 + -parseInt(__DECODE_0__(0x1a5)) / 0x3 + parseInt(__DECODE_0__(0x1a3)) / 0x4 + parseInt(__DECODE_0__(0x19f)) / 0x5 + -parseInt(__DECODE_0__(0x1a9)) / 0x6 * (-parseInt(__DECODE_0__(0x1a2)) / 0x7) + parseInt(__DECODE_0__(0x19c)) / 0x8 * (-parseInt(__DECODE_0__(0x1a4)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x981d1);
function myout(text) {
  console['log'](text);
}
function Main(input) {
  input = input[__DECODE_0__(0x1a8)]()[__DECODE_0__(0x19d)]('\x0a');
  var N = parseInt(input[0x0]);
  var list = input[0x1][__DECODE_0__(0x19d)]('\x20')['map'](a => Number(a));
  var ave;
  var sum = 0x0;
  var output = 0x0;
  for (var i = 0x0; i < list[__DECODE_0__(0x1a0)]; i++) {
    sum += list[i];
  }
  ave = Math[__DECODE_0__(0x19b)](sum / N);
  for (var i = 0x0; i < list['length']; i++) {
    output += Math[__DECODE_0__(0x19e)](list[i] - ave, 0x2);
  }
  myout(output);
}
Main(require('fs')[__DECODE_0__(0x19a)](__DECODE_0__(0x1aa), __DECODE_0__(0x1a7))[__DECODE_0__(0x1a8)]());
