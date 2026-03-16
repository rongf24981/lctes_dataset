function __DECODE_0__(uEzmdi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xae;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uEzmdi, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xb2)) / 0x1 + parseInt(__DECODE_0__(0xb4)) / 0x2 + -parseInt(__DECODE_0__(0xba)) / 0x3 * (parseInt(__DECODE_0__(0xb3)) / 0x4) + -parseInt(__DECODE_0__(0xb1)) / 0x5 + parseInt(__DECODE_0__(0xbc)) / 0x6 * (-parseInt(__DECODE_0__(0xaf)) / 0x7) + parseInt(__DECODE_0__(0xbb)) / 0x8 + parseInt(__DECODE_0__(0xb0)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xeccde);
function __STRING_ARRAY__() {
  var _0x3fb267 = ['6236444sgVPyF', '15468ofzIkw', 'log', 'push', 'split', 'concat', '/dev/stdin', '3xCeIDi', '2416784ESrhlT', '6xUmhnL', 'length', 'readFileSync', '2395372ocjefd', '45452061elsNUw', '5204480xzDbUU', '1447908GisSrb'];
  __STRING_ARRAY__ = function () {
    return _0x3fb267;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var ary = [];
  for (var i = 0x0; i < input[__DECODE_0__(0xb7)]('\x0a')[0x0]['split']('\x20')[0x0]; i++) {
    ary[__DECODE_0__(0xb6)](0x1);
  }
  var str = input[__DECODE_0__(0xb7)]('\x0a')[0x1];
  for (var i = 0x2; i < input[__DECODE_0__(0xb7)]('\x0a')[__DECODE_0__(0xbd)]; i++) {
    var jumon = input[__DECODE_0__(0xb7)]('\x0a')[i][__DECODE_0__(0xb7)]('\x20');
    var newAry = [];
    for (var j = 0x0; j < ary[__DECODE_0__(0xbd)]; j++) {
      newAry['push'](0x0);
    }
    if (jumon[0x1] == 'L') {
      for (var j = 0x0; j < str[__DECODE_0__(0xbd)]; j++) {
        if (j != 0x0 || str[j] != jumon[0x0]) {
          newAry[str[j] == jumon[0x0] ? j - 0x1 : j] += ary[j];
        }
      }
    } else {
      for (var j = 0x0; j < str[__DECODE_0__(0xbd)]; j++) {
        if (j != ary[__DECODE_0__(0xbd)] - 0x1 || str[j] != jumon[0x0]) {
          newAry[str[j] == jumon[0x0] ? j + 0x1 : j] += ary[j];
        }
      }
    }
    ary = newAry[__DECODE_0__(0xb8)]();
  }
  var golems = 0x0;
  for (var i of ary) {
    golems += i;
  }
  console[__DECODE_0__(0xb5)](golems);
}
Main(require('fs')[__DECODE_0__(0xae)](__DECODE_0__(0xb9), 'utf8'));
