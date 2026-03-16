(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x72)) / 0x1 + parseInt(__DECODE_0__(0x6c)) / 0x2 + -parseInt(__DECODE_0__(0x74)) / 0x3 + parseInt(__DECODE_0__(0x71)) / 0x4 + -parseInt(__DECODE_0__(0x78)) / 0x5 + parseInt(__DECODE_0__(0x70)) / 0x6 * (parseInt(__DECODE_0__(0x76)) / 0x7) + -parseInt(__DECODE_0__(0x79)) / 0x8 * (-parseInt(__DECODE_0__(0x6d)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x508dd);
var input = require('fs')['readFileSync'](__DECODE_0__(0x6b), __DECODE_0__(0x73));
function __STRING_ARRAY__() {
  var _0x440cb4 = ['875CwbvAX', 'shift', '2072100uEdZOF', '650456OcSITD', '/dev/stdin', '661280aUHKYc', '9mdkFHX', 'log', 'split', '29010ytvZVe', '249168wTaugd', '313894VceNon', 'utf8', '1944417pbszgx', 'replace'];
  __STRING_ARRAY__ = function () {
    return _0x440cb4;
  };
  return __STRING_ARRAY__();
}
var Arr = input[__DECODE_0__(0x75)](/\n$/, '')[__DECODE_0__(0x6f)]('\x0a');
function __DECODE_0__(XsnjoB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XsnjoB, key);
}
while (!![]) {
  var x = Arr[__DECODE_0__(0x77)]()[__DECODE_0__(0x6f)]('');
  if (x[0x0] == '0') {
    break;
  }
  var y = Arr[__DECODE_0__(0x77)]()[__DECODE_0__(0x6f)]('');
  var z = Arr[__DECODE_0__(0x77)]()['split']('');
  var ans = 'NA';
  for (var i = 0x0; i < 0x2; i++) {
    var s = ['b', 'w'][i];
    if (x[0x0] + x[0x1] + x[0x2] == s + s + s) {
      ans = s;
    }
    if (y[0x0] + y[0x1] + y[0x2] == s + s + s) {
      ans = s;
    }
    if (z[0x0] + z[0x1] + z[0x2] == s + s + s) {
      ans = s;
    }
    if (x[0x0] + y[0x0] + z[0x0] == s + s + s) {
      ans = s;
    }
    if (x[0x1] + y[0x1] + z[0x1] == s + s + s) {
      ans = s;
    }
    if (x[0x2] + y[0x2] + z[0x2] == s + s + s) {
      ans = s;
    }
    if (x[0x0] + y[0x1] + z[0x2] == s + s + s) {
      ans = s;
    }
    if (x[0x2] + y[0x1] + z[0x0] == s + s + s) {
      ans = s;
    }
  }
  console[__DECODE_0__(0x6e)](ans);
}
