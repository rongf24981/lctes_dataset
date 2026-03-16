function __DECODE_0__(MgzacI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x72;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MgzacI, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x7a)) / 0x1 * (parseInt(__DECODE_0__(0x7e)) / 0x2) + -parseInt(__DECODE_0__(0x79)) / 0x3 * (-parseInt(__DECODE_0__(0x7d)) / 0x4) + parseInt(__DECODE_0__(0x76)) / 0x5 + -parseInt(__DECODE_0__(0x81)) / 0x6 + parseInt(__DECODE_0__(0x77)) / 0x7 + parseInt(__DECODE_0__(0x73)) / 0x8 + parseInt(__DECODE_0__(0x7b)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xeba9f);
var input = require('fs')[__DECODE_0__(0x7f)](__DECODE_0__(0x82), __DECODE_0__(0x78));
var arr = input[__DECODE_0__(0x80)]()['split']('\x0a');
while (!![]) {
  var [n, m] = arr[__DECODE_0__(0x7c)]()[__DECODE_0__(0x72)]('\x20')['map'](Number);
  if (n == 0x0 && m == 0x0) {
    break;
  }
  var h = [];
  for (var i = 0x0; i < n; i++) {
    h[i] = 0x0;
  }
  for (var i = 0x0; i < m; i++) {
    var p = arr['shift']()[__DECODE_0__(0x72)]('\x20')[__DECODE_0__(0x75)](Number);
    h = p[__DECODE_0__(0x75)]((v, i) => h[i] + v);
  }
  console['log'](Math[__DECODE_0__(0x74)](...h));
}
function __STRING_ARRAY__() {
  var _0x25e055 = ['shift', '244kfdymK', '2PczJmY', 'readFileSync', 'trim', '5115600nXVTiW', '/dev/stdin', 'split', '1759000TibRqY', 'max', 'map', '300860TrMODH', '3366993PEXIZy', 'utf8', '26526wnjzWp', '646394YpsNOH', '10474785IxJLJu'];
  __STRING_ARRAY__ = function () {
    return _0x25e055;
  };
  return __STRING_ARRAY__();
}
