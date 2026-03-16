var a0_0x6dccc2 = __DECODE_0__;
function __DECODE_0__(rIlyIX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rIlyIX, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x276050 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x276050(0x1d6)) / 0x1 + -parseInt(_0x276050(0x1ce)) / 0x2 * (parseInt(_0x276050(0x1d4)) / 0x3) + parseInt(_0x276050(0x1cd)) / 0x4 * (parseInt(_0x276050(0x1d7)) / 0x5) + -parseInt(_0x276050(0x1d5)) / 0x6 * (-parseInt(_0x276050(0x1d2)) / 0x7) + -parseInt(_0x276050(0x1cc)) / 0x8 * (parseInt(_0x276050(0x1d0)) / 0x9) + -parseInt(_0x276050(0x1cf)) / 0xa + -parseInt(_0x276050(0x1d1)) / 0xb * (-parseInt(_0x276050(0x1cb)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5a674);
function main(input) {
  var _0x261865 = __DECODE_0__;
  var input = input;
  var sum = 0x0;
  for (var i = 0x0; i < 0x4; i++) {
    if (input[i] == '+') {
      sum += 0x1;
    } else {
      sum -= 0x1;
    }
  }
  console[_0x261865(0x1d8)](sum);
}
function __STRING_ARRAY__() {
  var _0x4f2101 = ['312KEmIXq', '4YXEVrb', '3896IWqSsF', '2081980LGdYAF', '116091ZTUzwZ', '11sAJWHf', '7yEASsw', 'utf8', '1116HTpbql', '3811986YIHEEw', '356134oYffFr', '1153645pxaatn', 'log', '15555372gyVksB'];
  __STRING_ARRAY__ = function () {
    return _0x4f2101;
  };
  return __STRING_ARRAY__();
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x6dccc2(0x1d3)));
