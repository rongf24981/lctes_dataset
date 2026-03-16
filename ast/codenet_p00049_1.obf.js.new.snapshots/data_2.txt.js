(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xcc)) / 0x1 + -parseInt(__DECODE_0__(0xcd)) / 0x2 * (parseInt(__DECODE_0__(0xcb)) / 0x3) + -parseInt(__DECODE_0__(0xc9)) / 0x4 + -parseInt(__DECODE_0__(0xd0)) / 0x5 + parseInt(__DECODE_0__(0xd3)) / 0x6 + parseInt(__DECODE_0__(0xd1)) / 0x7 + parseInt(__DECODE_0__(0xce)) / 0x8 * (parseInt(__DECODE_0__(0xd6)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x18bd6);
function __STRING_ARRAY__() {
  var _0x26b3ed = ['380344YOljxR', '/dev/stdin', '85230sLLBFA', '254632CHvefo', 'readFileSync', '1075686xlMfUy', 'log', 'utf8', '45yMiQHN', '397884veTooZ', 'split', '140061mQRvel', '188834PNxxeR', '2tpKFhp'];
  __STRING_ARRAY__ = function () {
    return _0x26b3ed;
  };
  return __STRING_ARRAY__();
}
w = x = y = z = 0x0;
i = require('fs')[__DECODE_0__(0xd2)](__DECODE_0__(0xcf), __DECODE_0__(0xd5))[__DECODE_0__(0xca)](/\s|,/);
c = j = -0x1;
for (; c = i[j += 0x2]; n = '\x0a') {
  c == 'A' ? w++ : c == 'B' ? x++ : c == 'O' ? z++ : y++;
}
function __DECODE_0__(tXoZfN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tXoZfN, key);
}
console[__DECODE_0__(0xd4)](w + n + x + n + y + n + z);
