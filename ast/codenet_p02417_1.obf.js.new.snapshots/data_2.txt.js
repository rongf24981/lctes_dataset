(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x10b)) / 0x1 + -parseInt(__DECODE_0__(0x101)) / 0x2 + parseInt(__DECODE_0__(0x10c)) / 0x3 + parseInt(__DECODE_0__(0x10e)) / 0x4 * (parseInt(__DECODE_0__(0x10d)) / 0x5) + -parseInt(__DECODE_0__(0x107)) / 0x6 * (-parseInt(__DECODE_0__(0x104)) / 0x7) + -parseInt(__DECODE_0__(0x106)) / 0x8 * (parseInt(__DECODE_0__(0x10a)) / 0x9) + parseInt(__DECODE_0__(0x10f)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xabd6e);
var input = require('fs')['readFileSync'](__DECODE_0__(0x105), 'utf8');
input = input[__DECODE_0__(0x102)]();
input = input[__DECODE_0__(0x109)]();
var abc = __DECODE_0__(0x110)[__DECODE_0__(0x111)]('');
function __DECODE_0__(MwZMWc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x100;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MwZMWc, key);
}
var obj = {};
for (var i = 0x0; i < abc['length']; i++) {
  obj[abc[i]] = 0x0;
}
input = input[__DECODE_0__(0x108)](/[a-z]/g, function (str) {
  obj[str]++;
  return str;
});
function __STRING_ARRAY__() {
  var _0x2b8a2e = ['48MXpxHR', '3121140KAvVwL', 'replace', 'toLowerCase', '1450539WLbJeR', '778293IyZgiX', '137541vRLENe', '2483915fNpEUm', '8EJYRJa', '9028470mWeHdv', 'abcdefghijklmnopqrstuvwxyz', 'split', '\x20:\x20', '1066934akYEtE', 'trim', 'forEach', '14rxQAKt', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x2b8a2e;
  };
  return __STRING_ARRAY__();
}
abc[__DECODE_0__(0x103)](function (v, i) {
  console['log'](v + __DECODE_0__(0x100) + obj[v]);
});
