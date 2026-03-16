(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1e1)) / 0x1 + parseInt(__DECODE_0__(0x1d7)) / 0x2 * (parseInt(__DECODE_0__(0x1e2)) / 0x3) + -parseInt(__DECODE_0__(0x1dd)) / 0x4 + -parseInt(__DECODE_0__(0x1e3)) / 0x5 + parseInt(__DECODE_0__(0x1de)) / 0x6 * (parseInt(__DECODE_0__(0x1db)) / 0x7) + parseInt(__DECODE_0__(0x1df)) / 0x8 + -parseInt(__DECODE_0__(0x1d9)) / 0x9 * (-parseInt(__DECODE_0__(0x1d6)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe5e34);
function __DECODE_0__(vDcOzs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vDcOzs, key);
}
function __STRING_ARRAY__() {
  var _0x374b3c = ['3JuWSnQ', '3061870DhmJNO', 'readFileSync', '91190OAtinl', '300258ZaPyZM', 'map', '1287JwjQiL', 'utf8', '207403ovEKjs', 'split', '5629248xTjyWW', '258vdZtVo', '11685656MAGNTa', '/dev/stdin', '1227594tpvPni'];
  __STRING_ARRAY__ = function () {
    return _0x374b3c;
  };
  return __STRING_ARRAY__();
}
require('fs')[__DECODE_0__(0x1d5)](__DECODE_0__(0x1e0), __DECODE_0__(0x1da))[__DECODE_0__(0x1dc)]('\x0a')[__DECODE_0__(0x1d8)](function (i) {
  j = +i;
  s = 0x0;
  if (j) {
    while (j = ~~(j / 0x5)) {
      s += j;
    }
    console['log'](s);
  }
});
