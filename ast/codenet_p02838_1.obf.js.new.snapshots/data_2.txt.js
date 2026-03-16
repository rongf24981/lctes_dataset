(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x112)) / 0x1 * (parseInt(__DECODE_0__(0x115)) / 0x2) + -parseInt(__DECODE_0__(0x114)) / 0x3 + -parseInt(__DECODE_0__(0x11a)) / 0x4 * (-parseInt(__DECODE_0__(0x116)) / 0x5) + parseInt(__DECODE_0__(0x110)) / 0x6 + parseInt(__DECODE_0__(0x118)) / 0x7 + -parseInt(__DECODE_0__(0x10e)) / 0x8 * (-parseInt(__DECODE_0__(0x111)) / 0x9) + parseInt(__DECODE_0__(0x113)) / 0xa * (parseInt(__DECODE_0__(0x11d)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x29884);
function __DECODE_0__(VCAcbm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VCAcbm, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x11c)]('\x0a');
  var n = parseInt(input[0x0], 0xa);
  var x = input[0x1][__DECODE_0__(0x11c)]('\x20');
  var y = new Array(n);
  var count = 0x0;
  var count2 = 0x0;
  var a = 0x3b9aca07;
  for (var i = 0x0; i < n; i++) {
    x[i] = parseInt(x[i], 0xa);
    y[i] = Math[__DECODE_0__(0x11e)](x[i] / 0x100000000);
    x[i] = x[i] % 0x100000000;
  }
  for (var i = 0x0; i < n - 0x1; i++) {
    for (var j = i + 0x1; j < n; j++) {
      count += x[i] ^ x[j];
      if (count > 0x100000000 / 0x2) {
        count = count % (0x100000000 / 0x2);
        count2 += 0.5;
      }
      count2 += y[i] ^ y[j];
    }
  }
  count = count + count2 * 0x100000000;
  console[__DECODE_0__(0x11b)](count % a);
}
Main(require('fs')[__DECODE_0__(0x119)](__DECODE_0__(0x117), __DECODE_0__(0x10f)));
function __STRING_ARRAY__() {
  var _0x12e5ef = ['/dev/stdin', '25641uUrMIC', 'readFileSync', '262516EKefXB', 'log', 'split', '76549UMWskm', 'floor', '8PrIPFv', 'utf8', '491058KaYuRG', '644463pTZJgT', '22VlXYzc', '640LuAPDA', '616734cRmlmR', '26584HyZjJr', '5ceFqEG'];
  __STRING_ARRAY__ = function () {
    return _0x12e5ef;
  };
  return __STRING_ARRAY__();
}
