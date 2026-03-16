function __STRING_ARRAY__() {
  var _0x2f6254 = ['1043apovEZ', '1067lkeQgz', '467538KVopdA', 'log', '1114742bisVgc', 'push', 'forEach', 'readFileSync', '47776tSZYkE', '20570nxbScN', 'sort', 'map', '38660HxflcY', '1420648ijrzJH', 'split', '1yrQXIA', '12090663MPvrOT', 'length', '1554aPAiet', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x2f6254;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x17b)) / 0x1 * (parseInt(__DECODE_0__(0x170)) / 0x2) + parseInt(__DECODE_0__(0x16e)) / 0x3 + parseInt(__DECODE_0__(0x179)) / 0x4 + -parseInt(__DECODE_0__(0x175)) / 0x5 * (parseInt(__DECODE_0__(0x16a)) / 0x6) + -parseInt(__DECODE_0__(0x16c)) / 0x7 * (-parseInt(__DECODE_0__(0x174)) / 0x8) + parseInt(__DECODE_0__(0x17c)) / 0x9 + parseInt(__DECODE_0__(0x178)) / 0xa * (-parseInt(__DECODE_0__(0x16d)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb6368);
var input = require('fs')[__DECODE_0__(0x173)]('/dev/stdin', 'utf8');
function __DECODE_0__(gusQme, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gusQme, key);
}
var arr = input['trim']()[__DECODE_0__(0x17a)]('\x0a');
while (!![]) {
  var N = arr[__DECODE_0__(0x16b)]() - 0x0;
  if (N == 0x0) {
    break;
  }
  var obj = {};
  var ary = [];
  for (var i = 0x0; i < N; i++) {
    var nws = arr[__DECODE_0__(0x16b)]()['split']('\x20');
    var name = nws[0x0];
    var w = nws[0x1] - 0x0;
    var s = nws[0x2][__DECODE_0__(0x17a)]('')[__DECODE_0__(0x177)](Number);
    s = s[__DECODE_0__(0x17d)] == 0x3 ? s[0x0] * 0x3c + s[0x1] * 0xa + s[0x2] : s[0x0] * 0x258 + s[0x1] * 0x3c + 0xa * s[0x2] + s[0x3];
    obj[name] = w * 0x5a0 + s;
    ary[__DECODE_0__(0x171)](w * 0x5a0 + s);
  }
  var P = arr[__DECODE_0__(0x16b)]() - 0x0;
  for (var i = 0x0; i < P; i++) {
    var f = arr[__DECODE_0__(0x16b)]();
    ary[__DECODE_0__(0x171)](obj[f] - 29.5);
  }
  ary[__DECODE_0__(0x176)](function (a, b) {
    return a - b;
  });
  var cnt = 0x0;
  var i = 0x0;
  var p = 0x0;
  ary[__DECODE_0__(0x172)](function (v) {
    if (v % 0x1 == 0.5) {
      cnt++;
      p++;
      i = v + 29.5 + 0x1e;
    } else {
      if (i <= v) {
        cnt++;
        i = v + 0x1e;
      }
    }
  });
  if (p != P) {
    cnt = -0x1;
  }
  console[__DECODE_0__(0x16f)](cnt);
}
