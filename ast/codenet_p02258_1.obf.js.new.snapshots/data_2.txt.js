function __STRING_ARRAY__() {
  var _0x44681d = ['18974358HngVeV', '1839649FxlNdm', '1454102ZwhuxR', 'log', '3433284jEwlJO', 'readFileSync', '462FbvSAW', '11COhhkW', '81280UCKuVq', '2876GUcWLB', '1551kHQDyi', '10TRSqDO', 'split', '48HvkgXo', '15570084huliLx', 'MAX_VALUE', '1LTsjsa'];
  __STRING_ARRAY__ = function () {
    return _0x44681d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(zsgpBf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zsgpBf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x80)) / 0x1 * (parseInt(__DECODE_0__(0x83)) / 0x2) + parseInt(__DECODE_0__(0x8b)) / 0x3 * (parseInt(__DECODE_0__(0x8a)) / 0x4) + -parseInt(__DECODE_0__(0x89)) / 0x5 * (-parseInt(__DECODE_0__(0x87)) / 0x6) + -parseInt(__DECODE_0__(0x82)) / 0x7 * (-parseInt(__DECODE_0__(0x7d)) / 0x8) + -parseInt(__DECODE_0__(0x85)) / 0x9 * (parseInt(__DECODE_0__(0x8c)) / 0xa) + -parseInt(__DECODE_0__(0x88)) / 0xb * (parseInt(__DECODE_0__(0x7e)) / 0xc) + -parseInt(__DECODE_0__(0x81)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc092b);
function main(input) {
  input = input[__DECODE_0__(0x8d)]('\x0a');
  var values = input['map'](function (v) {
    return parseInt(v);
  });
  var min = Number[__DECODE_0__(0x7f)];
  var val = -Number[__DECODE_0__(0x7f)];
  var N = values[0x0];
  for (var i = 0x1; i <= N - 0x1; i++) {
    if (min >= values[i]) {
      min = values[i];
    }
    if (values[i + 0x1] - min >= val) {
      val = values[i + 0x1] - min;
    }
  }
  console[__DECODE_0__(0x84)](val);
  return val;
}
main(require('fs')[__DECODE_0__(0x86)]('/dev/stdin', 'utf8'));
