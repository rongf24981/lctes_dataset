function __STRING_ARRAY__() {
  var _0xe092c6 = ['2IGpwBs', '/dev/stdin', '2373909wSDGhS', '93359HQEicD', 'forEach', '9pTxgRs', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '3283844cLdClc', 'log', 'readFileSync', 'split', '14738170mFacIp', 'indexOf', '249459XaxOzf', '1285765UWLZGT', '138zIBElw', '3082904WLynqB', 'map'];
  __STRING_ARRAY__ = function () {
    return _0xe092c6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x9d)) / 0x1 + -parseInt(__DECODE_0__(0x90)) / 0x2 * (parseInt(__DECODE_0__(0x92)) / 0x3) + -parseInt(__DECODE_0__(0x97)) / 0x4 + parseInt(__DECODE_0__(0x9e)) / 0x5 + parseInt(__DECODE_0__(0x8d)) / 0x6 * (-parseInt(__DECODE_0__(0x93)) / 0x7) + parseInt(__DECODE_0__(0x8e)) / 0x8 * (parseInt(__DECODE_0__(0x95)) / 0x9) + parseInt(__DECODE_0__(0x9b)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6d139);
var input = require('fs')[__DECODE_0__(0x99)](__DECODE_0__(0x91), 'utf8');
var s = input['trim']()['split']('');
var abc = __DECODE_0__(0x96)[__DECODE_0__(0x9a)]('');
s = s[__DECODE_0__(0x8f)](v => abc[__DECODE_0__(0x9c)](v));
var cnt = 0x0;
var memo = 0x0;
function __DECODE_0__(TJBITH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TJBITH, key);
}
s[__DECODE_0__(0x94)](v => {
  if (memo >= v) {
    cnt++;
  }
  memo = v;
});
console[__DECODE_0__(0x98)](cnt);
