function __STRING_ARRAY__() {
  var _0x510d6a = ['utf8', '16OBvhKO', '/dev/stdin', '2135722xrjvRV', '826587NETTIx', '5262erGSQO', '20tQqTtX', '1515770UawcYF', 'readFileSync', '1300GAWllz', '6409417FCtpJV', '12EiZbxp', 'split', '3RnOAVn', '81710431YqwgNK', '6440008jIvvVf'];
  __STRING_ARRAY__ = function () {
    return _0x510d6a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(kBIXFA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kBIXFA, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x19b)) / 0x1 + parseInt(__DECODE_0__(0x1a7)) / 0x2 * (-parseInt(__DECODE_0__(0x1a1)) / 0x3) + -parseInt(__DECODE_0__(0x1a3)) / 0x4 + -parseInt(__DECODE_0__(0x19d)) / 0x5 * (parseInt(__DECODE_0__(0x1a9)) / 0x6) + -parseInt(__DECODE_0__(0x19e)) / 0x7 * (parseInt(__DECODE_0__(0x1a5)) / 0x8) + parseInt(__DECODE_0__(0x1a8)) / 0x9 * (-parseInt(__DECODE_0__(0x19a)) / 0xa) + -parseInt(__DECODE_0__(0x1a2)) / 0xb * (-parseInt(__DECODE_0__(0x19f)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf2184);
function Main(input) {
  var str = input;
  const n = str['split']('\x0a');
  var k = Number(n[0x0]);
  var p = n[0x1][__DECODE_0__(0x1a0)]('\x20');
  var a = Number(p[0x0]);
  var b = Number(p[0x1]);
  var ans = '';
  for (var i = a; i <= b; i++) {
    if (i % k === 0x0) {
      ans = 'OK';
    }
  }
  if (ans !== 'OK') {
    ans = 'NG';
  }
  console['log'](ans);
}
Main(require('fs')[__DECODE_0__(0x19c)](__DECODE_0__(0x1a6), __DECODE_0__(0x1a4)));
