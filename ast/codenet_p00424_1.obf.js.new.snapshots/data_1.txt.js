var a0_0x4c1e07 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x3534fd = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x3534fd(0x161)) / 0x1 + parseInt(_0x3534fd(0x172)) / 0x2 * (parseInt(_0x3534fd(0x160)) / 0x3) + -parseInt(_0x3534fd(0x16c)) / 0x4 * (parseInt(_0x3534fd(0x165)) / 0x5) + -parseInt(_0x3534fd(0x162)) / 0x6 * (-parseInt(_0x3534fd(0x16f)) / 0x7) + parseInt(_0x3534fd(0x164)) / 0x8 * (parseInt(_0x3534fd(0x16d)) / 0x9) + parseInt(_0x3534fd(0x171)) / 0xa * (-parseInt(_0x3534fd(0x16b)) / 0xb) + -parseInt(_0x3534fd(0x169)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc4c0a);
function __STRING_ARRAY__() {
  var _0x336c04 = ['utf8', '10sPdrus', '1249842NBYiPR', 'hasOwnProperty', '/dev/stdin', '6OPbmzE', '165364DSiMJw', '768xvyKsI', 'length', '8edQeSW', '51195dANgBI', 'slice', 'split', 'readFileSync', '21795684tbjEKB', 'trim', '476223gSoZTM', '388JyJELg', '8725419dtfwLP', 'shift', '69671PTejZO'];
  __STRING_ARRAY__ = function () {
    return _0x336c04;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[a0_0x4c1e07(0x168)](a0_0x4c1e07(0x15f), a0_0x4c1e07(0x170));
function __DECODE_0__(OSWgGb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OSWgGb, key);
}
var Arr = input[a0_0x4c1e07(0x16a)]()[a0_0x4c1e07(0x167)]('\x0a');
while (Arr['length'] > 0x1) {
  var AL = Arr[a0_0x4c1e07(0x16e)]();
  var hash = {};
  for (var i = 0x0; i < AL; i++) {
    var arr = Arr[i]['trim']()[a0_0x4c1e07(0x167)]('\x20');
    hash[arr[0x0]] = arr[0x1];
  }
  Arr = Arr[a0_0x4c1e07(0x166)](AL, Arr[a0_0x4c1e07(0x163)] + 0x1);
  var AL = Arr[a0_0x4c1e07(0x16e)]();
  var str = '';
  for (var i = 0x0; i < AL; i++) {
    var k = Arr[i][a0_0x4c1e07(0x16a)]();
    str += hash[a0_0x4c1e07(0x15e)](k) ? hash[k] : k;
  }
  Arr = Arr[a0_0x4c1e07(0x166)](AL, Arr[a0_0x4c1e07(0x163)] + 0x1);
  console['log'](str);
  if (Arr[0x0] == '0') {
    break;
  }
}
