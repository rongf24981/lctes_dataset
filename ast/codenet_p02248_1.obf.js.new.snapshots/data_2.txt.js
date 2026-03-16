function __STRING_ARRAY__() {
  var _0x31c559 = ['utf8', '1633770TylTUE', '465504BncNZH', '9eJqibK', '222747tIsayg', '89404mRlAcz', '/dev/stdin', 'split', '112frhSUH', '4279986YnZZZU', 'log', '11852280izMDEo', '1157196KnbMTd'];
  __STRING_ARRAY__ = function () {
    return _0x31c559;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x7a)) / 0x1 + parseInt(__DECODE_0__(0x77)) / 0x2 + parseInt(__DECODE_0__(0x7b)) / 0x3 * (parseInt(__DECODE_0__(0x7d)) / 0x4) + parseInt(__DECODE_0__(0x79)) / 0x5 + parseInt(__DECODE_0__(0x74)) / 0x6 + parseInt(__DECODE_0__(0x7c)) / 0x7 * (-parseInt(__DECODE_0__(0x73)) / 0x8) + -parseInt(__DECODE_0__(0x76)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5eeda);
var input = require('fs')['readFileSync'](__DECODE_0__(0x71), __DECODE_0__(0x78));
function __DECODE_0__(NHXsjb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x71;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NHXsjb, key);
}
var arr = input['trim']()[__DECODE_0__(0x72)]('\x0a');
var a = arr[0x0];
var b = arr[0x1];
var str = '';
for (var i = 0x0; i < a['length']; i++) {
  var flag = !![];
  ;
  for (var j = 0x0; j < b['length']; j++) {
    if (a[i + j] != b[j]) {
      flag = ![];
      break;
    }
  }
  if (flag) {
    str += i + '\x0a';
  }
}
console[__DECODE_0__(0x75)](str);
