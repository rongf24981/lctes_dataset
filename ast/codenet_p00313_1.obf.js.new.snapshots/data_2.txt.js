(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe3)) / 0x1 + parseInt(__DECODE_0__(0xe8)) / 0x2 * (-parseInt(__DECODE_0__(0xe5)) / 0x3) + parseInt(__DECODE_0__(0xd6)) / 0x4 + -parseInt(__DECODE_0__(0xe4)) / 0x5 * (-parseInt(__DECODE_0__(0xd8)) / 0x6) + parseInt(__DECODE_0__(0xe2)) / 0x7 * (parseInt(__DECODE_0__(0xdc)) / 0x8) + parseInt(__DECODE_0__(0xd9)) / 0x9 * (-parseInt(__DECODE_0__(0xdb)) / 0xa) + parseInt(__DECODE_0__(0xda)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x46aa5);
var input = require('fs')[__DECODE_0__(0xd7)](__DECODE_0__(0xe6), __DECODE_0__(0xdf));
var arr = input['trim']()[__DECODE_0__(0xe1)]('\x0a');
var n = arr[__DECODE_0__(0xe0)]() - 0x0;
function __DECODE_0__(GJOXtm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GJOXtm, key);
}
var xyz = [];
for (var i = 0x0; i <= n; i++) {
  xyz[i] = [0x0, 0x0, 0x0];
}
var x = arr[__DECODE_0__(0xe0)]()[__DECODE_0__(0xe1)]('\x20')['map'](Number);
var y = arr[__DECODE_0__(0xe0)]()['split']('\x20')[__DECODE_0__(0xde)](Number);
var z = arr['shift']()[__DECODE_0__(0xe1)]('\x20')[__DECODE_0__(0xde)](Number);
x[__DECODE_0__(0xe0)]();
y[__DECODE_0__(0xe0)]();
function __STRING_ARRAY__() {
  var _0x3f49cb = ['map', 'utf8', 'shift', 'split', '35AouuPO', '327627pqGhuA', '398785VHRtrF', '6oLkbVP', '/dev/stdin', 'log', '531076eanerY', '935908txPFiU', 'readFileSync', '6yOhCUI', '12447xPvGlm', '8843098FySSWs', '2680lyzWWc', '641824PubqiG', 'forEach'];
  __STRING_ARRAY__ = function () {
    return _0x3f49cb;
  };
  return __STRING_ARRAY__();
}
z[__DECODE_0__(0xe0)]();
x[__DECODE_0__(0xdd)](v => {
  xyz[v][0x0] = 0x1;
});
y[__DECODE_0__(0xdd)](v => {
  xyz[v][0x1] = 0x1;
});
z[__DECODE_0__(0xdd)](v => {
  xyz[v][0x2] = 0x1;
});
xyz[__DECODE_0__(0xe0)]();
var cnt = 0x0;
xyz[__DECODE_0__(0xdd)](v => {
  if (v[0x0] == 0x0 && v[0x2] == 0x1) {
    cnt++;
  } else {
    if (v[0x1] == 0x1 && v[0x2] == 0x1) {
      cnt++;
    }
  }
});
console[__DECODE_0__(0xe7)](cnt);
